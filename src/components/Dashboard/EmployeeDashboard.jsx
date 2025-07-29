import React from 'react'
import Header from '../common/Header'
import TaskNumber from '../common/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen' >
        <Header data={data}/>
        <TaskNumber data={data}/>
        <TaskList data={data}/> 

    </div>
   )
}

export default EmployeeDashboard