import { useState } from 'react'

export function TaskForm() {
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (title.trim() === '') return

    onAdd({ id: Date.now(), title, done: false })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Adicionar
      </button>
    </form>
  )
}
