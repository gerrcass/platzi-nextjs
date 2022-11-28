import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const [item, setItem] = useState<TProduct>()
    const { query: { id } } = useRouter()

    useEffect(() => {
        id && window
            .fetch(`/api/avo/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setItem(data)
            })
            .catch(err => console.error(err.message))
    }, [id])

    return (
        <section>
            <h1>Product Page: {id} </h1>
            <h3>{item?.name}</h3>
            <p>{item?.attributes.description}</p>
        </section>

    )
}

export default ProductItem