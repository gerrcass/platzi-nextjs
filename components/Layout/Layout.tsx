import React, { PropsWithChildren } from 'react'
import Navbar from '@components/Navbar/Navbar'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}

export default Layout