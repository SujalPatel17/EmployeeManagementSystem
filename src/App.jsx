import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // }, )

  const [user, setUser  ] = useState('SUjal')

  const handleLogin =() =>{

  }
  
  return (
<>
{!user ? <Login/>: ""}
{/* <EmployeeDashboard/> */}
{/* <AdminDashboard/> */}

</>
  )
}

export default App
