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
  // console.log(authData?.employees)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUSerData(userData.data)
    }
  },[])
  

  const handleLogin =(email,password) =>{
    if (email=='admin@gmail.com' && password == '123'){ 
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    } else {
      const latestEmployees = JSON.parse(localStorage.getItem('employees')) || []
      const employee = latestEmployees.find((e)=>email==e.email && e.password==password )

      if(employee){
        setUser('employee')
        setLoggedInUSerData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee })
      );
      }else{
        alert("Invalid Credential")
    }
  }
}
  

  return (
<>
{!user ? <Login handleLogin={handleLogin} />: ""}
{ user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ?  <EmployeeDashboard  changeUser={setUser} data={loggedInUSerData} /> : null)}
{/* <EmployeeDashboard/> */}
{/* <AdminDashboard/> */}

</>
  )
}

export default App
