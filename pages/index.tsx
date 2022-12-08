import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
import Link from 'next/link'
import AvoLogo from '@components/Logo/Logo'
import { SERVER_URL } from '../config/index'

export const getServerSideProps = async () => {
    const response = await fetch(`${SERVER_URL}/api/avo`)
    const { data: productList }: TAPIAvoResponse = await response.json()

    return {
        props: {
            productList
        }
    }

}

const Home = ({ productList }: { productList: TProduct[] }) => {
    return (
        <Layout>
            <div className='text-center text-base pt-10'>
                <div className="flex justify-center items-center text-3xl font-light mb-4 antialiased">
                    <span>Avo</span>
                    <AvoLogo className='w-20 h-20' />
                    <span>Store</span>

                </div>
                <Link href='/yes-or-no' className='text-blue-800 hover:text-blue-700'><span className='text-sm'>Should I eat an avocado today?</span></Link>
            </div>
            <ProductList products={productList} />
        </Layout>
    )
}

export default Home