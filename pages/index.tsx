import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'

const Home = () => {
    const [productList, setProductList] = useState<TProduct[]>([])

    useEffect(() => {
        window
            .fetch('/api/avo')
            .then((response) => response.json())
            .then(({ data }: TAPIAvoResponse) => {
                setProductList(data)
            })
    }, [])

    return (
        <Layout>
            <ProductList products={productList} />
        </Layout>
    )
}

export default Home