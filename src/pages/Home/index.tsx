import { TaskForm } from '../../components/TaskForm'
import { TaskList } from '../../components/TaskList'
import { TaskProvider } from '../../context/TaskContext'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>
    </HomeContainer>
  )
}
