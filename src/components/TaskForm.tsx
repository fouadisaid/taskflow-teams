import { useState, type FormEvent } from 'react'
import type { NewTask, Priority } from '../api/types'
import { todayISO } from '../utils/tasks'

interface TaskFormProps {
  onAddTask: (task: NewTask) => void
}

const PRIORITY_OPTIONS: { value: Priority; label: string }[] = [
  { value: 'LOW', label: 'Basse' },
  { value: 'MEDIUM', label: 'Moyenne' },
  { value: 'HIGH', label: 'Haute' },
]

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>('MEDIUM')
  const [dueDate, setDueDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const titleError =
    title.trim().length < 3 ? 'Le titre doit contenir au moins 3 caractères.' : null
  const dueDateError =
    dueDate !== '' && dueDate < todayISO()
      ? "L'échéance ne peut pas être dans le passé."
      : null
  const hasErrors = titleError !== null || dueDateError !== null

  function handlePriorityChange(value: string) {
    const option = PRIORITY_OPTIONS.find((o) => o.value === value)
    if (option) setPriority(option.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    if (hasErrors) return

    onAddTask({
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate: dueDate === '' ? null : dueDate,
    })

    setTitle('')
    setDescription('')
    setPriority('MEDIUM')
    setDueDate('')
    setSubmitted(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-3 rounded-lg border border-gray-200 bg-white p-4"
    >
      <h2 className="font-semibold text-gray-800">Nouvelle tâche</h2>

      <div>
        <label htmlFor="task-title" className="block text-sm font-medium">
          Titre
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded border border-gray-300 px-2 py-1"
        />
        {submitted && titleError && (
          <p className="mt-1 text-sm text-red-600">{titleError}</p>
        )}
      </div>

      <div>
        <label htmlFor="task-description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 w-full rounded border border-gray-300 px-2 py-1"
        />
      </div>

      <div className="flex gap-4">
        <div>
          <label htmlFor="task-priority" className="block text-sm font-medium">
            Priorité
          </label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) => handlePriorityChange(e.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          >
            {PRIORITY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="task-due-date" className="block text-sm font-medium">
            Échéance
          </label>
          <input
            id="task-due-date"
            type="date"
            min={todayISO()}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 rounded border border-gray-300 px-2 py-1"
          />
          {submitted && dueDateError && (
            <p className="mt-1 text-sm text-red-600">{dueDateError}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="rounded bg-blue-600 px-3 py-1.5 font-medium text-white hover:bg-blue-700"
      >
        Ajouter la tâche
      </button>
    </form>
  )
}

export default TaskForm