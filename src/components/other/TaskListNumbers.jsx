import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between mt-10  gap-5 screen text-white'>
      <div className='bg-red-400 py-5 px-10 w-[45%] rounded-xl'>
        <h2 className='text-3xl font-semibold '>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='bg-blue-400 py-5 px-10 w-[45%] rounded-xl'>
        <h2 className='text-3xl font-semibold '>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='bg-green-400 py-5 px-10 w-[45%] rounded-xl'>
        <h2 className='text-3xl font-semibold '>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='bg-yellow-400 py-5 px-10 w-[45%] rounded-xl'>
        <h2 className='text-3xl font-semibold '>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
