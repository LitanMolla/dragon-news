import React, { Suspense, use } from 'react'
import CategoryMenu from '../CategoryMenu/CategoryMenu';
const menuPromise = fetch('/categories.json').then(res => res.json())
const AsideLeft = () => {
    const categories = use(menuPromise);
    return (
        <>
            <ul className='space-y-2'>
                <Suspense>
                    {categories.map(category => <li key={category.id}><CategoryMenu category={category} /></li>)}
                </Suspense>
            </ul>
        </>
    )
}

export default AsideLeft