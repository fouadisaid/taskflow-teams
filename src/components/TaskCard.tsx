import type { Task } from '../api/types'
import { isOverdue } from '../utils/tasks'
import PriorityBadge from './PriorityBadge'

interface TaskCardProps {
  task: Task
}

function TaskCard({ task }: TaskCardProps) {
  const overdue = isOverdue(task)

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
    </article>
  )
}

export default TaskCard