import React from 'react'
import Header from '../Others/Header'
import TaskForm from '../Others/TaskForm'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = ({changeUser}) => {
  return (
    <div className='p-10'>
        <Header changeUser={changeUser}/>
        <TaskForm/>
        <AllTasks/>
    </div>
  )
}

export default AdminDashboard