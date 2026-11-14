import type { Task } from '../api/types'

export function isOverdue(task: Task): boolean {
  if (task.dueDate === null || task.status === 'DONE') return false
  const today = new Date().toLocaleDateString('en-CA') // "2026-11-14"
  return task.dueDate < today
}