import { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TaskContext } from '../../context/TaskContext'
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  SaveButton,
  CloseButton,
} from './styles'
import { ErrorMessage } from '../../components/TaskForm/styles'

interface EditTaskFormInputs {
  title: string
}

export function EditTaskPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const taskContext = useContext(TaskContext)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EditTaskFormInputs>()

  if (!taskContext) {
    return null
  }

  const { tasks, editTask } = taskContext
  const task = tasks.find((task) => task.id === parseInt(id!))

  useEffect(() => {
    if (task) {
      setValue('title', task.title)
    }
  }, [task, setValue])

  const onSubmit: SubmitHandler<EditTaskFormInputs> = (data) => {
    if (task) {
      editTask(task.id, data.title)
      navigate('/')
    }
  }

  return (
    <ModalContent>
      <ModalHeader>
        <h2>Editar Tarefa</h2>
      </ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <input
            type="text"
            {...register('title', { required: 'O título é obrigatório' })}
          />
          <ErrorMessage>
            {errors.title ? errors.title.message : ''}
          </ErrorMessage>
        </ModalBody>
        <ModalFooter>
          <SaveButton type="submit">Salvar</SaveButton>
          <CloseButton onClick={() => navigate('/')}>Cancelar</CloseButton>
        </ModalFooter>
      </form>
    </ModalContent>
  )
}
