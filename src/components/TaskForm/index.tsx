import { Task } from '../../@types/task'
import { ErrorMessage, NewTaskForm, TaskButton, TaskInput } from './styles'
import { useForm } from 'react-hook-form'

export function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>()

  const onSubmit = (data: Task) => {
    const newTask: Task = {
      userId: 1,
      id: Date.now(),
      title: data.title,
      completed: false,
    }

    console.log(newTask)
    reset()
  }

  return (
    <NewTaskForm onSubmit={handleSubmit(onSubmit)}>
      <TaskInput
        {...register('title', { required: 'O título da tarefa é obrigatório' })}
        placeholder="Digite uma tarefa. Ex: Lavar a louça, passear com cachorro..."
      />
      <ErrorMessage>{errors.title ? errors.title.message : ''}</ErrorMessage>

      <TaskButton type="submit">Adicionar</TaskButton>
    </NewTaskForm>
  )
}
