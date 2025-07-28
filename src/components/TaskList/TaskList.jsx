import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex items-center justify-start gap-5 flex-nowrap  overflow-x-auto h-[55%] w-full py-5  mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-orange-500 rounded-xl '>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4> 
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video </h2>
            <p className='text-sm  mt-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum harum debitis perspiciatis inventore, consequuntur quisquam voluptate omnis tempora, beatae illum fugit quasi aliquid facilis odio? Cumque adipisci atque saepe!</p>
        </div> 
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-500 rounded-xl '>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4> 
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video </h2>
            <p className='text-sm  mt-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum harum debitis perspiciatis inventore, consequuntur quisquam voluptate omnis tempora, beatae illum fugit quasi aliquid facilis odio? Cumque adipisci atque saepe!</p>
        </div> 

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-500 rounded-xl '>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4> 
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video </h2>
            <p className='text-sm  mt-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum harum debitis perspiciatis inventore, consequuntur quisquam voluptate omnis tempora, beatae illum fugit quasi aliquid facilis odio? Cumque adipisci atque saepe!</p>
        </div> 

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 rounded-xl '>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4> 
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video </h2>
            <p className='text-sm  mt-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum harum debitis perspiciatis inventore, consequuntur quisquam voluptate omnis tempora, beatae illum fugit quasi aliquid facilis odio? Cumque adipisci atque saepe!</p>
        </div> 


    </div>
  )
}

export default TaskList