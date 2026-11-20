import {useState} from 'react'
import type { NewTask, Task, TaskStatus } from '../api/types'
import Column from './Column'
import TaskCard from './TaskCard'
import { mockTasks } from '../data/mockTasks'
import TaskForm from './TaskForm'


const COLUMNS: { status: TaskStatus; title: string }[] = [
  { status: 'TODO', title: 'À faire' },
  { status: 'DOING', title: 'En cours' },
  { status: 'DONE', title: 'Terminé' },
]

function Board() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)

  function handleAddTask(newTask: NewTask) {
    setTasks((previous) => [
      {
        ...newTask,
        id: Math.max(0, ...previous.map((task) => task.id)) + 1,
        projectId: 1,
        status: 'TODO',
        assigneeId: null,
        createdAt: new Date().toISOString(),
      },
      ...previous,
    ])
  }

  return (
    <div className="space-y-6">
      <TaskForm onAddTask={handleAddTask} />

      <div className="grid gap-4 md:grid-cols-3">
      {COLUMNS.map(({ status, title }) => {
        const columnTasks = tasks.filter((task) => task.status === status)

        return (
          <Column key={status} title={title} count={columnTasks.length}>
            {columnTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Column>
        )
      })}
      </div>
    </div>
    
  )
}

export default Board