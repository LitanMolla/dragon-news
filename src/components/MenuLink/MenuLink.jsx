import React from 'react'
import { NavLink } from 'react-router'

const MenuLink = ({ children, to, active = 'text-dark2', inactive = 'text-dark3' }) => {
    return <NavLink to={to} className={({ isActive }) => (isActive ? active : inactive)}>{children}</NavLink>
}

export default MenuLink