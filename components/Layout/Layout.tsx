import React, { PropsWithChildren } from 'react'
import Header from '@components/Header/Header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}

export default Layout