import React, { useState } from 'react'

const Header = () => {
  // const [userName, setUsername] = useState('')

  // if(!data){
  //   setUsername("Admin")
  // } else{
  //   setUsername(data.firstname)
  // }

  const logOutUser = ()=>{
    localStorage.setItem("loggedInUser",'');
    window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName 😃</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2'>Log out</button>
    </div>
  )
}

export default Header
