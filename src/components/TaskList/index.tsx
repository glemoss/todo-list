import { useEffect, useState } from 'react'
import { Status, TaskListContainer, TaskListTable } from './styles'
import { Task } from '../../@types/task'

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTasks(data.slice(0, 10)))
      .catch((error) => console.error('Error fetching tasks:', error))
  }, [])

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
                    {task.completed ? 'Concluído' : 'Em andamento'}
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
