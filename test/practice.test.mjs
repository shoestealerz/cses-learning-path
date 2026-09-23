import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {update,chooseNext,plusDays,validate} from '../scripts/practice.mjs';

const read=name=>JSON.parse(fs.readFileSync(new URL('../'+name,import.meta.url),'utf8'));
test('curriculum covers the complete official snapshot with earlier prerequisites',()=>{
  assert.match(validate(read('data/curriculum.json'),read('data/catalog.json')),/400 unique tasks/);
});
test('hinted acceptance enters retrieval queue; failed recall preserves acceptance and history',()=>{
  const hinted=update({},'record','hinted','2026-09-21','Needed a hint');
  assert.equal(hinted.due,'2026-09-22');
  const passed=update(hinted,'review','pass','2026-09-22');
  assert.equal(passed.status,'independent');
  assert.equal(passed.due,'2026-09-29');
  const failed=update(passed,'review','fail','2026-09-29');
  assert.equal(failed.accepted,true);
  assert.equal(failed.status,'hinted');
  assert.equal(failed.due,'2026-09-30');
  assert.equal(failed.history.length,3);
  assert.equal(hinted.history.length,1);
});
test('review intervals progress across month and year boundaries',()=>{
  let p=update({},'record','independent','2026-12-28');
  assert.equal(p.due,'2027-01-04');
  p=update(p,'review','pass','2027-01-04');
  assert.equal(p.due,'2027-01-11');
  p=update(p,'review','pass','2027-01-11');
  assert.equal(p.due,'2027-02-01');
  p=update(p,'review','pass','2027-02-01');
  assert.equal(p.due,'2027-04-02');
  assert.equal(plusDays('2028-02-28',1),'2028-02-29');
});
test('reviews precede new tasks; exempt is not accepted; future reviews are skipped',()=>{
  const tasks=[{id:1,order:1},{id:2,order:2},{id:3,order:3}];
  const state={1:update({},'record','exempt','2026-09-21'),3:update({},'record','hinted','2026-09-21')};
  assert.equal(state[1].accepted,undefined);
  assert.equal(chooseNext(tasks,state,'2026-09-21').problem.id,2);
  assert.equal(chooseNext(tasks,state,'2026-09-22').problem.id,3);
  assert.equal(chooseNext(tasks,state,'2026-09-22').kind,'review');
});
test('invalid outcomes and review without acceptance are rejected',()=>{
  assert.throws(()=>update({},'review','pass','2026-09-21'));
  assert.throws(()=>update({},'record','solved','2026-09-21'));
});
test('imported acceptance does not invent recall or review dates and can enter review later',()=>{
  const accepted=update({},'record','accepted','2026-09-23','Verified on CSES');
  assert.equal(accepted.accepted,true);
  assert.equal(accepted.status,'accepted');
  assert.equal(accepted.due,null);
  const tasks=[{id:1,order:1},{id:2,order:2}];
  assert.equal(chooseNext(tasks,{1:accepted},'2026-09-23').problem.id,2);
  const reviewed=update(accepted,'review','pass','2026-09-24');
  assert.equal(reviewed.status,'independent');
  assert.equal(reviewed.due,'2026-10-01');
  assert.equal(reviewed.history.length,2);
});
test('curriculum validation rejects duplication and future prerequisites',()=>{
  const c=read('data/curriculum.json'), catalog=read('data/catalog.json');
  c.problems[1].id=c.problems[0].id;
  assert.throws(()=>validate(c,catalog));
  const other=read('data/curriculum.json');
  other.modules[0].prereqs=[2];
  assert.throws(()=>validate(other,catalog));
});
