import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export function localDate(now = new Date()) {
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
}
export function plusDays(date, days) {
  const [y,m,d] = date.split('-').map(Number);
  return localDate(new Date(y,m-1,d+days,12));
}
export function update(previous = {}, action, outcome, date, note = '') {
  const p = structuredClone(previous);
  if (action === 'record') {
    if (!['todo','attempted','hinted','independent','exempt'].includes(outcome)) throw Error('Unknown outcome');
    p.status = outcome;
    p.reviewPasses = 0;
    p.due = ['hinted','independent'].includes(outcome) ? plusDays(date,outcome==='hinted'?1:7) : null;
    if (['hinted','independent'].includes(outcome)) p.accepted = true;
  } else if (action === 'review') {
    if (!p.accepted) throw Error('Record an accepted solve before reviewing');
    if (!['pass','fail'].includes(outcome)) throw Error('Use review pass or fail');
    p.status = outcome === 'pass' ? 'independent' : 'hinted';
    p.reviewPasses = outcome === 'pass' ? (p.reviewPasses || 0)+1 : 0;
    const interval = outcome === 'fail' ? 1 : [7,21,60][Math.min(p.reviewPasses-1,2)];
    p.due = plusDays(date, interval);
  } else throw Error('Unknown action');
  p.history = [...(p.history || []), {date,action,outcome,note}];
  return p;
}
export function dueProblems(problems, progress, date) {
  return problems.filter(p=>progress[p.id]?.due && progress[p.id].due<=date)
    .sort((a,b)=>progress[a.id].due.localeCompare(progress[b.id].due)||a.order-b.order);
}
export function chooseNext(problems, progress, date) {
  const due = dueProblems(problems,progress,date)[0];
  if(due) return {kind:'review',problem:due};
  const next = problems.find(p=>['todo','attempted'].includes(progress[p.id]?.status || 'todo'));
  return next ? {kind:'learn',problem:next} : null;
}
export function validate(curriculum, catalog) {
  const {modules,problems} = curriculum;
  const official = new Map(catalog.problems.map(p=>[p.id,p]));
  const seen = new Set();
  if (modules.some((m,i)=>m.number!==i+1)) throw Error('Module numbers must be contiguous');
  if (problems.length !== official.size) throw Error('Catalog coverage mismatch');
  for(const [i,p] of problems.entries()) {
    const source=official.get(p.id), m=modules.find(m=>m.number===p.module);
    if (!source || seen.has(p.id) || p.order!==i+1) throw Error('Unknown, duplicate, or misordered task '+p.id);
    if (source.title!==p.title || source.url!==p.url || source.section!==p.section) throw Error('Catalog metadata mismatch '+p.id);
    if (!m || m.tier!==p.tier || !m.ids.includes(p.id)) throw Error('Invalid module assignment '+p.id);
    seen.add(p.id);
  }
  const flattened=modules.flatMap(m=>m.ids);
  if (JSON.stringify(flattened)!==JSON.stringify(problems.map(p=>p.id))) throw Error('Module order differs from problem order');
  for(const m of modules) {
    if (!m.ids.length || !m.learn || !m.gate) throw Error('Incomplete module '+m.number);
    if (m.prereqs.some(n=>!Number.isInteger(n)||n<1||n>=m.number)) throw Error('Prerequisite must precede module '+m.number);
  }
  return `${problems.length} unique tasks; ${modules.length} modules; complete snapshot coverage; valid prerequisites.`;
}
function read(name) {return JSON.parse(fs.readFileSync(path.join(ROOT,name),'utf8'));}
function save(name,data) {
  const dest=path.join(ROOT,name), temp=dest+'.tmp';
  fs.writeFileSync(temp,data);
  fs.renameSync(temp,dest);
}
function validateProgress(progress, problems) {
  const ids=new Set(problems.map(p=>String(p.id)));
  for(const [id,p] of Object.entries(progress)) {
    if(!ids.has(id)||!p||!['todo','attempted','hinted','independent','exempt'].includes(p.status)) throw Error('Invalid progress entry '+id);
    if(p.due && !/^\d{4}-\d{2}-\d{2}$/.test(p.due)) throw Error('Invalid due date '+id);
  }
}
function summary(problems,progress) {
  const accepted=problems.filter(p=>progress[p.id]?.accepted).length;
  const independent=problems.filter(p=>progress[p.id]?.status==='independent').length;
  const exempt=problems.filter(p=>progress[p.id]?.status==='exempt').length;
  return `${accepted}/${problems.length} accepted · ${independent} currently independent · ${exempt} exempt`;
}
function render(curriculum,progress,date) {
  const {problems,modules}=curriculum;
  let out=`# Progress\n\n${summary(problems,progress)}\n\nGenerated on ${date} from \`progress.json\`. Checkboxes mean accepted at least once, including hinted solves. The status column tracks current recall separately. Exempt tasks do not count as accepted unless they were previously solved.\n\n`;
  out+='Run `node scripts/practice.mjs due` for reviews due today. See [the practice loop](docs/PRACTICE.md) before selecting new work.\n';
  for(const m of modules) {
    out+=`\n## ${m.number}. ${m.title}\n\n| Accepted | Order | Task | Status | Next review |\n| --- | --- | --- | --- | --- |\n`;
    for(const p of problems.filter(p=>p.module===m.number)) {
      const s=progress[p.id]||{};
      out+=`| ${s.accepted?'[x]':'[ ]'} | ${p.order} | [${p.title}](${p.url}) | ${s.status||'todo'} | ${s.due||'—'} |\n`;
    }
  }
  save('PROGRESS.md',out);
}
export function main(args) {
  const curriculum=read('data/curriculum.json');
  const {problems,modules}=curriculum;
  const progress=read('progress.json');
  validateProgress(progress,problems);
  const date=localDate(), [command,...rest]=args;
  if(command==='validate') {console.log(validate(curriculum,read('data/catalog.json')));return;}
  if(command==='status') {console.log(summary(problems,progress));return;}
  if(command==='render') {render(curriculum,progress,date);console.log('Updated PROGRESS.md');return;}
  if(command==='due') {
    const due=dueProblems(problems,progress,date);
    console.log(due.length ? due.map(p=>`${progress[p.id].due} · ${p.id} · ${p.title}\n${p.url}`).join('\n') : 'No reviews due today.');return;
  }
  if(command==='next') {
    const next=chooseNext(problems,progress,date);
    if(!next){console.log('No new tasks or reviews due. Check your contest log or revisit exempt tasks.');return;}
    const p=next.problem;
    console.log(`${next.kind==='review'?'Review':'Next'}: #${p.order} · ${p.title} (${p.id})\n${p.url}`);
    if(!rest.includes('--blind')) console.log(`Module ${p.module}: ${modules[p.module-1].title} · ${p.tier}`);
    return;
  }
  if(command==='record'||command==='review') {
    const [rawId,outcome,...notes]=rest;
    const p=problems.find(p=>String(p.id)===rawId);
    if(!p) throw Error('Use a valid CSES task ID, not the roadmap order number');
    progress[p.id]=update(progress[p.id],command,outcome,date,notes.join(' '));
    save('progress.json',JSON.stringify(progress,null,2)+'\n');
    render(curriculum,progress,date);
    console.log(`${p.title}: ${progress[p.id].status}; next review ${progress[p.id].due||'not scheduled'}`);
    return;
  }
  console.log('Usage: node scripts/practice.mjs next [--blind] | due | status | render | validate\n       node scripts/practice.mjs record ID todo|attempted|hinted|independent|exempt [note]\n       node scripts/practice.mjs review ID pass|fail [note]');
  if(command) throw Error('Unknown command '+command);
}
if(process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  try {main(process.argv.slice(2));} catch(error) {console.error(error.message);process.exitCode=1;}
}
