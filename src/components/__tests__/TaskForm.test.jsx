import { render, screen, fireEvent } from '@testing-library/react'
import { TaskForm } from '../Taskform'

describe("TaskForm", () => {
  it("chama onAdd com a nova tarefa", () => {
    const mockAdd = vi.fn()

    render(<TaskForm onAdd={mockAdd}/>)

    const input = screen.getByPlaceholderText(/nova tarefa/i)
    const button = screen.getByRole("button", {name: /adicionar/i})

    fireEvent.change(input, {target: {value: "Estudar React"}})
    fireEvent.click(button)

    expect(mockAdd).toHaveBeenCalled()
    expect(mockAdd).toHaveBeenCalledWith(
      expect.objectContaining({title: "Estudar React", done: false})
    )
  })
})