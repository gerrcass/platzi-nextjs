import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ShopProvider } from '@store/Cart'
import '../styles/globals.css'

export function reportWebVitals(metric: NextWebVitalsMetric) {
    console.log(metric)
}

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ShopProvider>
            <Component {...pageProps} />
        </ShopProvider>
    )
}