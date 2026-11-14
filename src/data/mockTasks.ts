import type { Task } from '../api/types'

export const mockTasks: Task[] = [
  {
    id: 1,
    projectId: 1,
    title: 'Concevoir la page de connexion',
    description: 'Maquette du formulaire email + mot de passe',
    status: 'TODO',
    priority: 'HIGH',
    assigneeId: 1,
    dueDate: '2026-11-30',
    createdAt: '2026-11-01T09:00:00Z',
  },
]