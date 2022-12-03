//import React from 'react'
//import Navbar from '@components/Navbar/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="bg-accent">
            <div className="container mx-auto max-w-md md:max-w-3xl text-primary">
                <nav>
                    <menu className='flex justify-between items-center h-20'>
                        <li><Link className='flex items-center' href='/'>
                            <Image
                                src="/images/logo-avocado.png"
                                alt="Avocator logo"
                                width={50}
                                height={50}
                            />
                            <p>Mr. Avo
                            </p>
                        </Link></li>
                        <li><Link href='/about'>About</Link></li>
                    </menu>
                </nav>
            </div>
        </div>
    )
}

export default Header