import React from 'react'
import Header from '../Others/Header'
import TaskForm from '../Others/TaskForm'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
        <Header/>
        <TaskForm/>
        <AllTasks/>
    </div>
  )
}

export default AdminDashboard