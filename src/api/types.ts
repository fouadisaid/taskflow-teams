export type TaskStatus = 'TODO' | 'DOING' | 'DONE'
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH'
export type NewTask = Pick<Task, 'title' | 'description' | 'priority' | 'dueDate'>

export interface Task {
  id: number
  projectId: number
  title: string
  description: string
  status: TaskStatus
  priority: Priority
  assigneeId: number | null
  dueDate: string | null 
  createdAt: string 
}