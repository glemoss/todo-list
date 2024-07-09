import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Task } from '../../@types/task'
import { Status } from './styles'
import { TaskContext } from '../../context/TaskContext'
import { Check, NotePencil, Trash, X } from 'phosphor-react'

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const taskContext = useContext(TaskContext)
  const navigate = useNavigate()

  if (!taskContext) {
    return null
  }

  const { removeTask, toggleTaskCompletion } = taskContext

  const handleEdit = () => {
    navigate(`/tasks/${task.id}`)
  }

  return (
    <>
      <tr>
        <td
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.title}
        </td>
        <td>
          <Status statusColor={task.completed ? 'green' : 'yellow'}>
            {task.completed ? 'Concluída' : 'Incompleta'}
          </Status>
        </td>
        <td>
          {task.completed ? (
            <X
              onClick={() => toggleTaskCompletion(task.id)}
              size={16}
              cursor={'pointer'}
            />
          ) : (
            <Check
              onClick={() => toggleTaskCompletion(task.id)}
              size={16}
              cursor={'pointer'}
            />
          )}
        </td>
        <td>
          <NotePencil onClick={handleEdit} size={16} cursor={'pointer'} />
        </td>
        <td>
          <Trash
            onClick={() => removeTask(task.id)}
            size={16}
            color="red"
            cursor={'pointer'}
          />
        </td>
      </tr>
    </>
  )
}
