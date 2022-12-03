import { AppProps } from 'next/app'
import { ShopProvider } from '@store/Cart'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ShopProvider>
            <Component {...pageProps} />
        </ShopProvider>
    )
}