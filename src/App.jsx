import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useState } from 'react'
import { Context } from './context/AuthContext'



const App = () => {

  // localStorage.clear()

  const [userData,setUserData]=useContext(Context)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(JSON.parse(loggedInUser).role)
    }
    if(loggedInUser){
      setLoggedInUserData(JSON.parse(loggedInUser).data)
    }
  }, [])
  

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()

  },[])

  useEffect(() => {
    if(userData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(JSON.parse(loggedInUser).role)
      }
    }
  }, [userData])
  
  const loginHandler=(email,password)=>{
    if(email=="admin@me.com" && password=="123"
    ){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      setLoggedInUserData(admin)
    }
    else if(userData){
      const employee=userData.find((e)=>e.email==email && e.password==password)
      if(employee){
        setUser('employee')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        setLoggedInUserData(employee)
      }
    }
  else{
    alert("Invalid Credentials")
  }}

  return (
    <>
      {!user?<Login loginHandler={loginHandler}/>:""}
      {user=='admin'?<AdminDashboard changeUser={setUser} />:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    </>
  )
}

export default App