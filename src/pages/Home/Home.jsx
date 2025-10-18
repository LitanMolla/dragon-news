import React, { useEffect } from 'react'
import Container from '../../components/Container/Container'
import AsideLeft from '../../components/AsideLeft/AsideLeft'
import { Outlet, useLocation, useNavigate } from 'react-router'
import AsideRight from '../../components/AsideRight/AsideRight'

const Home = () => {
    const loaction = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (loaction.pathname === '/') {
            navigate('/category/0')
        }
    },[loaction])
    return (
        <>
            <Container>
                <div className="flex gap-6 justify-between">
                    <aside className="w-3/12">
                        <h4 className='text-xl text-dark2 font-semibold mb-3'>All Category</h4>
                        <AsideLeft />
                    </aside>
                    <div className="w-6/12">
                        <Outlet />
                    </div>
                    <aside className="w-3/12">
                        <AsideRight/>
                    </aside>
                </div>
            </Container>
        </>
    )
}

export default Home