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

const problemDefs: Array<[string, string, string, Problem['difficulty'], string, string]> = [
  ['p-000', 'foundations-complexity', 'Complexity Analysis: Time & Space', 'EASY', 'Big-O Cheat Sheet', 'https://www.bigocheatsheet.com/'],
  ['p-001', 'arrays', 'Contains Duplicate', 'EASY', 'LeetCode', 'https://leetcode.com/problems/contains-duplicate/'],
  ['p-002', 'arrays', 'Best Time to Buy and Sell Stock', 'EASY', 'LeetCode', 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'],
  ['p-003', 'arrays', 'Product of Array Except Self', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/product-of-array-except-self/'],
  ['p-004', 'arrays', 'Maximum Subarray', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/maximum-subarray/'],
  ['p-005', 'strings', 'Valid Palindrome', 'EASY', 'LeetCode', 'https://leetcode.com/problems/valid-palindrome/'],
  ['p-006', 'strings', 'Longest Common Prefix', 'EASY', 'LeetCode', 'https://leetcode.com/problems/longest-common-prefix/'],
  ['p-007', 'strings', 'Encode and Decode Strings', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/encode-and-decode-strings/'],
  ['p-008', 'basic-math', 'Happy Number', 'EASY', 'LeetCode', 'https://leetcode.com/problems/happy-number/'],
  ['p-009', 'hashing', 'Two Sum', 'EASY', 'LeetCode', 'https://leetcode.com/problems/two-sum/'],
  ['p-010', 'hashing', 'Valid Anagram', 'EASY', 'LeetCode', 'https://leetcode.com/problems/valid-anagram/'],
  ['p-011', 'hashing', 'Group Anagrams', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/group-anagrams/'],
  ['p-012', 'hashing', 'Top K Frequent Elements', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/top-k-frequent-elements/'],
  ['p-013', 'hashing', 'Longest Consecutive Sequence', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/longest-consecutive-sequence/'],
  ['p-014', 'hashing', 'Subarray Sum Equals K', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/subarray-sum-equals-k/'],
  ['p-015', 'hashing', 'Valid Sudoku', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/valid-sudoku/'],
  ['p-016', 'two-pointers', 'Two Sum II', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/'],
  ['p-017', 'two-pointers', '3Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/3sum/'],
  ['p-018', 'two-pointers', 'Container With Most Water', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/container-with-most-water/'],
  ['p-019', 'sliding-window', 'Longest Substring Without Repeating Characters', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'],
  ['p-020', 'sliding-window', 'Longest Repeating Character Replacement', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/longest-repeating-character-replacement/'],
  ['p-021', 'prefix-sum', 'Range Sum Query', 'EASY', 'LeetCode', 'https://leetcode.com/problems/range-sum-query-immutable/'],
  ['p-022', 'prefix-sum', 'Subarray Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/subarray-sum-equals-k/'],
  ['p-023', 'binary-search', 'Binary Search', 'EASY', 'LeetCode', 'https://leetcode.com/problems/binary-search/'],
  ['p-024', 'binary-search', 'Search a 2D Matrix', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/search-a-2d-matrix/'],
  ['p-025', 'binary-search', 'Koko Eating Bananas', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/koko-eating-bananas/'],
  ['p-026', 'sorting', 'Merge Intervals', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/merge-intervals/'],
  ['p-027', 'sorting', 'Sort Colors', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/sort-colors/'],
  ['p-028', 'linked-lists', 'Reverse Linked List', 'EASY', 'LeetCode', 'https://leetcode.com/problems/reverse-linked-list/'],
  ['p-029', 'linked-lists', 'Merge Two Sorted Lists', 'EASY', 'LeetCode', 'https://leetcode.com/problems/merge-two-sorted-lists/'],
  ['p-030', 'stack', 'Valid Parentheses', 'EASY', 'LeetCode', 'https://leetcode.com/problems/valid-parentheses/'],
  ['p-031', 'stack', 'Daily Temperatures', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/daily-temperatures/'],
  ['p-032', 'queue', 'Number of Islands (BFS)', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/number-of-islands/'],
  ['p-033', 'heap', 'Kth Largest Element in an Array', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/kth-largest-element-in-an-array/'],
  ['p-034', 'trees', 'Invert Binary Tree', 'EASY', 'LeetCode', 'https://leetcode.com/problems/invert-binary-tree/'],
  ['p-035', 'trees', 'Maximum Depth of Binary Tree', 'EASY', 'LeetCode', 'https://leetcode.com/problems/maximum-depth-of-binary-tree/'],
  ['p-036', 'trees', 'Binary Tree Level Order Traversal', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/binary-tree-level-order-traversal/'],
  ['p-037', 'bst', 'Validate Binary Search Tree', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/validate-binary-search-tree/'],
  ['p-038', 'trie', 'Implement Trie', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/implement-trie-prefix-tree/'],
  ['p-039', 'recursion', 'Subsets', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/subsets/'],
  ['p-040', 'backtracking', 'Combination Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/combination-sum/'],
  ['p-041', 'greedy', 'Jump Game', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/jump-game/'],
  ['p-042', 'graphs', 'Clone Graph', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/clone-graph/'],
  ['p-043', 'graphs', 'Course Schedule', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/course-schedule/'],
  ['p-044', 'shortest-paths', 'Network Delay Time', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/network-delay-time/'],
  ['p-045', 'union-find', 'Redundant Connection', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/redundant-connection/'],
  ['p-046', 'topological-sort', 'Course Schedule II', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/course-schedule-ii/'],
  ['p-047', 'dynamic-programming', 'Climbing Stairs', 'EASY', 'LeetCode', 'https://leetcode.com/problems/climbing-stairs/'],
  ['p-048', 'dynamic-programming', 'House Robber', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/house-robber/'],
  ['p-049', 'advanced-dp', 'Minimum Path Sum', 'MEDIUM', 'LeetCode', 'https://leetcode.com/problems/minimum-path-sum/'],
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
