import { useAuth } from '../context/AuthContext'
import { TaskList } from '../components/TaskList'

export function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-x1 font-bold">Olá, {user?.name || 'Usuário'}</h1>
          <button
            onClick={logout}
            className="text-sm text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-50"
          >
            Sair
          </button>
        </div>
        <h2 className="text-lg font-semibold mb-2">Minhas Tarefas</h2>
        <TaskList />
      </div>
    </div>
  )
}
