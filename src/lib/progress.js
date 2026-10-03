export function getProblemsForTopic(problems, topicId) {
  const result = problems.filter((problem) => problem.topic_id === topicId)
  result.sort((a, b) => a.order_index - b.order_index)
  return result
}

function getRequiredProblems(problems, topicId) {
  return getProblemsForTopic(problems, topicId).filter((problem) => problem.required)
}

export function getTopicProgress(topic, problems, solved) {
  const required = getRequiredProblems(problems, topic.id)
  let solvedCount = 0

  for (const problem of required) {
    if (solved.has(problem.id)) {
      solvedCount += 1
    }
  }

  return {
    solved: solvedCount,
    total: required.length,
  }
}

export function isTopicComplete(topic, problems, solved) {
  const progress = getTopicProgress(topic, problems, solved)
  return progress.total > 0 && progress.solved === progress.total
}

export function isTopicUnlocked(topic, topics, problems, solved) {
  const index = topics.findIndex((item) => item.id === topic.id)

  if (index <= 0) {
    return true
  }

  const previousTopic = topics[index - 1]
  return isTopicComplete(previousTopic, problems, solved)
}

export function getProblemStatus(problem, problems, solved) {
  if (solved.has(problem.id)) {
    return 'COMPLETED'
  }

  const required = getRequiredProblems(problems, problem.topic_id)
  const current = required.find((item) => !solved.has(item.id))

  if (current && current.id === problem.id) {
    return 'CURRENT'
  }

  return 'LOCKED'
}

export function getTopicStatus(topic, topics, problems, solved) {
  if (isTopicComplete(topic, problems, solved)) {
    return 'COMPLETED'
  }

  if (!isTopicUnlocked(topic, topics, problems, solved)) {
    return 'LOCKED'
  }

  return 'CURRENT'
}

export function getCurrentTopic(topics, problems, solved) {
  for (const topic of topics) {
    if (getTopicStatus(topic, topics, problems, solved) === 'CURRENT') {
      return topic
    }
  }

  return null
}

export function getCurrentProblem(topic, problems, solved) {
  if (!topic) {
    return null
  }

  const topicProblems = getRequiredProblems(problems, topic.id)

  for (const problem of topicProblems) {
    if (!solved.has(problem.id)) {
      return problem
    }
  }

  return null
}

