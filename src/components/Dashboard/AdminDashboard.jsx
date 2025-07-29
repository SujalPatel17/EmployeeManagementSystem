import React from 'react'
import Header from '../common/Header'
import CreateTask from '../common/CreateTask'
import AllTask from '../common/AllTask'

const AdminDashboard = ({changeUser}) => {
  return (
    <div className='h-screen w-full p-10' >
        <Header changeUser={changeUser} data={{name:'Admin'}}/>
        <CreateTask/>
        <AllTask/>  


    </div>
  ) 
}

export default AdminDashboard