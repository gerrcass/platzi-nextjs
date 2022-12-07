import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'

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
            <ProductList products={productList} />
        </Layout>
    )
}

export default Home