import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../layouts/Root/Root'
import NotFound from '../pages/NotFound/NotFound'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import CaterogyNews from '../pages/CaterogyNews/CaterogyNews'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                Component: Home,
                children: [
                    {
                        path: 'category/:id',
                        Component: CaterogyNews,
                        loader: ()=>fetch('/news.json')
                    }
                ]
            },
            {
                path: 'about',
                Component: About
            },

            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
])

export default Router