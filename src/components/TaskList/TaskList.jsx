import React from 'react'

const TaskList = () => {
  return (
    <div id="taskList" className='h-[50%] flex overflow-x-auto items-center gap-5 justify-start flex-nowrap w-full mt-10 rounded-xl'>

      <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm font-medium'>24 March 2025</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque architecto deserunt perferendis laudantium vero!</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm font-medium'>24 March 2025</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque architecto deserunt perferendis laudantium vero!</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm font-medium'>24 March 2025</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque architecto deserunt perferendis laudantium vero!</p>
      </div>

    </div>
  )
}

export default TaskList
