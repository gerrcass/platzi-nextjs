//import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <menu className='flex justify-between'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </menu>
        </nav>

    )
}

export default Navbar