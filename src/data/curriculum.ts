import type { Problem, Resource, Topic } from '../types/domain'

const topicDefs = [
  ['foundations-complexity', 'Time & Space Complexity', 'Reason about the cost of your code before you write more of it.'],
  ['arrays', 'Arrays', 'Indexing, traversal, in-place operations and contiguous data.'],
  ['strings', 'Strings', 'Character frequency, parsing and string transformations.'],
  ['basic-math', 'Basic Math', 'Arithmetic patterns, divisibility and mathematical reasoning.'],
  ['hashing', 'Hashing', 'Frequency, lookup and constant-time set membership patterns.'],
  ['two-pointers', 'Two Pointers', 'Use coordinated indices to compress search space.'],
  ['sliding-window', 'Sliding Window', 'Maintain a moving range over sequential data.'],
  ['prefix-sum', 'Prefix Sum', 'Turn repeated range queries into simple arithmetic.'],
  ['binary-search', 'Binary Search', 'Exploit monotonic structure to cut search space.'],
  ['sorting', 'Sorting', 'Ordering as a primitive for search, grouping and greedy strategies.'],
  ['linked-lists', 'Linked Lists', 'Pointers, mutation, traversal and structural manipulation.'],
  ['stack', 'Stack', 'LIFO structure for parsing, monotonicity and state.'],
  ['queue', 'Queue', 'FIFO structure and breadth-first processing.'],
  ['heap', 'Heap', 'Priority-based retrieval and top-k patterns.'],
  ['trees', 'Trees', 'Recursive structure, traversal and hierarchical state.'],
  ['bst', 'Binary Search Tree', 'Ordered tree invariants and search.'],
  ['trie', 'Trie', 'Prefix indexing for string and dictionary problems.'],
  ['recursion', 'Recursion', 'Model repeated subproblems with a smaller state.'],
  ['backtracking', 'Backtracking', 'Enumerate constrained search spaces with pruning.'],
  ['greedy', 'Greedy', 'Build locally optimal choices under a provable invariant.'],
  ['graphs', 'Graph Traversal', 'Represent relationships and systematically explore them.'],
  ['shortest-paths', 'Shortest Paths', 'Weighted and unweighted pathfinding.'],
  ['union-find', 'Union Find', 'Track connectivity under incremental merges.'],
  ['topological-sort', 'Topological Sort', 'Order dependency graphs with directed acyclic structure.'],
  ['dynamic-programming', 'Dynamic Programming', 'Reuse overlapping subproblem results systematically.'],
  ['advanced-dp', 'Advanced DP', 'State compression, dimensions and harder transitions.'],
] as const

export const topics: Topic[] = topicDefs.map(([slug, title, description], i) => ({
  id: slug,
  title,
  slug,
  description,
  order_index: i + 1,
}))

// Each topic's problems are ordered easy -> medium so the ladder inside
// a topic is itself a progression, not just a flat bucket of one difficulty.
const problemDefs: Array<[string, string, string, Problem['difficulty'], string, string]> = [
  // foundations-complexity
  ['p-000', 'foundations-complexity', 'Life, the Universe, and Everything', 'EASY', 'CodeChef', 'https://www.codechef.com/problems/TEST'],
  ['p-100', 'foundations-complexity', 'Enormous Input Test', 'EASY', 'CodeChef', 'https://www.codechef.com/problems/INTEST'],
  ['p-101', 'foundations-complexity', 'Missing Number', 'EASY', 'LeetCode', 'https://leetcode.com/problems/missing-number/'],
  ['p-102', 'foundations-complexity', 'Two Sum (Brute vs Optimal)', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/two-sum/'],

  // arrays
  ['p-001', 'arrays', 'Contains Duplicate', 'EASY', 'LeetCode', 'https://leetcode.com/problems/contains-duplicate/'],
  ['p-002', 'arrays', 'Best Time to Buy and Sell Stock', 'EASY', 'LeetCode', 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'],
  ['p-103', 'arrays', 'Move Zeroes', 'EASY', 'LeetCode', 'https://leetcode.com/problems/move-zeroes/'],
  ['p-104', 'arrays', 'Majority Element', 'EASY', 'LeetCode', 'https://leetcode.com/problems/majority-element/'],
  ['p-003', 'arrays', 'Product of Array Except Self', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/product-of-array-except-self/'],
  ['p-004', 'arrays', 'Maximum Subarray', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/maximum-subarray/'],
  ['p-105', 'arrays', 'Rotate Array', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/rotate-array/'],
  ['p-106', 'arrays', 'Gas Station', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/gas-station/'],

  // strings
  ['p-005', 'strings', 'Valid Palindrome', 'EASY', 'LeetCode', 'https://leetcode.com/problems/valid-palindrome/'],
  ['p-006', 'strings', 'Longest Common Prefix', 'EASY', 'LeetCode', 'https://leetcode.com/problems/longest-common-prefix/'],
  ['p-108', 'strings', 'Reverse Words in a String', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/reverse-words-in-a-string/'],
  ['p-007', 'strings', 'Encode and Decode Strings', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/encode-and-decode-strings/'],
  ['p-109', 'strings', 'Group Shifted Strings', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/group-shifted-strings/'],

  // basic-math
  ['p-008', 'basic-math', 'Happy Number', 'EASY', 'LeetCode', 'https://leetcode.com/problems/happy-number/'],
  ['p-111', 'basic-math', 'Fizz Buzz', 'EASY', 'LeetCode', 'https://leetcode.com/problems/fizz-buzz/'],
  ['p-112', 'basic-math', 'Palindrome Number', 'EASY', 'LeetCode', 'https://leetcode.com/problems/palindrome-number/'],
  ['p-113', 'basic-math', "Sieve of Eratosthenes / Count Primes", 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/count-primes/'],
  ['p-114', 'basic-math', 'Pow(x, n)', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/powx-n/'],

  // hashing
  ['p-009', 'hashing', 'Two Sum', 'EASY', 'LeetCode', 'https://leetcode.com/problems/two-sum/'],
  ['p-010', 'hashing', 'Valid Anagram', 'EASY', 'LeetCode', 'https://leetcode.com/problems/valid-anagram/'],
  ['p-011', 'hashing', 'Group Anagrams', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/group-anagrams/'],
  ['p-012', 'hashing', 'Top K Frequent Elements', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/top-k-frequent-elements/'],
  ['p-013', 'hashing', 'Longest Consecutive Sequence', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/longest-consecutive-sequence/'],
  ['p-014', 'hashing', 'Subarray Sum Equals K', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/subarray-sum-equals-k/'],
  ['p-015', 'hashing', 'Valid Sudoku', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/valid-sudoku/'],

  // two-pointers
  ['p-116', 'two-pointers', 'Valid Palindrome II', 'EASY', 'LeetCode', 'https://leetcode.com/problems/valid-palindrome-ii/'],
  ['p-016', 'two-pointers', 'Two Sum II', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/'],
  ['p-017', 'two-pointers', '3Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/3sum/'],
  ['p-018', 'two-pointers', 'Container With Most Water', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/container-with-most-water/'],
  ['p-117', 'two-pointers', 'Sort Colors (Dutch Flag)', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/sort-colors/'],

  // sliding-window
  ['p-119', 'sliding-window', 'Best Time to Buy and Sell Stock (Window)', 'EASY', 'LeetCode', 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'],
  ['p-019', 'sliding-window', 'Longest Substring Without Repeating Characters', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'],
  ['p-020', 'sliding-window', 'Longest Repeating Character Replacement', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/longest-repeating-character-replacement/'],
  ['p-120', 'sliding-window', 'Permutation in String', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/permutation-in-string/'],

  // prefix-sum
  ['p-021', 'prefix-sum', 'Range Sum Query', 'EASY', 'LeetCode', 'https://leetcode.com/problems/range-sum-query-immutable/'],
  ['p-022', 'prefix-sum', 'Subarray Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/subarray-sum-equals-k/'],
  ['p-122', 'prefix-sum', 'Product of Array Except Self (Prefix/Suffix)', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/product-of-array-except-self/'],
  ['p-123', 'prefix-sum', 'Continuous Subarray Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/continuous-subarray-sum/'],

  // binary-search
  ['p-023', 'binary-search', 'Binary Search', 'EASY', 'LeetCode', 'https://leetcode.com/problems/binary-search/'],
  ['p-024', 'binary-search', 'Search a 2D Matrix', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/search-a-2d-matrix/'],
  ['p-025', 'binary-search', 'Koko Eating Bananas', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/koko-eating-bananas/'],
  ['p-124', 'binary-search', 'Search in Rotated Sorted Array', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/search-in-rotated-sorted-array/'],
  ['p-125', 'binary-search', 'Find Minimum in Rotated Sorted Array', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/'],

  // sorting
  ['p-127', 'sorting', 'Sort an Array (Merge Sort)', 'EASY', 'LeetCode', 'https://leetcode.com/problems/sort-an-array/'],
  ['p-026', 'sorting', 'Merge Intervals', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/merge-intervals/'],
  ['p-027', 'sorting', 'Sort Colors', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/sort-colors/'],
  ['p-128', 'sorting', 'Kth Largest Element in an Array (Quickselect)', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/kth-largest-element-in-an-array/'],

  // linked-lists
  ['p-028', 'linked-lists', 'Reverse Linked List', 'EASY', 'LeetCode', 'https://leetcode.com/problems/reverse-linked-list/'],
  ['p-029', 'linked-lists', 'Merge Two Sorted Lists', 'EASY', 'LeetCode', 'https://leetcode.com/problems/merge-two-sorted-lists/'],
  ['p-130', 'linked-lists', 'Linked List Cycle', 'EASY', 'LeetCode', 'https://leetcode.com/problems/linked-list-cycle/'],
  ['p-131', 'linked-lists', 'Reorder List', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/reorder-list/'],
  ['p-132', 'linked-lists', 'Remove Nth Node From End of List', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/'],

  // stack
  ['p-030', 'stack', 'Valid Parentheses', 'EASY', 'LeetCode', 'https://leetcode.com/problems/valid-parentheses/'],
  ['p-134', 'stack', 'Min Stack', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/min-stack/'],
  ['p-031', 'stack', 'Daily Temperatures', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/daily-temperatures/'],
  ['p-135', 'stack', 'Evaluate Reverse Polish Notation', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/evaluate-reverse-polish-notation/'],

  // queue
  ['p-137', 'queue', 'Implement Queue using Stacks', 'EASY', 'LeetCode', 'https://leetcode.com/problems/implement-queue-using-stacks/'],
  ['p-032', 'queue', 'Number of Islands (BFS)', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/number-of-islands/'],
  ['p-138', 'queue', 'Rotting Oranges', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/rotting-oranges/'],

  // heap
  ['p-140', 'heap', 'Kth Largest Element in a Stream', 'EASY', 'LeetCode', 'https://leetcode.com/problems/kth-largest-element-in-a-stream/'],
  ['p-033', 'heap', 'Kth Largest Element in an Array', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/kth-largest-element-in-an-array/'],
  ['p-141', 'heap', 'Task Scheduler', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/task-scheduler/'],

  // trees
  ['p-034', 'trees', 'Invert Binary Tree', 'EASY', 'LeetCode', 'https://leetcode.com/problems/invert-binary-tree/'],
  ['p-035', 'trees', 'Maximum Depth of Binary Tree', 'EASY', 'LeetCode', 'https://leetcode.com/problems/maximum-depth-of-binary-tree/'],
  ['p-143', 'trees', 'Same Tree', 'EASY', 'LeetCode', 'https://leetcode.com/problems/same-tree/'],
  ['p-036', 'trees', 'Binary Tree Level Order Traversal', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/binary-tree-level-order-traversal/'],
  ['p-144', 'trees', 'Lowest Common Ancestor of a Binary Tree', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/'],

  // bst
  ['p-146', 'bst', 'Search in a Binary Search Tree', 'EASY', 'LeetCode', 'https://leetcode.com/problems/search-in-a-binary-search-tree/'],
  ['p-037', 'bst', 'Validate Binary Search Tree', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/validate-binary-search-tree/'],
  ['p-147', 'bst', 'Kth Smallest Element in a BST', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/'],
  ['p-148', 'bst', 'Lowest Common Ancestor of a BST', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/'],

  // trie
  ['p-038', 'trie', 'Implement Trie', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/implement-trie-prefix-tree/'],
  ['p-150', 'trie', 'Design Add and Search Words Data Structure', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/design-add-and-search-words-data-structure/'],
  ['p-183', 'trie', 'Replace Words', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/replace-words/'],

  // recursion
  ['p-152', 'recursion', 'Fibonacci Number', 'EASY', 'LeetCode', 'https://leetcode.com/problems/fibonacci-number/'],
  ['p-153', 'recursion', 'Power of Two', 'EASY', 'LeetCode', 'https://leetcode.com/problems/power-of-two/'],
  ['p-039', 'recursion', 'Subsets', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/subsets/'],
  ['p-154', 'recursion', 'Generate Parentheses', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/generate-parentheses/'],

  // backtracking
  ['p-155', 'backtracking', 'Permutations', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/permutations/'],
  ['p-040', 'backtracking', 'Combination Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/combination-sum/'],
  ['p-156', 'backtracking', 'Word Search', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/word-search/'],
  ['p-157', 'backtracking', 'Palindrome Partitioning', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/palindrome-partitioning/'],

  // greedy
  ['p-159', 'greedy', 'Assign Cookies', 'EASY', 'LeetCode', 'https://leetcode.com/problems/assign-cookies/'],
  ['p-041', 'greedy', 'Jump Game', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/jump-game/'],
  ['p-160', 'greedy', 'Jump Game II', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/jump-game-ii/'],
  ['p-161', 'greedy', 'Gas Station', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/gas-station/'],

  // graphs
  ['p-163', 'graphs', 'Find if Path Exists in Graph', 'EASY', 'LeetCode', 'https://leetcode.com/problems/find-if-path-exists-in-graph/'],
  ['p-042', 'graphs', 'Clone Graph', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/clone-graph/'],
  ['p-043', 'graphs', 'Course Schedule', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/course-schedule/'],
  ['p-164', 'graphs', 'Pacific Atlantic Water Flow', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/pacific-atlantic-water-flow/'],

  // shortest-paths
  ['p-166', 'shortest-paths', 'Path With Minimum Effort', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/path-with-minimum-effort/'],
  ['p-044', 'shortest-paths', 'Network Delay Time', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/network-delay-time/'],
  ['p-167', 'shortest-paths', 'Cheapest Flights Within K Stops', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/cheapest-flights-within-k-stops/'],

  // union-find
  ['p-169', 'union-find', 'Number of Provinces', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/number-of-provinces/'],
  ['p-045', 'union-find', 'Redundant Connection', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/redundant-connection/'],
  ['p-170', 'union-find', 'Accounts Merge', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/accounts-merge/'],

  // topological-sort
  ['p-182', 'topological-sort', 'Course Schedule', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/course-schedule/'],
  ['p-046', 'topological-sort', 'Course Schedule II', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/course-schedule-ii/'],
  ['p-184', 'topological-sort', 'Minimum Height Trees', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/minimum-height-trees/'],

  // dynamic-programming
  ['p-047', 'dynamic-programming', 'Climbing Stairs', 'EASY', 'LeetCode', 'https://leetcode.com/problems/climbing-stairs/'],
  ['p-173', 'dynamic-programming', 'Min Cost Climbing Stairs', 'EASY', 'LeetCode', 'https://leetcode.com/problems/min-cost-climbing-stairs/'],
  ['p-048', 'dynamic-programming', 'House Robber', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/house-robber/'],
  ['p-174', 'dynamic-programming', 'Coin Change', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/coin-change/'],
  ['p-175', 'dynamic-programming', 'Longest Increasing Subsequence', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/longest-increasing-subsequence/'],
  ['p-176', 'dynamic-programming', 'Word Break', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/word-break/'],

  // advanced-dp
  ['p-049', 'advanced-dp', 'Minimum Path Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/minimum-path-sum/'],
  ['p-177', 'advanced-dp', 'Unique Paths II', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/unique-paths-ii/'],
  ['p-178', 'advanced-dp', 'Longest Common Subsequence', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/longest-common-subsequence/'],
]

export const problems: Problem[] = problemDefs.map(([id, topic_id, title, difficulty, platform, url], i) => ({
  id, topic_id, title, difficulty, platform, url, required: true, order_index: i + 1,
}))

const resourceSeed = [
  ['arrays', 'Arrays Fundamentals', 'NOTES', 'DSA Notes', 'https://www.geeksforgeeks.org/array-data-structure/'],
  ['arrays', 'Array Techniques', 'VIDEO', 'NeetCode', 'https://www.youtube.com/@NeetCode'],
  ['hashing', 'Hashing Fundamentals', 'NOTES', 'USACO Guide', 'https://usaco.guide/'],
  ['hashing', 'Hash Tables Explained', 'VIDEO', 'NeetCode', 'https://www.youtube.com/@NeetCode'],
  ['hashing', 'C++ unordered_map', 'REFERENCE', 'cppreference', 'https://en.cppreference.com/w/cpp/container/unordered_map'],
  ['two-pointers', 'Two Pointers Pattern', 'ARTICLE', 'NeetCode', 'https://neetcode.io/roadmap'],
  ['sliding-window', 'Sliding Window Pattern', 'ARTICLE', 'NeetCode', 'https://neetcode.io/roadmap'],
  ['trees', 'Tree Traversals', 'REFERENCE', 'cppreference', 'https://en.cppreference.com/'],
  ['graphs', 'Graph Traversal', 'VIDEO', 'William Fiset', 'https://www.youtube.com/@WilliamFiset'],
  ['dynamic-programming', 'Dynamic Programming Notes', 'NOTES', 'cp-algorithms', 'https://cp-algorithms.com/dynamic_programming/intro-to-dp.html'],
] as const

export const resources: Resource[] = resourceSeed.map(([topic_id, title, type, source, url], i) => ({
  id: `r-${i + 1}`, topic_id, title, type: type as Resource['type'], source, url, order_index: i + 1,
}))

export const topicPrerequisites: Array<[string, string]> = topics.slice(1).map((topic, i) => [topic.id, topics[i].id])

// Demo state mirrors the brief: Hashing is current with 4/7 completed.
export const demoSolvedIds = new Set(['p-000', 'p-001', 'p-002', 'p-003', 'p-004', 'p-005', 'p-006', 'p-007', 'p-008', 'p-009', 'p-010', 'p-011', 'p-012'])
export const demoXp = 170
