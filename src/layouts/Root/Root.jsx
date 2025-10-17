import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className='flex-1'>
                <div className="flex gap-6">
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default Root