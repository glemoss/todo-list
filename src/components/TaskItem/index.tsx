import { Task } from '../../@types/task'
import { Status } from './styles'

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <tr>
      <td>{task.title}</td>
      <td>
        <Status statusColor={task.completed ? 'green' : 'yellow'}>
          {task.completed ? 'Concluída' : 'Incompleta'}
        </Status>
      </td>
    </tr>
  )
}
