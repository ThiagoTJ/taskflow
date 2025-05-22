export function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 mt-4">Nenhuma tarefa ainda.</p>
  }

  return (
    <div className="mt-4 space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-3 rounded-lg border ${task.done ? 'bg-green-100' : 'bg-white'}`}
        >
          <span className={task.done ? 'line-through text-gray-500' : ''}>
            {task.title}
          </span>
        </div>
      ))}
    </div>
  )
}
