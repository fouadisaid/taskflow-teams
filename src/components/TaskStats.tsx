import type { Task } from '../api/types'
import { computeSummary } from '../utils/tasks'

interface TaskStatsProps {
  tasks: Task[]
}

function TaskStats({ tasks }: TaskStatsProps) {
  // Calculé à chaque affichage : PAS de useState, PAS de useEffect
  const { total, done, progress, overdue } = computeSummary(tasks)

  return (
    <section
      aria-label="Statistiques"
      className="rounded-lg border border-gray-200 bg-white p-4"
    >
      <dl className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
        <div>
          <dt className="text-sm text-gray-500">Total</dt>
          <dd className="text-2xl font-bold text-gray-900">{total}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Terminées</dt>
          <dd className="text-2xl font-bold text-green-600">{done}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Avancement</dt>
          <dd className="text-2xl font-bold text-blue-600">{progress} %</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">En retard</dt>
          <dd className="text-2xl font-bold text-red-600">{overdue}</dd>
        </div>
      </dl>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-blue-600"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  )
}

export default TaskStats