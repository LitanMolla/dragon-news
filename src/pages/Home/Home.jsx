import React from 'react'
import Container from '../../components/Container/Container'
import AsideLeft from '../../components/AsideLeft/AsideLeft'
import { Navigate, Outlet } from 'react-router'

const Home = () => {
    return (
        <>
            <Navigate to='/category/0' />
            <Container>
                <div className="flex gap-6 justify-between">
                    <aside className="w-3/12">
                        <h4 className='text-xl text-dark2 font-semibold mb-3'>All Category</h4>
                        <AsideLeft/>
                    </aside>
                    <div className="w-6/12">
                        <Outlet/>
                    </div>
                    <div className="w-3/12">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae libero rem dolore quos fugit quod quis natus error dolor ducimus ad rerum vel, tempore alias reiciendis ullam dignissimos vero similique molestiae consequuntur. Officiis ab quasi repudiandae similique, incidunt eius minima? Fugit maiores quos dolores ea provident eum facere quas optio.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home