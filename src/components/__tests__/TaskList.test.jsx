import { render, screen } from "@testing-library/react"
import { TaskList } from "../TaskList"

describe("TaskList", () => {
  it("exiba mensagem se a linha estiver vazia", () => {
    render(<TaskList tasks={[]} onToggle={() => {}} />)
    expect(screen.getByText(/nenhuma tarefa/i)).toBeInTheDocument()
  })

  it("renderizar tarefas corretamente", () => {
    const tasks = [
      {id: 1, title: "Aprender JS", done: false},
      {id: 2, title: "Estudar React", done: true},
    ]

    render(<TaskList tasks={tasks} onToggle={() => {}} />)

    expect(screen.getByText("Aprender JS")).toBeInTheDocument()
    expect(screen.getByText("Estudar React")).toHaveClass("line-through")
  })
})