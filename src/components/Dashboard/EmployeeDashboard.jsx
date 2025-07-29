import React from 'react'
import Header from '../common/Header'
import TaskNumber from '../common/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ changeUser, data }) => {

  console.log('Employee Dashboard Data:', data);

  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen' >
        <Header changeUser={changeUser} data={data}/>
        <TaskNumber data={data}/>
        <TaskList data={data}/> 

    </div>
   )
}

export default EmployeeDashboard