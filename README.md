# CSES learning path

**400 problems. 36 modules. Built to complement Codeforces contests.**

Start with **[placement and your first session](docs/START.md)**, then follow **[the complete learning order](ROADMAP.md)**. The first **138 problems** form the Core; 92 Extension and 170 Specialist problems complete the set. All task names and links were checked against the [official CSES problem set](https://cses.fi/problemset/) on September 21, 2026.

This is a reasoned learning sequence, not a universally optimal ranking. It puts prerequisites and broadly reusable techniques early, delays unusually hard introductory tasks, and revisits ideas in combinations. Your contest mistakes and diagnostic results should change what you do next.

**Progress: 16/400 accepted (4%) as of 2026-09-24.** [Accepted source code and submission history](solutions/README.md).

## How to use it

1. **Place yourself.** Use the diagnostic; skip demonstrated mastery rather than repeating every warmup.
2. **Follow the numbered roadmap.** Learn a technique, attempt its problems, and pass the module's exit check.
3. **Upsolve your Codeforces contests.** The next useful unsolved contest problem takes priority over a new CSES task.
4. **Return to old problems without notes.** Acceptance after a hint is a learning step; independent recall is a different milestone.
5. **Test transfer.** After a module, try a fresh, untagged Codeforces problem near your current ability. Recognizing a topic from a CSES heading is easier than choosing it in a contest.

| Resource | Purpose |
| --- | --- |
| [Full order](ROADMAP.md) | Every task, prerequisites, objectives, and exit checks |
| [Practice loop](docs/PRACTICE.md) | Contest integration, stuck protocol, and review rules |
| [Contest gap map](docs/CONTEST-GAPS.md) | Turn a contest mistake into targeted CSES practice |
| [Progress](PROGRESS.md) | Generated status and completion dashboard |
| [Contest log](notes/CONTEST-LOG.md) | Record the lesson and follow-up from each contest |
| [Solution note template](notes/SOLUTION-TEMPLATE.md) | Capture proof, complexity, and the reusable insight |

## Optional local tracker

The roadmap works directly on GitHub. The tracker requires Node.js 22 or later, has no packages to install, and never submits code or connects to your accounts.

```sh
node scripts/practice.mjs next
node scripts/practice.mjs next --blind
node scripts/practice.mjs due
node scripts/practice.mjs status

# Replace 1068 with the CSES task ID in its URL.
node scripts/practice.mjs record 1068 attempted "Could not justify the invariant"
node scripts/practice.mjs record 1068 accepted "Verified acceptance; recall not assessed"
node scripts/practice.mjs record 1068 hinted "Accepted after a conceptual hint"
node scripts/practice.mjs record 1068 independent "Accepted, proof and complexity explained"
node scripts/practice.mjs review 1068 pass "Rebuilt without notes"
node scripts/practice.mjs review 1068 fail "Needed the recurrence again"
node scripts/practice.mjs record 1068 exempt "Already mastered; skipped after diagnostic"
node scripts/practice.mjs record 1068 todo "Return this to the learning queue"
node scripts/practice.mjs render
node --test
```

These are examples of alternative outcomes, not commands to run sequentially for one problem. Use `accepted`, `hinted`, and `independent` only after actual acceptance. `accepted` records a verified solve without assuming hint use or independent recall; it skips the new-task queue but schedules no review until you record a learning outcome or complete a review. `exempt` skips known material but does **not** count as solved. A failed review removes independent-recall status while preserving the acceptance history. Successful reviews become due after 7, 21, and then 60 days; initial hinted solves are due after 1 day and independent solves after 7 days. These intervals are adjustable coaching defaults, not experimentally optimized numbers.

The tracker uses your computer's local calendar date. `next` prioritizes due reviews, then the earliest unfinished task; it omits hinted/independent tasks until their review date. It does not schedule Codeforces upsolves, so check your contest log first. `--blind` hides module labels, not the problem title, and does not randomize task selection.

`progress.json` is the authoritative tracker state. `PROGRESS.md` and the roadmap’s accepted markers and code links are regenerated after each update; do not edit generated status by hand. History is retained. To track manually, keep your own notes or checkboxes in a separate file. The 2026-09-24 CSES snapshot has been imported with verified submission links. The tracker itself does not connect to CSES; future imports require another explicit sync.

## Store your solutions

Use `solutions/<task-id>-<short-name>.<extension>` and `notes/<task-id>.md`. The path is language-independent: practice in your contest language. The `solutions/` directory contains your archived accepted submissions. Open a solution only when you intend to review it.

## Maintain the plan

`data/catalog.json` is the official-list snapshot; `data/curriculum.json` contains the curated order and module metadata. `node scripts/practice.mjs validate` checks coverage, duplicate IDs, prerequisite ordering, and task URLs against that snapshot. It does not check the current website or algorithmic difficulty. New CSES tasks will need deliberate placement. If editing the curriculum, update `ROADMAP.md` too.

Reference: [Competitive Programmer's Handbook](https://cses.fi/book/book.pdf), by Antti Laaksonen. Problem statements remain on CSES; this repository contains links and an independently designed practice plan. It is not affiliated with CSES or Codeforces.
