import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { EditTaskPage } from './pages/EditTask'
import { TaskProvider } from './context/TaskContext'

export function Router() {
  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/:id" element={<EditTaskPage />} />
        </Route>
      </Routes>
    </TaskProvider>
  )
}
