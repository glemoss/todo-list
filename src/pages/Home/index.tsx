import { TaskForm } from '../../components/TaskForm'
import { TaskList } from '../../components/TaskList'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <TaskForm />
      <TaskList />
    </HomeContainer>
  )
}
