import /* React, */ { useState, useEffect } from 'react'
import Link from 'next/link'

const Home = () => {
    const [productList, setProductList] = useState<TProduct[]>([])

    useEffect(() => {
        window
            .fetch('/api/avo')
            .then((response) => response.json())
            .then(({ data }) => {
                setProductList(data)
            })
    }, [])

    return (
        <div>
            <h1>Home</h1>
            {productList.map((product) => (
                <div key={product.id}>
                    <Link href={`product/${product.id}`}>{product.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Home