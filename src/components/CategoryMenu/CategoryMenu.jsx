import React from 'react'
import { NavLink } from 'react-router'

const CategoryMenu = ({ category }) => {
    const { name, id } = category;
    return <NavLink to={`category/${id}`} className={({ isActive }) => (isActive ? 'px-5 py-2 bg-dark6 block text-dark2 rounded-md ' : 'px-5 py-2  block text-dark3 rounded-md border border-dark7')}>{name}</NavLink>
}

export default CategoryMenu