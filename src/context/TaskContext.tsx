import { createContext, useState, useEffect, ReactNode } from 'react'
import { Task } from '../@types/task'

interface TaskContextType {
  tasks: Task[]
  addTask: (task: Task) => void
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTasks(data.slice(0, 10)))
      .catch((error) => console.error('Error fetching tasks:', error))
  }, [])

  const addTask = (task: Task) => {
    setTasks((prevTasks) => [task, ...prevTasks])
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}
