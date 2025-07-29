import { use, useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {

  // useEffect(()=>{
  //   getLocalStorage () 
  // })
 
  const [user, setUser  ] = useState(null)
  const [loggedInUSerData, setLoggedInUSerData] = useState(null)
  
  const authData = useContext(AuthContext) 
  console.log(authData?.employees)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }

  // }, [authData]);
  
  

  const handleLogin =(email,password) =>{
    if (email=='admin@gmail.com' && password == '123'){ 
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employees.find((e)=>email==e.email && e.password==password )
      if(employee){
        setUser('employee')
        setLoggedInUSerData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    }else{
      alert("Invalid Credential")
    }
  }
  

  return (
<>
{!user ? <Login handleLogin={handleLogin} />: ""}
{ user == 'admin' ? <AdminDashboard/> : (user == 'employee' ?  <EmployeeDashboard data={loggedInUSerData} /> : null)}
{/* <EmployeeDashboard/> */}
{/* <AdminDashboard/> */}

</>
  )
}

export default App
