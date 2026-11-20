import {useState} from 'react'
import type { Task, TaskStatus } from '../api/types'
import Column from './Column'
import TaskCard from './TaskCard'
import { mockTasks } from '../data/mockTasks'


const COLUMNS: { status: TaskStatus; title: string }[] = [
  { status: 'TODO', title: 'À faire' },
  { status: 'DOING', title: 'En cours' },
  { status: 'DONE', title: 'Terminé' },
]

function Board() {
  const [tasks] = useState<Task[]>(mockTasks)

  return (
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
  )
}

export default Board