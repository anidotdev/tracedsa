export function getProblemsForTopic(problems, topicId) {
  return problems
    .filter((p) => p.topic_id === topicId)
    .sort((a, b) => a.order_index - b.order_index)
}

export function getTopicProgress(topic, problems, solved) {
  const required = getProblemsForTopic(problems, topic.id).filter((p) => p.required)
  const solvedCount = required.filter((p) => solved.has(p.id)).length
  return { solved: solvedCount, total: required.length }
}

export function isTopicComplete(topic, problems, solved) {
  const { solved: count, total } = getTopicProgress(topic, problems, solved)
  return total > 0 && count === total
}

export function isTopicUnlocked(topic, topics, problems, solved) {
  const index = topics.findIndex((t) => t.id === topic.id)
  if (index <= 0) return true
  const prerequisite = topics[index - 1]
  return isTopicComplete(prerequisite, problems, solved)
}

export function getProblemStatus(problem, problems, solved) {
  if (solved.has(problem.id)) return 'COMPLETED'
  const topicProblems = problems
    .filter((p) => p.topic_id === problem.topic_id && p.required)
    .sort((a, b) => a.order_index - b.order_index)
  const current = topicProblems.find((p) => !solved.has(p.id))
  return current?.id === problem.id ? 'CURRENT' : 'LOCKED'
}

export function getTopicStatus(topic, topics, problems, solved) {
  if (isTopicComplete(topic, problems, solved)) return 'COMPLETED'
  if (!isTopicUnlocked(topic, topics, problems, solved)) return 'LOCKED'
  return 'CURRENT'
}

export function getCurrentTopic(topics, problems, solved) {
  return topics.find((topic) => getTopicStatus(topic, topics, problems, solved) === 'CURRENT') ?? null
}

export function getCurrentProblem(topic, problems, solved) {
  if (!topic) return null
  return getProblemsForTopic(problems, topic.id).find((p) => p.required && !solved.has(p.id)) ?? null
}

export function calculateXP(problems, solved) {
  return problems.reduce((total, problem) => {
    if (!solved.has(problem.id)) return total
    return total + (problem.difficulty === 'EASY' ? 10 : problem.difficulty === 'MEDIUM' ? 20 : 30)
  }, 0)
}
