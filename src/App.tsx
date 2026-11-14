import Header from './components/Header'
import Board from './components/Board'
import { mockTasks } from './data/mockTasks'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-6xl p-6">
        <Board tasks={mockTasks} />
      </main>
    </div>
  )
}

export default App