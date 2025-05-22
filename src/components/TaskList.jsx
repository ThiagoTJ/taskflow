const tasks = [
  { id: 1, title: 'Finalizar protótipo', done: false },
  { id: 1, title: 'Revisar pull requests', done: true },
  { id: 1, title: 'Atualizar documentação', done: false },
]

export function TaskList() {
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
