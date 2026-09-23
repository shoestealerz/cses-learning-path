# CSES learning order

All 400 tasks from the [official CSES list](https://cses.fi/problemset/), checked 2026-09-21. 138 Core tasks come first. This is a prerequisite-aware recommendation, not a measured optimum or an official CSES difficulty ranking.

Follow the global numbers. Module prerequisites are minimum preparation, not a requirement to finish every earlier task. After each module, use its exit check and attempt one fresh, untagged Codeforces problem. Review and contest upsolving interrupt this order; see [the practice loop](docs/PRACTICE.md).

Core builds broad foundations. Extension deepens common tools. Specialist completes the full set; its exact local ordering is less certain and should adapt to gaps. A hard task should not hold the entire curriculum hostage.

Use [progress](PROGRESS.md) for current status; this roadmap preserves the learning order. ✅ marks a verified acceptance; adjacent code links open your submitted solution. Topic headings can reveal the approach, so use `node scripts/practice.mjs next --blind` if you want only a task title and link.

## Modules

| Module | Priority | Order | Focus | Prerequisites |
| --- | --- | --- | --- | --- |
| 1 | Core | 1–8 | [Implementation and invariants](#module-1) | Basic programming |
| 2 | Core | 9–16 | [Sorting, two pointers, and greedy proofs](#module-2) | 1 |
| 3 | Core | 17–23 | [Prefix sums and subarray reasoning](#module-3) | 1, 2 |
| 4 | Core | 24–30 | [Binary search and ordered containers](#module-4) | 2, 3 |
| 5 | Core | 31–38 | [Windows and amortized analysis](#module-5) | 3, 4 |
| 6 | Core | 39–46 | [Elementary math and constructive thinking](#module-6) | 1, 2 |
| 7 | Core | 47–51 | [Recursion and exhaustive search](#module-7) | 1, 6 |
| 8 | Core | 52–61 | [Dynamic programming foundations](#module-8) | 3, 6, 7 |
| 9 | Core | 62–69 | [Graph traversal and shortest unweighted paths](#module-9) | 7 |
| 10 | Core | 70–78 | [Scheduling and ordered-state practice](#module-10) | 2, 4, 5 |
| 11 | Core | 79–85 | [DP on sequences and intervals](#module-11) | 4, 8, 10 |
| 12 | Core | 86–95 | [Fenwick trees and segment trees](#module-12) | 3, 4, 5 |
| 13 | Core | 96–105 | [Weighted paths, DAGs, and disjoint sets](#module-13) | 8, 9, 10 |
| 14 | Core | 106–113 | [Tree foundations and binary lifting](#module-14) | 9, 11, 13 |
| 15 | Core | 114–123 | [Number theory and combinatorics](#module-15) | 6, 8 |
| 16 | Core | 124–130 | [String foundations](#module-16) | 5, 8, 12 |
| 17 | Core | 131–138 | [First mixed transfer checkpoint](#module-17) | 10, 11, 12, 14, 15, 16 |
| 18 | Extension | 139–151 | [Richer windows and range summaries](#module-18) | 5, 12, 17 |
| 19 | Extension | 152–159 | [Bitmasks, meet in the middle, and DP states](#module-19) | 7, 11, 13 |
| 20 | Extension | 160–169 | [Cycles, strong components, and functional graphs](#module-20) | 13, 14 |
| 21 | Extension | 170–179 | [Geometry foundations](#module-21) | 2, 6, 12 |
| 22 | Extension | 180–193 | [Games, probability, and matrix recurrences](#module-22) | 8, 15, 20 |
| 23 | Extension | 194–207 | [Lazy propagation, persistence, and tree decomposition](#module-23) | 12, 14, 17, 18 |
| 24 | Extension | 208–214 | [Euler tours, matching, and flow](#module-24) | 13, 20 |
| 25 | Extension | 215–230 | [Constructive and interactive practice](#module-25) | 7, 10, 14, 15, 19 |
| 26 | Specialist | 231–245 | [Advanced string structures](#module-26) | 16, 19, 23 |
| 27 | Specialist | 246–257 | [Bitwise algebra and transforms](#module-27) | 15, 19, 22 |
| 28 | Specialist | 258–276 | [Graph structure and offline connectivity](#module-28) | 20, 23, 24 |
| 29 | Specialist | 277–292 | [Tree structure and graph capstones](#module-29) | 23, 28 |
| 30 | Specialist | 293–304 | [DP optimization and mutable sequences](#module-30) | 11, 18, 19, 23 |
| 31 | Specialist | 305–320 | [Convolution and advanced arithmetic](#module-31) | 15, 22, 27 |
| 32 | Specialist | 321–339 | [Counting DP and grid enumeration](#module-32) | 19, 22, 30, 31 |
| 33 | Specialist | 340–348 | [Flow optimization and assignment models](#module-33) | 24, 28 |
| 34 | Specialist | 349–361 | [Advanced geometry and subarray capstones](#module-34) | 18, 21, 23, 30 |
| 35 | Specialist | 362–377 | [Permutation, ordering, and sequence capstones](#module-35) | 25, 27, 30, 32 |
| 36 | Specialist | 378–400 | [Final mixed problem-solving lab](#module-36) | 29, 31, 32, 33, 34, 35 |

<a id="module-1"></a>

## 1. Implementation and invariants

**Core · Prerequisites:** loops, arrays, functions, and basic complexity.

**Learn:** Translate a statement, track an invariant, and estimate time and integer bounds.

**Exit check:** Implement a linear scan independently and explain its invariant and overflow bounds.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 1 | ✅ [Weird Algorithm](https://cses.fi/problemset/task/1068/) · [code](solutions/1068-weird-algorithm.py) | Introductory Problems |
| 2 | ✅ [Missing Number](https://cses.fi/problemset/task/1083/) · [code](solutions/1083-missing-number.py) | Introductory Problems |
| 3 | ✅ [Repetitions](https://cses.fi/problemset/task/1069/) · [code](solutions/1069-repetitions.py) | Introductory Problems |
| 4 | ✅ [Increasing Array](https://cses.fi/problemset/task/1094/) · [code](solutions/1094-increasing-array.py) | Introductory Problems |
| 5 | ✅ [Permutations](https://cses.fi/problemset/task/1070/) · [code](solutions/1070-permutations.py) | Introductory Problems |
| 6 | [Palindrome Reorder](https://cses.fi/problemset/task/1755/) | Introductory Problems |
| 7 | [Coin Piles](https://cses.fi/problemset/task/1754/) | Introductory Problems |
| 8 | [Two Sets](https://cses.fi/problemset/task/1092/) | Introductory Problems |

<a id="module-2"></a>

## 2. Sorting, two pointers, and greedy proofs

**Core · Prerequisites:** modules 1.

**Learn:** Use sorted order to remove choices; justify each greedy decision with an exchange argument.

**Exit check:** Explain why the greedy choice cannot hurt, rather than relying on examples.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 9 | ✅ [Distinct Numbers](https://cses.fi/problemset/task/1621/) · [code](solutions/1621-distinct-numbers.py) | Sorting and Searching |
| 10 | [Sum of Two Values](https://cses.fi/problemset/task/1640/) | Sorting and Searching |
| 11 | [Apartments](https://cses.fi/problemset/task/1084/) | Sorting and Searching |
| 12 | ✅ [Ferris Wheel](https://cses.fi/problemset/task/1090/) · [code](solutions/1090-ferris-wheel.py) | Sorting and Searching |
| 13 | [Stick Lengths](https://cses.fi/problemset/task/1074/) | Sorting and Searching |
| 14 | [Movie Festival](https://cses.fi/problemset/task/1629/) | Sorting and Searching |
| 15 | [Tasks and Deadlines](https://cses.fi/problemset/task/1630/) | Sorting and Searching |
| 16 | [Missing Coin Sum](https://cses.fi/problemset/task/2183/) | Sorting and Searching |

<a id="module-3"></a>

## 3. Prefix sums and subarray reasoning

**Core · Prerequisites:** modules 1, 2.

**Learn:** Represent intervals as differences of prefixes; distinguish positive-only windows from arbitrary signed sums.

**Exit check:** Explain why Subarray Sums I permits a window and Subarray Sums II needs another method.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 17 | [Static Range Sum Queries](https://cses.fi/problemset/task/1646/) | Range Queries |
| 18 | [Range Xor Queries](https://cses.fi/problemset/task/1650/) | Range Queries |
| 19 | [Maximum Subarray Sum](https://cses.fi/problemset/task/1643/) | Sorting and Searching |
| 20 | [Subarray Sums I](https://cses.fi/problemset/task/1660/) | Sorting and Searching |
| 21 | ✅ [Subarray Sums II](https://cses.fi/problemset/task/1661/) · [code](solutions/1661-subarray-sums-ii.cpp) | Sorting and Searching |
| 22 | [Subarray Divisibility](https://cses.fi/problemset/task/1662/) | Sorting and Searching |
| 23 | [Forest Queries](https://cses.fi/problemset/task/1652/) | Range Queries |

<a id="module-4"></a>

## 4. Binary search and ordered containers

**Core · Prerequisites:** modules 2, 3.

**Learn:** Write a monotone predicate, prove its direction, and keep precise search boundaries; use ordered sets safely.

**Exit check:** Derive the predicate and bounds for Array Division and test boundary cases.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 24 | ✅ [Factory Machines](https://cses.fi/problemset/task/1620/) · [code](solutions/1620-factory-machines.py) | Sorting and Searching |
| 25 | [Array Division](https://cses.fi/problemset/task/1085/) | Sorting and Searching |
| 26 | [Towers](https://cses.fi/problemset/task/1073/) | Sorting and Searching |
| 27 | [Concert Tickets](https://cses.fi/problemset/task/1091/) | Sorting and Searching |
| 28 | [Traffic Lights](https://cses.fi/problemset/task/1163/) | Sorting and Searching |
| 29 | [Josephus Problem I](https://cses.fi/problemset/task/2162/) | Sorting and Searching |
| 30 | [Collecting Numbers](https://cses.fi/problemset/task/2216/) | Sorting and Searching |

<a id="module-5"></a>

## 5. Windows and amortized analysis

**Core · Prerequisites:** modules 3, 4.

**Learn:** Maintain a frequency window, then use monotonic stacks and deques; account for every insertion and removal.

**Exit check:** Explain why each pointer or deque element moves only O(n) times overall.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 31 | [Sliding Window Sum](https://cses.fi/problemset/task/3220/) | Sliding Window Problems |
| 32 | [Sliding Window Xor](https://cses.fi/problemset/task/3426/) | Sliding Window Problems |
| 33 | [Playlist](https://cses.fi/problemset/task/1141/) | Sorting and Searching |
| 34 | [Distinct Values Subarrays](https://cses.fi/problemset/task/3420/) | Sorting and Searching |
| 35 | [Distinct Values Subarrays II](https://cses.fi/problemset/task/2428/) | Sorting and Searching |
| 36 | [Sliding Window Distinct Values](https://cses.fi/problemset/task/3222/) | Sliding Window Problems |
| 37 | [Nearest Smaller Values](https://cses.fi/problemset/task/1645/) | Sorting and Searching |
| 38 | [Sliding Window Minimum](https://cses.fi/problemset/task/3221/) | Sliding Window Problems |

<a id="module-6"></a>

## 6. Elementary math and constructive thinking

**Core · Prerequisites:** modules 1, 2.

**Learn:** Turn patterns into formulas; reason about parity, modular arithmetic, and a construction invariant.

**Exit check:** Prove a construction covers all valid cases, and handle small impossible cases explicitly.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 39 | [Bit Strings](https://cses.fi/problemset/task/1617/) | Introductory Problems |
| 40 | [Exponentiation](https://cses.fi/problemset/task/1095/) | Mathematics |
| 41 | [Trailing Zeros](https://cses.fi/problemset/task/1618/) | Introductory Problems |
| 42 | [Two Knights](https://cses.fi/problemset/task/1072/) | Introductory Problems |
| 43 | [Number Spiral](https://cses.fi/problemset/task/1071/) | Introductory Problems |
| 44 | [Counting Divisors](https://cses.fi/problemset/task/1713/) | Mathematics |
| 45 | [Raab Game I](https://cses.fi/problemset/task/3399/) | Introductory Problems |
| 46 | [Grid Coloring I](https://cses.fi/problemset/task/3311/) | Introductory Problems |

<a id="module-7"></a>

## 7. Recursion and exhaustive search

**Core · Prerequisites:** modules 1, 6.

**Learn:** Model a recursive state, enumerate subsets and permutations, and prune without discarding valid answers.

**Exit check:** Estimate the search tree and produce a small brute-force oracle for later problems.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 47 | [Tower of Hanoi](https://cses.fi/problemset/task/2165/) | Introductory Problems |
| 48 | [Creating Strings](https://cses.fi/problemset/task/1622/) | Introductory Problems |
| 49 | [Apple Division](https://cses.fi/problemset/task/1623/) | Introductory Problems |
| 50 | [Gray Code](https://cses.fi/problemset/task/2205/) | Introductory Problems |
| 51 | [Chessboard and Queens](https://cses.fi/problemset/task/1624/) | Introductory Problems |

<a id="module-8"></a>

## 8. Dynamic programming foundations

**Core · Prerequisites:** modules 3, 6, 7.

**Learn:** Define the meaning of a state before coding; distinguish ordered sequences from unordered combinations.

**Exit check:** Explain the loop-order difference between Coin Combinations I and II, including a counterexample.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 52 | ✅ [Dice Combinations](https://cses.fi/problemset/task/1633/) · [code](solutions/1633-dice-combinations.py) | Dynamic Programming |
| 53 | [Minimizing Coins](https://cses.fi/problemset/task/1634/) | Dynamic Programming |
| 54 | [Removing Digits](https://cses.fi/problemset/task/1637/) | Dynamic Programming |
| 55 | [Coin Combinations I](https://cses.fi/problemset/task/1635/) | Dynamic Programming |
| 56 | [Coin Combinations II](https://cses.fi/problemset/task/1636/) | Dynamic Programming |
| 57 | [Grid Paths I](https://cses.fi/problemset/task/1638/) | Dynamic Programming |
| 58 | ✅ [Book Shop](https://cses.fi/problemset/task/1158/) · [code](solutions/1158-book-shop.py) | Dynamic Programming |
| 59 | [Money Sums](https://cses.fi/problemset/task/1745/) | Dynamic Programming |
| 60 | [Two Sets II](https://cses.fi/problemset/task/1093/) | Dynamic Programming |
| 61 | [Array Description](https://cses.fi/problemset/task/1746/) | Dynamic Programming |

<a id="module-9"></a>

## 9. Graph traversal and shortest unweighted paths

**Core · Prerequisites:** modules 7.

**Learn:** Model states and edges, explore components, restore paths, and separate BFS distance from DFS structure.

**Exit check:** Restore a shortest path, justify visited timing, and reason about simultaneous arrival in Monsters.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 62 | [Counting Rooms](https://cses.fi/problemset/task/1192/) | Graph Algorithms |
| 63 | [Building Roads](https://cses.fi/problemset/task/1666/) | Graph Algorithms |
| 64 | [Message Route](https://cses.fi/problemset/task/1667/) | Graph Algorithms |
| 65 | [Labyrinth](https://cses.fi/problemset/task/1193/) | Graph Algorithms |
| 66 | [Building Teams](https://cses.fi/problemset/task/1668/) | Graph Algorithms |
| 67 | [Round Trip](https://cses.fi/problemset/task/1669/) | Graph Algorithms |
| 68 | [Knight Moves Grid](https://cses.fi/problemset/task/3217/) | Introductory Problems |
| 69 | [Monsters](https://cses.fi/problemset/task/1194/) | Graph Algorithms |

<a id="module-10"></a>

## 10. Scheduling and ordered-state practice

**Core · Prerequisites:** modules 2, 4, 5.

**Learn:** Maintain event order, multisets, and local changes; distinguish interval selection from resource allocation.

**Exit check:** Explain equal-time tie handling and why a single update changes only a few local relations.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 70 | [Restaurant Customers](https://cses.fi/problemset/task/1619/) | Sorting and Searching |
| 71 | [Room Allocation](https://cses.fi/problemset/task/1164/) | Sorting and Searching |
| 72 | [Reading Books](https://cses.fi/problemset/task/1631/) | Sorting and Searching |
| 73 | [Movie Festival II](https://cses.fi/problemset/task/1632/) | Sorting and Searching |
| 74 | [Nested Ranges Check](https://cses.fi/problemset/task/2168/) | Sorting and Searching |
| 75 | [Collecting Numbers II](https://cses.fi/problemset/task/2217/) | Sorting and Searching |
| 76 | [Sum of Three Values](https://cses.fi/problemset/task/1641/) | Sorting and Searching |
| 77 | [Sum of Four Values](https://cses.fi/problemset/task/1642/) | Sorting and Searching |
| 78 | [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644/) | Sorting and Searching |

<a id="module-11"></a>

## 11. DP on sequences and intervals

**Core · Prerequisites:** modules 4, 8, 10.

**Learn:** Choose sequence, interval, and weighted scheduling states; understand when binary search accelerates DP.

**Exit check:** Derive a recurrence and evaluation order for an unfamiliar small DP without looking at code.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 79 | [Longest Common Subsequence](https://cses.fi/problemset/task/3403/) | Dynamic Programming |
| 80 | [Edit Distance](https://cses.fi/problemset/task/1639/) | Dynamic Programming |
| 81 | [Rectangle Cutting](https://cses.fi/problemset/task/1744/) | Dynamic Programming |
| 82 | [Removal Game](https://cses.fi/problemset/task/1097/) | Dynamic Programming |
| 83 | [Increasing Subsequence](https://cses.fi/problemset/task/1145/) | Dynamic Programming |
| 84 | [Projects](https://cses.fi/problemset/task/1140/) | Dynamic Programming |
| 85 | [Counting Towers](https://cses.fi/problemset/task/2413/) | Dynamic Programming |

<a id="module-12"></a>

## 12. Fenwick trees and segment trees

**Core · Prerequisites:** modules 3, 4, 5.

**Learn:** Build associative summaries, point updates, prefix searches, coordinate compression, and difference arrays.

**Exit check:** Implement sum and minimum queries from memory and explain each summary identity.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 86 | [Static Range Minimum Queries](https://cses.fi/problemset/task/1647/) | Range Queries |
| 87 | [Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648/) | Range Queries |
| 88 | [Dynamic Range Minimum Queries](https://cses.fi/problemset/task/1649/) | Range Queries |
| 89 | [Range Update Queries](https://cses.fi/problemset/task/1651/) | Range Queries |
| 90 | [Hotel Queries](https://cses.fi/problemset/task/1143/) | Range Queries |
| 91 | [List Removals](https://cses.fi/problemset/task/1749/) | Range Queries |
| 92 | [Josephus Problem II](https://cses.fi/problemset/task/2163/) | Sorting and Searching |
| 93 | [Salary Queries](https://cses.fi/problemset/task/1144/) | Range Queries |
| 94 | [Nested Ranges Count](https://cses.fi/problemset/task/2169/) | Sorting and Searching |
| 95 | [Distinct Values Queries](https://cses.fi/problemset/task/1734/) | Range Queries |

<a id="module-13"></a>

## 13. Weighted paths, DAGs, and disjoint sets

**Core · Prerequisites:** modules 8, 9, 10.

**Learn:** Choose an algorithm from edge weights and graph structure; combine topological order with DP and use DSU.

**Exit check:** State when Dijkstra is valid and distinguish a graph cycle from an unreachable vertex.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 96 | [Shortest Routes I](https://cses.fi/problemset/task/1671/) | Graph Algorithms |
| 97 | [Shortest Routes II](https://cses.fi/problemset/task/1672/) | Graph Algorithms |
| 98 | [Flight Discount](https://cses.fi/problemset/task/1195/) | Graph Algorithms |
| 99 | [Round Trip II](https://cses.fi/problemset/task/1678/) | Graph Algorithms |
| 100 | [Course Schedule](https://cses.fi/problemset/task/1679/) | Graph Algorithms |
| 101 | [Game Routes](https://cses.fi/problemset/task/1681/) | Graph Algorithms |
| 102 | [Longest Flight Route](https://cses.fi/problemset/task/1680/) | Graph Algorithms |
| 103 | [Investigation](https://cses.fi/problemset/task/1202/) | Graph Algorithms |
| 104 | [Road Construction](https://cses.fi/problemset/task/1676/) | Graph Algorithms |
| 105 | [Road Reparation](https://cses.fi/problemset/task/1675/) | Graph Algorithms |

<a id="module-14"></a>

## 14. Tree foundations and binary lifting

**Core · Prerequisites:** modules 9, 11, 13.

**Learn:** Exploit unique paths; compute subtree DP, diameters, ancestors, and lowest common ancestors.

**Exit check:** Explain lifting invariants and derive a tree-distance query from LCA.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 106 | [Subordinates](https://cses.fi/problemset/task/1674/) | Tree Algorithms |
| 107 | [Tree Diameter](https://cses.fi/problemset/task/1131/) | Tree Algorithms |
| 108 | [Tree Distances I](https://cses.fi/problemset/task/1132/) | Tree Algorithms |
| 109 | [Tree Matching](https://cses.fi/problemset/task/1130/) | Tree Algorithms |
| 110 | [Tree Distances II](https://cses.fi/problemset/task/1133/) | Tree Algorithms |
| 111 | [Company Queries I](https://cses.fi/problemset/task/1687/) | Tree Algorithms |
| 112 | [Company Queries II](https://cses.fi/problemset/task/1688/) | Tree Algorithms |
| 113 | [Distance Queries](https://cses.fi/problemset/task/1135/) | Tree Algorithms |

<a id="module-15"></a>

## 15. Number theory and combinatorics

**Core · Prerequisites:** modules 6, 8.

**Learn:** Use sieves, prime factorization, modular inverses, factorial tables, and inclusion-exclusion.

**Exit check:** Explain the assumptions behind modular inverses and handle exponent reduction edge cases.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 114 | [Common Divisors](https://cses.fi/problemset/task/1081/) | Mathematics |
| 115 | [Exponentiation II](https://cses.fi/problemset/task/1712/) | Mathematics |
| 116 | [Binomial Coefficients](https://cses.fi/problemset/task/1079/) | Mathematics |
| 117 | [Creating Strings II](https://cses.fi/problemset/task/1715/) | Mathematics |
| 118 | [Distributing Apples](https://cses.fi/problemset/task/1716/) | Mathematics |
| 119 | [Christmas Party](https://cses.fi/problemset/task/1717/) | Mathematics |
| 120 | [Prime Multiples](https://cses.fi/problemset/task/2185/) | Mathematics |
| 121 | [Sum of Divisors](https://cses.fi/problemset/task/1082/) | Mathematics |
| 122 | [Divisor Analysis](https://cses.fi/problemset/task/2182/) | Mathematics |
| 123 | [Counting Coprime Pairs](https://cses.fi/problemset/task/2417/) | Mathematics |

<a id="module-16"></a>

## 16. String foundations

**Core · Prerequisites:** modules 5, 8, 12.

**Learn:** Learn prefix-function or Z-function matching, borders, periods, and trie-based DP.

**Exit check:** Derive the border fallback invariant and distinguish substrings from subsequences.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 124 | [String Matching](https://cses.fi/problemset/task/1753/) | String Algorithms |
| 125 | [Finding Borders](https://cses.fi/problemset/task/1732/) | String Algorithms |
| 126 | [Finding Periods](https://cses.fi/problemset/task/1733/) | String Algorithms |
| 127 | [String Functions](https://cses.fi/problemset/task/2107/) | String Algorithms |
| 128 | [Word Combinations](https://cses.fi/problemset/task/1731/) | String Algorithms |
| 129 | [Distinct Subsequences](https://cses.fi/problemset/task/1149/) | String Algorithms |
| 130 | [Shortest Subsequence](https://cses.fi/problemset/task/1087/) | Additional Problems I |

<a id="module-17"></a>

## 17. First mixed transfer checkpoint

**Core · Prerequisites:** modules 10, 11, 12, 14, 15, 16.

**Learn:** Combine familiar tools in less signposted problems. Hide this module description while attempting them.

**Exit check:** For two fresh mixed problems, choose a model unaided, give a proof, and code within a realistic contest budget.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 131 | [Digit Queries](https://cses.fi/problemset/task/2431/) | Introductory Problems |
| 132 | [Distinct Values Subsequences](https://cses.fi/problemset/task/3421/) | Sorting and Searching |
| 133 | [Minimal Grid Path](https://cses.fi/problemset/task/3359/) | Dynamic Programming |
| 134 | [Increasing Subsequence II](https://cses.fi/problemset/task/1748/) | Dynamic Programming |
| 135 | [Subtree Queries](https://cses.fi/problemset/task/1137/) | Tree Algorithms |
| 136 | [Path Queries](https://cses.fi/problemset/task/1138/) | Tree Algorithms |
| 137 | [Counting Paths](https://cses.fi/problemset/task/1136/) | Tree Algorithms |
| 138 | [Distinct Colors](https://cses.fi/problemset/task/1139/) | Tree Algorithms |

<a id="module-18"></a>

## 18. Richer windows and range summaries

**Extension · Prerequisites:** modules 5, 12, 17.

**Learn:** Maintain ranks, medians, frequencies, and composable range information.

**Exit check:** Explain the state kept by each data structure and how to remove a departing window element.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 139 | [Sliding Window Or](https://cses.fi/problemset/task/3405/) | Sliding Window Problems |
| 140 | [Sliding Window Mode](https://cses.fi/problemset/task/3224/) | Sliding Window Problems |
| 141 | [Sliding Window Mex](https://cses.fi/problemset/task/3219/) | Sliding Window Problems |
| 142 | [Sliding Window Median](https://cses.fi/problemset/task/1076/) | Sliding Window Problems |
| 143 | [Sliding Window Cost](https://cses.fi/problemset/task/1077/) | Sliding Window Problems |
| 144 | [Sliding Window Inversions](https://cses.fi/problemset/task/3223/) | Sliding Window Problems |
| 145 | [Prefix Sum Queries](https://cses.fi/problemset/task/2166/) | Range Queries |
| 146 | [Pizzeria Queries](https://cses.fi/problemset/task/2206/) | Range Queries |
| 147 | [Subarray Sum Queries](https://cses.fi/problemset/task/1190/) | Range Queries |
| 148 | [Subarray Sum Queries II](https://cses.fi/problemset/task/3226/) | Range Queries |
| 149 | [Mountain Range](https://cses.fi/problemset/task/3314/) | Dynamic Programming |
| 150 | [Advertisement](https://cses.fi/problemset/task/1142/) | Additional Problems I |
| 151 | [Maximum Building I](https://cses.fi/problemset/task/1147/) | Additional Problems I |

<a id="module-19"></a>

## 19. Bitmasks, meet in the middle, and DP states

**Extension · Prerequisites:** modules 7, 11, 13.

**Learn:** Split exponential searches, encode subsets, and design profile and digit DP states.

**Exit check:** Derive a mask or digit state without copying a template, then verify against brute force.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 152 | [Meet in the Middle](https://cses.fi/problemset/task/1628/) | Advanced Techniques |
| 153 | [Elevator Rides](https://cses.fi/problemset/task/1653/) | Dynamic Programming |
| 154 | [Hamiltonian Flights](https://cses.fi/problemset/task/1690/) | Graph Algorithms |
| 155 | [Counting Tilings](https://cses.fi/problemset/task/2181/) | Dynamic Programming |
| 156 | [Counting Numbers](https://cses.fi/problemset/task/2220/) | Dynamic Programming |
| 157 | [Hamming Distance](https://cses.fi/problemset/task/2136/) | Advanced Techniques |
| 158 | [Corner Subgrid Check](https://cses.fi/problemset/task/3360/) | Advanced Techniques |
| 159 | [Corner Subgrid Count](https://cses.fi/problemset/task/2137/) | Advanced Techniques |

<a id="module-20"></a>

## 20. Cycles, strong components, and functional graphs

**Extension · Prerequisites:** modules 13, 14.

**Learn:** Handle negative cycles, compress SCCs to a DAG, and separate cycles from trees in functional graphs.

**Exit check:** Explain which vertices a negative cycle affects and why SCC condensation is acyclic.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 160 | [Cycle Finding](https://cses.fi/problemset/task/1197/) | Graph Algorithms |
| 161 | [High Score](https://cses.fi/problemset/task/1673/) | Graph Algorithms |
| 162 | [Flight Routes](https://cses.fi/problemset/task/1196/) | Graph Algorithms |
| 163 | [Flight Routes Check](https://cses.fi/problemset/task/1682/) | Graph Algorithms |
| 164 | [Planets and Kingdoms](https://cses.fi/problemset/task/1683/) | Graph Algorithms |
| 165 | [Coin Collector](https://cses.fi/problemset/task/1686/) | Graph Algorithms |
| 166 | [Giant Pizza](https://cses.fi/problemset/task/1684/) | Graph Algorithms |
| 167 | [Planets Queries I](https://cses.fi/problemset/task/1750/) | Graph Algorithms |
| 168 | [Planets Cycles](https://cses.fi/problemset/task/1751/) | Graph Algorithms |
| 169 | [Planets Queries II](https://cses.fi/problemset/task/1160/) | Graph Algorithms |

<a id="module-21"></a>

## 21. Geometry foundations

**Extension · Prerequisites:** modules 2, 6, 12.

**Learn:** Use cross products, orientation, exact integer arithmetic, sweeps, and distance transformations.

**Exit check:** Handle collinear points and overflow correctly and explain a hull turn test.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 170 | [Point Location Test](https://cses.fi/problemset/task/2189/) | Geometry |
| 171 | [Line Segment Intersection](https://cses.fi/problemset/task/2190/) | Geometry |
| 172 | [Polygon Area](https://cses.fi/problemset/task/2191/) | Geometry |
| 173 | [Point in Polygon](https://cses.fi/problemset/task/2192/) | Geometry |
| 174 | [Polygon Lattice Points](https://cses.fi/problemset/task/2193/) | Geometry |
| 175 | [Convex Hull](https://cses.fi/problemset/task/2195/) | Geometry |
| 176 | [Maximum Manhattan Distances](https://cses.fi/problemset/task/3410/) | Geometry |
| 177 | [All Manhattan Distances](https://cses.fi/problemset/task/3411/) | Geometry |
| 178 | [Minimum Euclidean Distance](https://cses.fi/problemset/task/2194/) | Geometry |
| 179 | [Intersection Points](https://cses.fi/problemset/task/1740/) | Geometry |

<a id="module-22"></a>

## 22. Games, probability, and matrix recurrences

**Extension · Prerequisites:** modules 8, 15, 20.

**Learn:** Build win/lose states, xor games, expectations, and recurrence transitions under matrix exponentiation.

**Exit check:** Justify a game invariant and an expectation calculation; derive matrix state meaning.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 180 | [Stick Game](https://cses.fi/problemset/task/1729/) | Mathematics |
| 181 | [Nim Game I](https://cses.fi/problemset/task/1730/) | Mathematics |
| 182 | [Nim Game II](https://cses.fi/problemset/task/1098/) | Mathematics |
| 183 | [Stair Game](https://cses.fi/problemset/task/1099/) | Mathematics |
| 184 | [Another Game](https://cses.fi/problemset/task/2208/) | Mathematics |
| 185 | [Grundy's Game](https://cses.fi/problemset/task/2207/) | Mathematics |
| 186 | [Dice Probability](https://cses.fi/problemset/task/1725/) | Mathematics |
| 187 | [Candy Lottery](https://cses.fi/problemset/task/1727/) | Mathematics |
| 188 | [Inversion Probability](https://cses.fi/problemset/task/1728/) | Mathematics |
| 189 | [Moving Robots](https://cses.fi/problemset/task/1726/) | Mathematics |
| 190 | [Fibonacci Numbers](https://cses.fi/problemset/task/1722/) | Mathematics |
| 191 | [Throwing Dice](https://cses.fi/problemset/task/1096/) | Mathematics |
| 192 | [Graph Paths I](https://cses.fi/problemset/task/1723/) | Mathematics |
| 193 | [Graph Paths II](https://cses.fi/problemset/task/1724/) | Mathematics |

<a id="module-23"></a>

## 23. Lazy propagation, persistence, and tree decomposition

**Extension · Prerequisites:** modules 12, 14, 17, 18.

**Learn:** Compose deferred operations, preserve versions, flatten trees, and decompose paths or distance problems.

**Exit check:** Explain assignment/addition tag composition order and the information retained by each tree decomposition.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 194 | [Range Updates and Sums](https://cses.fi/problemset/task/1735/) | Range Queries |
| 195 | [Polynomial Queries](https://cses.fi/problemset/task/1736/) | Range Queries |
| 196 | [Forest Queries II](https://cses.fi/problemset/task/1739/) | Range Queries |
| 197 | [Range Queries and Copies](https://cses.fi/problemset/task/1737/) | Range Queries |
| 198 | [Path Queries II](https://cses.fi/problemset/task/2134/) | Tree Algorithms |
| 199 | [Finding a Centroid](https://cses.fi/problemset/task/2079/) | Tree Algorithms |
| 200 | [Fixed-Length Paths I](https://cses.fi/problemset/task/2080/) | Tree Algorithms |
| 201 | [Fixed-Length Paths II](https://cses.fi/problemset/task/2081/) | Tree Algorithms |
| 202 | [Increasing Array Queries](https://cses.fi/problemset/task/2416/) | Range Queries |
| 203 | [Movie Festival Queries](https://cses.fi/problemset/task/1664/) | Range Queries |
| 204 | [Visible Buildings Queries](https://cses.fi/problemset/task/3304/) | Range Queries |
| 205 | [Range Interval Queries](https://cses.fi/problemset/task/3163/) | Range Queries |
| 206 | [Distinct Values Queries II](https://cses.fi/problemset/task/3356/) | Range Queries |
| 207 | [Missing Coin Sum Queries](https://cses.fi/problemset/task/2184/) | Range Queries |

<a id="module-24"></a>

## 24. Euler tours, matching, and flow

**Extension · Prerequisites:** modules 13, 20.

**Learn:** Separate edge traversal from vertex traversal; model matching, residual networks, and cuts.

**Exit check:** Explain residual reverse edges, flow conservation, and how to recover the requested output.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 208 | [Mail Delivery](https://cses.fi/problemset/task/1691/) | Graph Algorithms |
| 209 | [Teleporters Path](https://cses.fi/problemset/task/1693/) | Graph Algorithms |
| 210 | [De Bruijn Sequence](https://cses.fi/problemset/task/1692/) | Graph Algorithms |
| 211 | [School Dance](https://cses.fi/problemset/task/1696/) | Graph Algorithms |
| 212 | [Download Speed](https://cses.fi/problemset/task/1694/) | Graph Algorithms |
| 213 | [Police Chase](https://cses.fi/problemset/task/1695/) | Graph Algorithms |
| 214 | [Distinct Routes](https://cses.fi/problemset/task/1711/) | Graph Algorithms |

<a id="module-25"></a>

## 25. Constructive and interactive practice

**Extension · Prerequisites:** modules 7, 10, 14, 15, 19.

**Learn:** Prove constructive invariants and learn interactive protocols, flushing, query budgets, and local simulation.

**Exit check:** Prove the query budget before coding; for constructions, verify output with an independent checker.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 215 | [Mex Grid Construction](https://cses.fi/problemset/task/3419/) | Introductory Problems |
| 216 | [String Reorder](https://cses.fi/problemset/task/1743/) | Introductory Problems |
| 217 | [Inverse Inversions](https://cses.fi/problemset/task/2214/) | Construction Problems |
| 218 | [Monotone Subsequences](https://cses.fi/problemset/task/2215/) | Construction Problems |
| 219 | [Third Permutation](https://cses.fi/problemset/task/3422/) | Construction Problems |
| 220 | [Permutation Prime Sums](https://cses.fi/problemset/task/3423/) | Construction Problems |
| 221 | [Chess Tournament](https://cses.fi/problemset/task/1697/) | Construction Problems |
| 222 | [Distinct Sums Grid](https://cses.fi/problemset/task/3424/) | Construction Problems |
| 223 | [Filling Trominos](https://cses.fi/problemset/task/2423/) | Construction Problems |
| 224 | [Grid Path Construction](https://cses.fi/problemset/task/2418/) | Construction Problems |
| 225 | [Hidden Integer](https://cses.fi/problemset/task/3112/) | Interactive Problems |
| 226 | [Hidden Permutation](https://cses.fi/problemset/task/3139/) | Interactive Problems |
| 227 | [K-th Highest Score](https://cses.fi/problemset/task/3305/) | Interactive Problems |
| 228 | [Permuted Binary Strings](https://cses.fi/problemset/task/3228/) | Interactive Problems |
| 229 | [Colored Chairs](https://cses.fi/problemset/task/3273/) | Interactive Problems |
| 230 | [Inversion Sorting](https://cses.fi/problemset/task/3140/) | Interactive Problems |

<a id="module-26"></a>

## 26. Advanced string structures

**Specialist · Prerequisites:** modules 16, 19, 23.

**Learn:** Study palindrome algorithms, multi-pattern matching, suffix structures, and lexicographic enumeration.

**Exit check:** Explain the maintained string invariant and the time/memory tradeoff before implementing a structure.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 231 | [Longest Palindrome](https://cses.fi/problemset/task/1111/) | String Algorithms |
| 232 | [All Palindromes](https://cses.fi/problemset/task/3138/) | String Algorithms |
| 233 | [Minimal Rotation](https://cses.fi/problemset/task/1110/) | String Algorithms |
| 234 | [Palindrome Queries](https://cses.fi/problemset/task/2420/) | String Algorithms |
| 235 | [Required Substring](https://cses.fi/problemset/task/1112/) | String Algorithms |
| 236 | [Finding Patterns](https://cses.fi/problemset/task/2102/) | String Algorithms |
| 237 | [Counting Patterns](https://cses.fi/problemset/task/2103/) | String Algorithms |
| 238 | [Pattern Positions](https://cses.fi/problemset/task/2104/) | String Algorithms |
| 239 | [Distinct Substrings](https://cses.fi/problemset/task/2105/) | String Algorithms |
| 240 | [Repeating Substring](https://cses.fi/problemset/task/2106/) | String Algorithms |
| 241 | [Substring Order I](https://cses.fi/problemset/task/2108/) | String Algorithms |
| 242 | [Substring Order II](https://cses.fi/problemset/task/2109/) | String Algorithms |
| 243 | [Substring Distribution](https://cses.fi/problemset/task/2110/) | String Algorithms |
| 244 | [Inverse Suffix Array](https://cses.fi/problemset/task/3225/) | String Algorithms |
| 245 | [String Transform](https://cses.fi/problemset/task/1113/) | String Algorithms |

<a id="module-27"></a>

## 27. Bitwise algebra and transforms

**Specialist · Prerequisites:** modules 15, 19, 22.

**Learn:** Study binary tries, xor bases, parity identities, and subset transforms.

**Exit check:** Prove basis independence and the direction of each subset transform.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 246 | [Counting Bits](https://cses.fi/problemset/task/1146/) | Bitwise Operations |
| 247 | [Maximum Xor Subarray](https://cses.fi/problemset/task/1655/) | Bitwise Operations |
| 248 | [Maximum Xor Subset](https://cses.fi/problemset/task/3191/) | Bitwise Operations |
| 249 | [Number of Subset Xors](https://cses.fi/problemset/task/3211/) | Bitwise Operations |
| 250 | [K Subset Xors](https://cses.fi/problemset/task/3192/) | Bitwise Operations |
| 251 | [Xor Pyramid Peak](https://cses.fi/problemset/task/2419/) | Bitwise Operations |
| 252 | [Xor Pyramid Diagonal](https://cses.fi/problemset/task/3194/) | Bitwise Operations |
| 253 | [Xor Pyramid Row](https://cses.fi/problemset/task/3195/) | Bitwise Operations |
| 254 | [All Subarray Xors](https://cses.fi/problemset/task/3233/) | Bitwise Operations |
| 255 | [SOS Bit Problem](https://cses.fi/problemset/task/1654/) | Bitwise Operations |
| 256 | [And Subset Count](https://cses.fi/problemset/task/3141/) | Bitwise Operations |
| 257 | [Square Subsets](https://cses.fi/problemset/task/3193/) | Additional Problems I |

<a id="module-28"></a>

## 28. Graph structure and offline connectivity

**Specialist · Prerequisites:** modules 20, 23, 24.

**Learn:** Use low-link information, graph orientations, rollback DSU, and connectivity queries.

**Exit check:** Distinguish bridges from articulation points and explain rollback without path compression.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 258 | [Necessary Roads](https://cses.fi/problemset/task/2076/) | Advanced Techniques |
| 259 | [Necessary Cities](https://cses.fi/problemset/task/2077/) | Advanced Techniques |
| 260 | [Acyclic Graph Edges](https://cses.fi/problemset/task/1756/) | Advanced Graph Problems |
| 261 | [Strongly Connected Edges](https://cses.fi/problemset/task/2177/) | Advanced Graph Problems |
| 262 | [Even Outdegree Edges](https://cses.fi/problemset/task/2179/) | Advanced Graph Problems |
| 263 | [Eulerian Subgraphs](https://cses.fi/problemset/task/2078/) | Advanced Techniques |
| 264 | [Course Schedule II](https://cses.fi/problemset/task/1757/) | Advanced Graph Problems |
| 265 | [Nearest Shops](https://cses.fi/problemset/task/3303/) | Advanced Graph Problems |
| 266 | [Graph Girth](https://cses.fi/problemset/task/1707/) | Advanced Graph Problems |
| 267 | [Reachable Nodes](https://cses.fi/problemset/task/2138/) | Advanced Techniques |
| 268 | [Reachability Queries](https://cses.fi/problemset/task/2143/) | Advanced Techniques |
| 269 | [Network Breakdown](https://cses.fi/problemset/task/1677/) | Advanced Graph Problems |
| 270 | [New Roads Queries](https://cses.fi/problemset/task/2101/) | Advanced Techniques |
| 271 | [Dynamic Connectivity](https://cses.fi/problemset/task/2133/) | Advanced Techniques |
| 272 | [MST Edge Check](https://cses.fi/problemset/task/3407/) | Advanced Graph Problems |
| 273 | [MST Edge Set Check](https://cses.fi/problemset/task/3408/) | Advanced Graph Problems |
| 274 | [MST Edge Cost](https://cses.fi/problemset/task/3409/) | Advanced Graph Problems |
| 275 | [Fixed Length Walk Queries](https://cses.fi/problemset/task/3357/) | Advanced Graph Problems |
| 276 | [Transfer Speeds Sum](https://cses.fi/problemset/task/3111/) | Advanced Graph Problems |

<a id="module-29"></a>

## 29. Tree structure and graph capstones

**Specialist · Prerequisites:** modules 23, 28.

**Learn:** Practice tree encodings, isomorphism, structural reductions, and difficult graph combinations.

**Exit check:** Write a reduction and proof before selecting a data structure; split a capstone into small lemmas.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 277 | [Prüfer Code](https://cses.fi/problemset/task/1134/) | Advanced Graph Problems |
| 278 | [Tree Traversals](https://cses.fi/problemset/task/1702/) | Advanced Graph Problems |
| 279 | [Tree Isomorphism I](https://cses.fi/problemset/task/1700/) | Advanced Graph Problems |
| 280 | [Tree Isomorphism II](https://cses.fi/problemset/task/1701/) | Advanced Graph Problems |
| 281 | [Tree Coin Collecting I](https://cses.fi/problemset/task/3114/) | Advanced Graph Problems |
| 282 | [Tree Coin Collecting II](https://cses.fi/problemset/task/3149/) | Advanced Graph Problems |
| 283 | [Flight Route Requests](https://cses.fi/problemset/task/1699/) | Advanced Graph Problems |
| 284 | [Network Renovation](https://cses.fi/problemset/task/1704/) | Advanced Graph Problems |
| 285 | [Forbidden Cities](https://cses.fi/problemset/task/1705/) | Advanced Graph Problems |
| 286 | [Creating Offices](https://cses.fi/problemset/task/1752/) | Advanced Graph Problems |
| 287 | [New Flight Routes](https://cses.fi/problemset/task/1685/) | Advanced Graph Problems |
| 288 | [Critical Cities](https://cses.fi/problemset/task/1703/) | Advanced Graph Problems |
| 289 | [Visiting Cities](https://cses.fi/problemset/task/1203/) | Advanced Graph Problems |
| 290 | [Graph Coloring](https://cses.fi/problemset/task/3308/) | Advanced Graph Problems |
| 291 | [Bus Companies](https://cses.fi/problemset/task/3158/) | Advanced Graph Problems |
| 292 | [Split into Two Paths](https://cses.fi/problemset/task/3358/) | Advanced Graph Problems |

<a id="module-30"></a>

## 30. DP optimization and mutable sequences

**Specialist · Prerequisites:** modules 11, 18, 19, 23.

**Learn:** Recognize optimizable transitions and prove their assumptions; learn implicit sequence trees.

**Exit check:** Show why the chosen DP optimization is valid and cross-check optimized results against a slow recurrence.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 293 | [Monster Game I](https://cses.fi/problemset/task/2084/) | Advanced Techniques |
| 294 | [Monster Game II](https://cses.fi/problemset/task/2085/) | Advanced Techniques |
| 295 | [Subarray Squares](https://cses.fi/problemset/task/2086/) | Advanced Techniques |
| 296 | [Houses and Schools](https://cses.fi/problemset/task/2087/) | Advanced Techniques |
| 297 | [Knuth Division](https://cses.fi/problemset/task/2088/) | Advanced Techniques |
| 298 | [Cut and Paste](https://cses.fi/problemset/task/2072/) | Advanced Techniques |
| 299 | [Substring Reversals](https://cses.fi/problemset/task/2073/) | Advanced Techniques |
| 300 | [Reversals and Sums](https://cses.fi/problemset/task/2074/) | Advanced Techniques |
| 301 | [Reversal Sorting](https://cses.fi/problemset/task/2075/) | Additional Problems II |
| 302 | [Increasing Array II](https://cses.fi/problemset/task/2132/) | Additional Problems II |
| 303 | [Maximum Average Subarrays](https://cses.fi/problemset/task/3301/) | Additional Problems I |
| 304 | [Stack Weights](https://cses.fi/problemset/task/2425/) | Additional Problems I |

<a id="module-31"></a>

## 31. Convolution and advanced arithmetic

**Specialist · Prerequisites:** modules 15, 22, 27.

**Learn:** Model polynomial products and correlations; study linear algebra, symmetry counting, and deeper arithmetic.

**Exit check:** Derive coefficient meanings and bounds; explain rounding or modulus requirements.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 305 | [Apples and Bananas](https://cses.fi/problemset/task/2111/) | Advanced Techniques |
| 306 | [One Bit Positions](https://cses.fi/problemset/task/2112/) | Advanced Techniques |
| 307 | [Signal Processing](https://cses.fi/problemset/task/2113/) | Advanced Techniques |
| 308 | [Bit Substrings](https://cses.fi/problemset/task/2115/) | Additional Problems II |
| 309 | [System of Linear Equations](https://cses.fi/problemset/task/3154/) | Mathematics |
| 310 | [Next Prime](https://cses.fi/problemset/task/3396/) | Mathematics |
| 311 | [Permutation Order](https://cses.fi/problemset/task/3397/) | Mathematics |
| 312 | [Permutation Rounds](https://cses.fi/problemset/task/3398/) | Mathematics |
| 313 | [Bracket Sequences I](https://cses.fi/problemset/task/2064/) | Mathematics |
| 314 | [Bracket Sequences II](https://cses.fi/problemset/task/2187/) | Mathematics |
| 315 | [Counting Necklaces](https://cses.fi/problemset/task/2209/) | Mathematics |
| 316 | [Counting Grids](https://cses.fi/problemset/task/2210/) | Mathematics |
| 317 | [Sum of Four Squares](https://cses.fi/problemset/task/3355/) | Mathematics |
| 318 | [Triangle Number Sums](https://cses.fi/problemset/task/3406/) | Mathematics |
| 319 | [Counting LCM Arrays](https://cses.fi/problemset/task/3169/) | Additional Problems I |
| 320 | [GCD Subsets](https://cses.fi/problemset/task/3161/) | Additional Problems II |

<a id="module-32"></a>

## 32. Counting DP and grid enumeration

**Specialist · Prerequisites:** modules 19, 22, 30, 31.

**Learn:** Design combinatorial states for permutations and grids, combining counting with geometry and DP.

**Exit check:** Explain exactly what is counted once, and use tiny exhaustive enumeration to check multiplicities.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 321 | [Permutation Inversions](https://cses.fi/problemset/task/2229/) | Counting Problems |
| 322 | [Empty String](https://cses.fi/problemset/task/1080/) | Counting Problems |
| 323 | [Counting Sequences](https://cses.fi/problemset/task/2228/) | Counting Problems |
| 324 | [Grid Paths II](https://cses.fi/problemset/task/1078/) | Counting Problems |
| 325 | [Counting Bishops](https://cses.fi/problemset/task/2176/) | Counting Problems |
| 326 | [Counting Permutations](https://cses.fi/problemset/task/1075/) | Counting Problems |
| 327 | [Raab Game II](https://cses.fi/problemset/task/3400/) | Counting Problems |
| 328 | [Counting Reorders](https://cses.fi/problemset/task/2421/) | Counting Problems |
| 329 | [Grid Completion](https://cses.fi/problemset/task/2429/) | Counting Problems |
| 330 | [Tournament Graph Distribution](https://cses.fi/problemset/task/3232/) | Counting Problems |
| 331 | [Collecting Numbers Distribution](https://cses.fi/problemset/task/3157/) | Counting Problems |
| 332 | [Functional Graph Distribution](https://cses.fi/problemset/task/2415/) | Counting Problems |
| 333 | [Filled Subgrid Count I](https://cses.fi/problemset/task/3413/) | Counting Problems |
| 334 | [Filled Subgrid Count II](https://cses.fi/problemset/task/3414/) | Counting Problems |
| 335 | [All Letter Subgrid Count I](https://cses.fi/problemset/task/3415/) | Counting Problems |
| 336 | [All Letter Subgrid Count II](https://cses.fi/problemset/task/3416/) | Counting Problems |
| 337 | [Border Subgrid Count I](https://cses.fi/problemset/task/3417/) | Counting Problems |
| 338 | [Border Subgrid Count II](https://cses.fi/problemset/task/3418/) | Counting Problems |
| 339 | [Coding Company](https://cses.fi/problemset/task/1665/) | Additional Problems II |

<a id="module-33"></a>

## 33. Flow optimization and assignment models

**Specialist · Prerequisites:** modules 24, 28.

**Learn:** Turn constraints into capacities or costs, then recover a feasible optimal assignment.

**Exit check:** Prove the correspondence between feasible solutions and flows; handle infeasibility explicitly.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 340 | [Parcel Delivery](https://cses.fi/problemset/task/2121/) | Advanced Techniques |
| 341 | [Task Assignment](https://cses.fi/problemset/task/2129/) | Advanced Techniques |
| 342 | [Distinct Routes II](https://cses.fi/problemset/task/2130/) | Advanced Techniques |
| 343 | [Coin Grid](https://cses.fi/problemset/task/1709/) | Additional Problems II |
| 344 | [Grid Puzzle I](https://cses.fi/problemset/task/2432/) | Additional Problems II |
| 345 | [Grid Puzzle II](https://cses.fi/problemset/task/2131/) | Additional Problems II |
| 346 | [Grid Coloring II](https://cses.fi/problemset/task/3312/) | Additional Problems II |
| 347 | [Minimum Cost Pairs](https://cses.fi/problemset/task/3402/) | Additional Problems II |
| 348 | [Programmers and Artists](https://cses.fi/problemset/task/2426/) | Additional Problems II |

<a id="module-34"></a>

## 34. Advanced geometry and subarray capstones

**Specialist · Prerequisites:** modules 18, 21, 23, 30.

**Learn:** Combine sweeps, dynamic summaries, and geometric reductions in less standardized problems.

**Exit check:** Separate event generation, active-state maintenance, and query correctness in the proof.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 349 | [Line Segments Trace I](https://cses.fi/problemset/task/3427/) | Geometry |
| 350 | [Line Segments Trace II](https://cses.fi/problemset/task/3428/) | Geometry |
| 351 | [Lines and Queries I](https://cses.fi/problemset/task/3429/) | Geometry |
| 352 | [Lines and Queries II](https://cses.fi/problemset/task/3430/) | Geometry |
| 353 | [Area of Rectangles](https://cses.fi/problemset/task/1741/) | Geometry |
| 354 | [Robot Path](https://cses.fi/problemset/task/1742/) | Geometry |
| 355 | [Sliding Window Advertisement](https://cses.fi/problemset/task/3227/) | Sliding Window Problems |
| 356 | [Maximum Building II](https://cses.fi/problemset/task/1148/) | Additional Problems II |
| 357 | [Nearest Campsites I](https://cses.fi/problemset/task/3306/) | Additional Problems I |
| 358 | [Nearest Campsites II](https://cses.fi/problemset/task/3307/) | Additional Problems I |
| 359 | [Subarray Sum Constraints](https://cses.fi/problemset/task/3294/) | Additional Problems I |
| 360 | [Subsets with Fixed Average](https://cses.fi/problemset/task/3302/) | Additional Problems I |
| 361 | [Two Array Average](https://cses.fi/problemset/task/3361/) | Additional Problems I |

<a id="module-35"></a>

## 35. Permutation, ordering, and sequence capstones

**Specialist · Prerequisites:** modules 25, 27, 30, 32.

**Learn:** Practice recovering hidden structure in permutations and sequences with mixed techniques.

**Exit check:** Construct an independent checker and explain the structural observation that reduces the search space.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 362 | [Beautiful Permutation II](https://cses.fi/problemset/task/3175/) | Additional Problems I |
| 363 | [Bubble Sort Rounds I](https://cses.fi/problemset/task/3151/) | Additional Problems I |
| 364 | [Bubble Sort Rounds II](https://cses.fi/problemset/task/3152/) | Additional Problems I |
| 365 | [Pyramid Array](https://cses.fi/problemset/task/1747/) | Additional Problems I |
| 366 | [Permutation Subsequence](https://cses.fi/problemset/task/3404/) | Additional Problems I |
| 367 | [Sorting Methods](https://cses.fi/problemset/task/1162/) | Additional Problems I |
| 368 | [Swap Round Sorting](https://cses.fi/problemset/task/1698/) | Additional Problems II |
| 369 | [Two Stacks Sorting](https://cses.fi/problemset/task/2402/) | Additional Problems II |
| 370 | [Binary Subsequences](https://cses.fi/problemset/task/2430/) | Additional Problems II |
| 371 | [Distinct Values Sum](https://cses.fi/problemset/task/3150/) | Additional Problems I |
| 372 | [Distinct Values Splits](https://cses.fi/problemset/task/3190/) | Additional Problems I |
| 373 | [Special Substrings](https://cses.fi/problemset/task/2186/) | Additional Problems I |
| 374 | [Bit Inversions](https://cses.fi/problemset/task/1188/) | Additional Problems I |
| 375 | [Cyclic Array](https://cses.fi/problemset/task/1191/) | Additional Problems I |
| 376 | [List of Sums](https://cses.fi/problemset/task/2414/) | Additional Problems I |
| 377 | [Letter Pair Move Game](https://cses.fi/problemset/task/2427/) | Additional Problems I |

<a id="module-36"></a>

## 36. Final mixed problem-solving lab

**Specialist · Prerequisites:** modules 29, 31, 32, 33, 34, 35.

**Learn:** Tackle remaining unusual problems with model selection, small experiments, and staged proofs.

**Exit check:** Produce a reusable lesson, a brute-force comparison where possible, and a fresh transfer attempt for each task.

| Order | Task | Original CSES category |
| --- | --- | --- |
| 378 | [Josephus Queries](https://cses.fi/problemset/task/2164/) | Mathematics |
| 379 | [Multiplication Table](https://cses.fi/problemset/task/2422/) | Additional Problems I |
| 380 | [Writing Numbers](https://cses.fi/problemset/task/1086/) | Additional Problems I |
| 381 | [Swap Game](https://cses.fi/problemset/task/1670/) | Additional Problems I |
| 382 | [Grid Path Description](https://cses.fi/problemset/task/1625/) | Introductory Problems |
| 383 | [Knight's Tour](https://cses.fi/problemset/task/1689/) | Graph Algorithms |
| 384 | [Water Containers Moves](https://cses.fi/problemset/task/3213/) | Additional Problems I |
| 385 | [Water Containers Queries](https://cses.fi/problemset/task/3214/) | Additional Problems I |
| 386 | [Bouncing Ball Steps](https://cses.fi/problemset/task/3215/) | Additional Problems II |
| 387 | [Bouncing Ball Cycle](https://cses.fi/problemset/task/3216/) | Additional Problems II |
| 388 | [Knight Moves Queries](https://cses.fi/problemset/task/3218/) | Additional Problems II |
| 389 | [K Subset Sums I](https://cses.fi/problemset/task/3108/) | Additional Problems II |
| 390 | [K Subset Sums II](https://cses.fi/problemset/task/3109/) | Additional Problems II |
| 391 | [Food Division](https://cses.fi/problemset/task/1189/) | Additional Problems II |
| 392 | [School Excursion](https://cses.fi/problemset/task/1706/) | Additional Problems II |
| 393 | [Removing Digits II](https://cses.fi/problemset/task/2174/) | Additional Problems II |
| 394 | [Coin Arrangement](https://cses.fi/problemset/task/2180/) | Additional Problems II |
| 395 | [Replace with Difference](https://cses.fi/problemset/task/3159/) | Additional Problems II |
| 396 | [Book Shop II](https://cses.fi/problemset/task/1159/) | Additional Problems II |
| 397 | [Same Sum Subsets](https://cses.fi/problemset/task/3425/) | Additional Problems II |
| 398 | [Mex Grid Queries](https://cses.fi/problemset/task/1157/) | Additional Problems II |
| 399 | [Stick Divisions](https://cses.fi/problemset/task/1161/) | Additional Problems II |
| 400 | [Stick Difference](https://cses.fi/problemset/task/3401/) | Additional Problems II |
