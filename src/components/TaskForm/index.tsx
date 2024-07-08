import { NewTaskForm, TaskButton, TaskInput } from './styles'

export function TaskForm() {
  return (
    <NewTaskForm>
      <TaskInput placeholder="Digite uma tarefa. Ex: Lavar a louça, passear com cachorro..." />
      <TaskButton>Adicionar</TaskButton>
    </NewTaskForm>
  )
}
