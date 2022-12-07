import React, { PropsWithChildren } from 'react'
import Header from '@components/Header/Header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className="flex-1">
                <Header />
                {children}
            </div>
            <footer className='flex justify-center items-center bg-green-800 py-4'>
                <small className='text-white font-light'>Avocado project by @gerrcass</small>
            </footer>
        </div >
    )
}

export default Layout