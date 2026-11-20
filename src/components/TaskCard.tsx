import type { Task, TaskStatus } from '../api/types'
import { isOverdue } from '../utils/tasks'
import PriorityBadge from './PriorityBadge'

interface TaskCardProps {
  task: Task
  onStatusChange: (id: number, status: TaskStatus) => void
  onDelete: (id: number) => void
}

//choix de la liste déroulante
const STATUS_OPTIONS: { value: TaskStatus; label: string }[] = [
  { value: 'TODO', label: 'À faire' },
  { value: 'DOING', label: 'En cours' },
  { value: 'DONE', label: 'Terminé' },
]

function TaskCard({ task, onStatusChange, onDelete }: TaskCardProps) {
  const overdue = isOverdue(task)

  function handleStatusChange(value: string) {
    const option = STATUS_OPTIONS.find((o) => o.value === value)
    if (option) onStatusChange(task.id, option.value)
  }
  
  function handleDelete() {
    if (window.confirm(`Supprimer la tâche « ${task.title} » ?`)) {
      onDelete(task.id)
    }
  }

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-gray-900">{task.title}</h3>
        <PriorityBadge priority={task.priority} />
      </div>

      <p className="mt-1 text-sm text-gray-600">{task.description}</p>

      {task.dueDate !== null && (
        <p className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          Échéance : {new Date(`${task.dueDate}T00:00:00`).toLocaleDateString('fr-FR')}
          {overdue && (
            <span className="rounded-full bg-red-600 px-2 py-0.5 font-medium text-white">
              En retard
            </span>
          )}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between gap-2">
        <select
          aria-label={`Statut de ${task.title}`}
          value={task.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="rounded border border-gray-300 px-1 py-0.5 text-sm"
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={handleDelete}
          className="text-sm text-red-600 hover:underline"
        >
          Supprimer
        </button>
      </div>
      
    </article>
  )
}

export default TaskCard