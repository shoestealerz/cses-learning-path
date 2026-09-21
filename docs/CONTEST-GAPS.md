# From a contest gap to practice

Use this after upsolving, once you know why you missed the problem. These are topic mappings, not Codeforces difficulty equivalences. Pick the first unfamiliar task in the referenced modules; prerequisites still apply.

| Repeated gap | Roadmap modules | Repair task |
| --- | --- | --- |
| Off-by-one, overflow, or statement translation | 1, 3 | Write boundary cases before coding and prove the scan invariant |
| Cannot justify a greedy choice | 2, 10 | Find a counterexample to a bad choice, then give an exchange argument |
| Missed monotonicity or binary search on the answer | 4 | Separate feasibility, monotonicity proof, and binary-search bounds |
| Subarrays, frequencies, or two pointers | 3, 5, 18 | Explain what changes when numbers can be negative |
| Weak constructive/parity reasoning | 6, 25 | Prove necessity and sufficiency; build a small output checker |
| DP state or loop order is unclear | 8, 11 | Write the meaning of every state and what is counted exactly once |
| Need subset or digit DP | 19 | Derive the state on a tiny instance before optimizing |
| BFS/DFS modeling or path restoration | 9 | Draw states and edges; explain visited timing and parent links |
| Weighted graph, topological DP, or connectivity | 13, 20 | Choose algorithms from graph assumptions, not a remembered template |
| Range updates, ranks, or offline queries | 12, 18, 23 | Specify the stored summary and update composition |
| Tree DP, ancestors, or subtree/path queries | 14, 17, 23 | Root the tree, state DP meaning, and identify Euler/LCA invariants |
| Counting, modular arithmetic, or divisibility | 15, 22, 31, 32 | Check counting multiplicity and modular-inverse assumptions |
| String borders, matching, or suffix structures | 16, 26 | Prove fallback or suffix-state invariants |
| Bitwise reasoning | 6, 19, 27 | Work bit by bit; distinguish independent bits from coupled constraints |
| Knows algorithm but implementation fails | Current module | Compare to brute force and classify bugs; retry without a new topic |
| Spent the whole round on one problem | Mixed Codeforces practice | Set a reassessment time and scan other tasks before committing |

Advanced topics are available when a real gap calls for them. Do not rush to flows or suffix structures merely because an isolated contest problem used them.
