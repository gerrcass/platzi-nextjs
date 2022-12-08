import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import Link from 'next/link'
import { SERVER_URL } from '../config/index'

type YesOrNoApiResponse = {
    data: 'Yes' | 'No'
}

const apiYesOrNo = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/yes-or-no`)

        if (response.ok) {
            const { data }: YesOrNoApiResponse = await response.json()
            return data
        } else {
            throw new Error(`An error has occured: ${response.status}`);
        }
    } catch (e) {
        console.error(e);
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

const YesOrNo = ({ result: initialYesOrNo }: { result: string }) => {
    const [loading, setLoading] = useState(true)
    const [yesOrNot, setYesOrNot] = useState('')

    useEffect(() => {
        setLoading(false)
        setYesOrNot(initialYesOrNo)
    }, [])

    const buttonHandler = async () => {
        setLoading(true)
        const data = await apiYesOrNo()
        data ? setYesOrNot(data) : setYesOrNot('🤷')
        setLoading(false)
    }
    return (
        <Layout>
            <div className='container mx-auto max-w-sm md:max-w-3xl py-5 text-center flex justify-center'>

                <div className="w-60">
                    <h2 className={`${loading && 'text-gray-400'} text-green-600 text-8xl uppercase font-medium transition-all duration-150`}>{yesOrNot}</h2>
                    <button onClick={buttonHandler} className={`${loading ? 'bg-green-500' : 'bg-green-600'} hover:bg-green-700 relative w-full h-14 text-white px-6 py-2 rounded-md transition-all duration-150`}>
                        {loading ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20' aria-label="Loading..." role="status">
                            <svg className="h-8 w-8 animate-spin" viewBox="3 3 18 18">
                                <path
                                    className="fill-gray-100"
                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                <path
                                    className="fill-green-900"
                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                            </svg>
                        </div> : <span>Try again</span>}
                    </button>

                    <div className="flex justify-center items-center mt-4">
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