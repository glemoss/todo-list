import { useContext } from 'react'
import { Task } from '../../@types/task'
import { ErrorMessage, NewTaskForm, TaskButton, TaskInput } from './styles'
import { useForm } from 'react-hook-form'
import { TaskContext } from '../../context/TaskContext'

export function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>()

  const taskContext = useContext(TaskContext)

  if (!taskContext) {
    return null
  }

  const { addTask } = taskContext

  const onSubmit = (data: Task) => {
    const newTask: Task = {
      userId: 1,
      id: Date.now(),
      title: data.title,
      completed: false,
    }

    addTask(newTask)
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
