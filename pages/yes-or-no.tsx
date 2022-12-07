import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import Link from 'next/link'

type YesOrNoApiResponse = {
    data: 'Yes' | 'No'
}

const apiYesOrNo = async () => {
    //const response = await fetch('https://platzi-avocado-nextjs-tau.vercel.app/api/yes-or-no')
    const response = await fetch('http://localhost:3000/api/yes-or-no')
    const { data }: YesOrNoApiResponse = await response.json()

    return {
        data
    }
}

export const getServerSideProps = async () => {
    const result = await apiYesOrNo()
    return {
        props: {
            result
        }
    }
}

const YesOrNo = ({ result }: { result: YesOrNoApiResponse }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [yesOrNot, setYesOrNot] = useState('')

    useEffect(() => {
        const { data: initialYesOrNo } = result
        setIsLoading(false)
        setYesOrNot(initialYesOrNo)
    }, [])

    const buttonHandler = async () => {
        const { data } = await apiYesOrNo()
        setYesOrNot(data)

    }
    return (
        <Layout>
            <div className='container mx-auto max-w-md md:max-w-3xl py-5 text-center flex justify-center'>
                {isLoading && <div className="">Loading...</div>}
                <div className="w-60">
                    <h2 className='text-green-600 text-8xl uppercase font-medium'>{yesOrNot}</h2>
                    <button onClick={buttonHandler} className='w-full bg-green-600 text-white px-6 py-2 rounded-md'>Try again</button>
                    <div className="flex justify-center mt-4">
                        <Link href='/' aria-label="Back to Home" className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-800">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span className='text-green-700 font-semibold'>Home</span>
                        </Link>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default YesOrNo