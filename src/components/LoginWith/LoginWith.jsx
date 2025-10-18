import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const LoginWith = () => {
  return (
    <div className='space-y-3'>
        <h4 className='text-xl font-medium'>Login With</h4>
        <button className='flex items-center gap-2 border w-full justify-center py-2 rounded-md font-medium text-dark2 border-dark2 cursor-pointer duration-300 hover:text-secondary hover:border-secondary'> <FaGoogle/> Login with Google</button>
        <button className='flex items-center gap-2 border w-full justify-center py-2 rounded-md font-medium text-dark2 border-dark2 cursor-pointer duration-300 hover:text-secondary hover:border-secondary'> <FaGithub/> Login with GitHub</button>
    </div>
  )
}

export default LoginWith