import type { Task } from '../api/types'

export function todayISO(): string {
  return new Date().toLocaleDateString('en-CA')
}

export function isOverdue(task: Task): boolean {
  if (task.dueDate === null || task.status === 'DONE') return false
  const today = todayISO()
  return task.dueDate < today
}

