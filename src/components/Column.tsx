import type { ReactNode } from 'react'

interface ColumnProps {
  title: string
  count: number
  children: ReactNode
}

function Column({ title, count, children }: ColumnProps) {
  return (
    <section className="flex flex-col gap-3 rounded-lg bg-gray-100 p-3">
      <h2 className="flex items-center justify-between font-semibold text-gray-800">
        {title}
        <span className="rounded-full bg-gray-300 px-2 text-sm">{count}</span>
      </h2>

      {count === 0 ? (
        <p className="text-sm italic text-gray-500">Aucune tâche</p>
      ) : (
        children
      )}
    </section>
  )
}

export default Column