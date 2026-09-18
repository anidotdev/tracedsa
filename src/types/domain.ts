export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD'
export type ResourceType = 'NOTES' | 'VIDEO' | 'ARTICLE' | 'REFERENCE'
export type NodeState = 'COMPLETED' | 'CURRENT' | 'LOCKED'

export interface Topic {
  id: string
  title: string
  slug: string
  description: string
  order_index: number
}

export interface Problem {
  id: string
  topic_id: string
  title: string
  difficulty: Difficulty
  platform: string
  url: string
  required: boolean
  order_index: number
}

export interface Resource {
  id: string
  topic_id: string
  title: string
  type: ResourceType
  source: string
  url: string
  order_index: number
}
