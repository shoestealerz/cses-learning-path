# Practice around every Codeforces contest

## Allocate time by feedback, not by a calendar quota

Keep your existing contest participation. Count contests, review, and upsolving as training time. In the remaining time, start with roughly two CSES learning sessions for every one mixed/review session. Change that balance when contest results show a repeated weakness. This is a starting policy, not a claim that a particular ratio maximizes rating.

On a contest day, a short familiar warmup is enough; do not force a new advanced topic before the round. After the contest, write a brief debrief while the decisions are fresh. Use the next practice block to upsolve the easiest useful problem you missed. Aim for one or two instructive upsolves, not every problem regardless of difficulty.

If contests are crowded together, new CSES work can drop to zero. Keep a small review queue and resume the roadmap when the contest backlog is manageable. After about three contests, address the most repeated failure mode rather than reacting to every isolated hard problem.

## One problem session

1. Restate the task and inspect constraints. Write a brute-force approach and identify why it is too slow.
2. Try small cases; look for an invariant, monotonicity, or a state definition. Before coding, state your proof idea and complexity.
3. Test boundaries, duplicates, empty choices where allowed, overflow, and adversarial shapes. For complex algorithms, compare with a brute-force solver on random tiny inputs.
4. After acceptance, write a short note: what observation mattered, why the solution is correct, what failed, and what clue could reveal the technique in another problem.
5. Log the actual outcome. Re-solve later without notes; a copied implementation is not independent mastery.

For a familiar technique, start with a 25–40 minute independent attempt. For a new technique, allow roughly 45–60 minutes. Continue longer if you are making concrete progress. If you are merely repeating the same attempt, seek the smallest useful hint. These are flexible timeboxes, not deadlines or ability judgments.

## When stuck

Use this ladder: reread constraints → produce counterexamples → identify the missing concept → read an explanation of that concept → read a solution explanation → inspect code only if still necessary. Close the source, explain the idea in your own words, then implement from scratch. Record `hinted` even if the final code is yours. Schedule a next-day retrieval attempt and one later fresh transfer problem.

Do not open solutions during a live contest. Apply this protocol to practice and post-contest upsolving.

## What counts as learning

| Outcome | Meaning | Next action |
| --- | --- | --- |
| Attempted | Not accepted yet | Diagnose the gap; retry or use a small hint |
| Hinted | Accepted with outside help, or recall failed later | Rebuild unaided soon |
| Independent | Accepted and explained without help | Review later and test transfer |
| Exempt | Demonstrated existing mastery, skipped for placement | Does not count toward full-set completion |

Do not wait to memorize every task before moving on. A useful module exit check is: explain the invariant or recurrence, implement the core structure unaided, and attempt a fresh problem where the technique is not advertised. If most attempts need hints, step back to a prerequisite. If the tasks are routine, accelerate and sample rather than grind. After the Core, continue Extension or target contest gaps; finishing all 400 is a separate completion objective.

## Reviews

The tracker schedules the first review in 1 day after a hinted solve or 7 days after an independent solve. Passing a review sets the next interval to 7, 21, then 60 days (repeating 60 thereafter). A failure restarts the ladder at 1 day. A review is an unaided reconstruction, ideally including code; rereading a note does not count as a pass. Dates are suggestions: move on when doing so is more instructive, but do not let accepted-with-hints become invisible.

Use `next --blind` to hide topic labels for a selected task. This is not a substitute for genuinely fresh mixed practice: you may still remember the module or solution. The Codeforces rounds provide the primary test of recognition and transfer.

## A compact contest debrief

Record where time was lost, not just which problem failed. Classify the main cause as knowledge, observation/proof, implementation, complexity, or time management. State one repair action. For implementation bugs, prioritize debugging and checking habits; learning another algorithm may not address the actual issue.

Use [the gap map](CONTEST-GAPS.md) to select 2–4 targeted CSES problems. Then return to a fresh Codeforces problem. Avoid replacing all mixed practice with a long run of identically tagged tasks.
