import React from 'react'
import Container from '../../components/Container/Container'
import logo from '../../assets/logo.png'
import { format } from 'date-fns'
import Marquee from 'react-fast-marquee'
import MenuLink from '../../components/MenuLink/MenuLink'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router'
const Navbar = () => {
    return (
        <>
            <nav className="my-10">
                <Container>
                    <div className="text-center space-y-3">
                        <img className='mx-auto max-w-100' src={logo} alt="Logo" />
                        <p className='text-dark3'>Journalism Without Fear or Favour</p>
                        <p className='text-dark3'>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
                        <div className="bg-dark7 p-3 flex gap-2 items-center">
                            <p className='text-white bg-secondary py-2 px-5'>Latest</p>
                            <Marquee className='flex gap-5 items-center' pauseOnHover={true}>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quaerat?</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quaerat?</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, quaerat?</p>
                            </Marquee>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className=""></div>
                            <ul className='flex gap-5'>
                                <li><MenuLink to='/category/0'>Home</MenuLink></li>
                                <li><MenuLink to='/about'>About</MenuLink></li>
                                <li><MenuLink to='/career'>Career</MenuLink></li>
                            </ul>
                            <div className="flex items-center gap-3">
                                <FaUser className='text-3xl' />
                                <Link to='/login' className='text-white bg-dark2 px-5 py-2 inline-block duration-300 hover:bg-dark3'>Login</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Navbar