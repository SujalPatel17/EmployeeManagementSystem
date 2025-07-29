import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [assingTo, setAssingTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler= (e)=>{
        e.preventDefault()

          const newTask = {
            taskTitle,
            taskDate,
            taskDescription,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        //setNewTask({ taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})

        const data =JSON.parse(localStorage.getItem('employees'))
        data.forEach((employee) => {
            if (assingTo === employee.name) {
            employee.tasks.push(newTask);

            // Optional: update taskStats
            employee.taskStats.newTask += 1;
            }
        });

        localStorage.setItem('employees', JSON.stringify(data));
        
        setTaskTitle('')
        setCategory('')
        setAssingTo('')
        setTaskDate('')
        setTaskDescription('')
    }
  return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'> 
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}  className='flex  flex-wrap w-full items-start justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Ui Desing' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assing To</h3>
                        <input value={assingTo} onChange={(e)=>{setAssingTo(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" name="" id="" placeholder='Employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" name="" id="" placeholder='desding,dev,etc ' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
 
                
            </form>
        </div>
  )
}

export default CreateTask