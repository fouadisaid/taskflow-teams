import Header from './components/Header'
import Board from './components/Board'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-6xl p-6">
        <Board/>
      </main>
    </div>
  )
}

export default App