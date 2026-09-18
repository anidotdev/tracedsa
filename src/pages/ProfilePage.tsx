import { problems, topics } from '../data/curriculum'
import { getTopicStatus } from '../lib/progress'

export function ProfilePage({ userName, xp, solved }: { userName: string; xp: number; solved: Set<string> }) {
  const completedTopics = topics.filter((topic) => getTopicStatus(topic, topics, problems, solved) === 'COMPLETED').length
  return <section className="page profile-page"><span className="mono section-kicker">PROFILE</span><h1>{userName}</h1><div className="profile-stats"><div><span className="mono">XP</span><strong>{xp}</strong></div><div><span className="mono">PROBLEMS</span><strong>{solved.size}<small> / {problems.length}</small></strong></div><div><span className="mono">TOPICS</span><strong>{completedTopics}<small> / {topics.length}</small></strong></div></div></section>
}
