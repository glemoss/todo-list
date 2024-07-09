import { useContext } from 'react'
import { Status, TaskListContainer, TaskListTable } from './styles'
import { TaskContext } from '../../context/TaskContext'

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
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>
                  <Status statusColor={task.completed ? 'green' : 'yellow'}>
                    {task.completed ? 'Concluída' : 'Incompleta'}
                  </Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TaskListTable>
    </TaskListContainer>
  )
}
