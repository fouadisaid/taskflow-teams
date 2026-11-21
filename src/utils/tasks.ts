import type { Task } from '../api/types'

export function todayISO(): string {
  return new Date().toLocaleDateString('en-CA')
}

export function isOverdue(task: Task): boolean {
  if (task.dueDate === null || task.status === 'DONE') return false
  const today = todayISO()
  return task.dueDate < today
}

//la forme du résultat du calcul
export interface TasksSummary {
  total: number
  done: number
  progress: number
  overdue: number
}

//calcule le résumé des tâches
export function computeSummary(tasks: Task[]): TasksSummary {
  const total = tasks.length
  const done = tasks.filter((task) => task.status === 'DONE').length
  const overdue = tasks.filter(isOverdue).length
  const progress = total === 0 ? 0 : Math.round((done / total) * 100)

  return { total, done, progress, overdue }
}

//filtre les tâches par titre 
  export function filterTasksByTitle(tasks: Task[], query: string): Task[] {
  const normalizedQuery = query.trim().toLowerCase()
  if (normalizedQuery === '') return tasks
  return tasks.filter((task) => task.title.toLowerCase().includes(normalizedQuery))
}

