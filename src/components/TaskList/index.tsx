import { useContext } from 'react'
import { TaskListContainer, TaskListTable } from './styles'
import { TaskContext } from '../../context/TaskContext'
import { TaskItem } from '../TaskItem'

export function TaskList() {
  const taskContext = useContext(TaskContext)

  if (!taskContext) {
    return null
  }

  const { tasks } = taskContext

  return (
    <TaskListContainer>
      <TaskListTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Status</th>
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </TaskListTable>
    </TaskListContainer>
  )
}
