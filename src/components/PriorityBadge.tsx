import type { Priority } from '../api/types'

interface PriorityBadgeProps {
  priority: Priority
}

const PRIORITY_STYLES: Record<Priority, { label: string; className: string }> = {
  LOW: { label: 'Basse', className: 'bg-green-100 text-green-800' },
  MEDIUM: { label: 'Moyenne', className: 'bg-yellow-100 text-yellow-800' },
  HIGH: { label: 'Haute', className: 'bg-red-100 text-red-800' },
}

function PriorityBadge({ priority }: PriorityBadgeProps) {
  const { label, className } = PRIORITY_STYLES[priority]
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${className}`}>
      {label}
    </span>
  )
}

export default PriorityBadge