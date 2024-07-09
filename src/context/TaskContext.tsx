import { createContext, useState, useEffect, ReactNode } from 'react'
import { Task } from '../@types/task'

interface TaskContextType {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (id: number) => void
  editTask: (id: number, newTitle: string) => void
  toggleTaskCompletion: (id: number) => void
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export function TaskProvider({ children }: { children: ReactNode }) {
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

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const editTask = (id: number, newTitle: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    )
  }

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, editTask, toggleTaskCompletion }}
    >
      {children}
    </TaskContext.Provider>
  )
}
