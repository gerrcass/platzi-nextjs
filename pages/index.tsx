import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
import Link from 'next/link'

export const getServerSideProps = async () => {
    const response = await fetch('https://platzi-avocado-nextjs-tau.vercel.app/api/avo')
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
            <div className='text-center text-base py-10'>
                <Link href='/yes-or-no' className='text-blue-800 hover:text-blue-700'>¿Deberia comer un avo hoy?</Link>
            </div>
            <ProductList products={productList} />
        </Layout>
    )
}

export default Home