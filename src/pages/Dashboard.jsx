import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { TaskList } from '../components/TaskList'
import { TaskForm } from '../components/Taskform'

export function Dashboard() {
  const { user, logout } = useAuth()
  const [tasks, setTasks] = useState(updateState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function updateState() {
    const saved = localStorage.getItem("tasks")
    return saved ? JSON.parse(saved) : []
  }

  function addTask(newTask) {
    setTasks((prev) => [newTask, ...prev])
  }

  function toggleTaskDone(id) {
    const taskDone = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task
    })
    setTasks(taskDone)
  }

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
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTaskDone} />
      </div>
    </div>
  )
}
