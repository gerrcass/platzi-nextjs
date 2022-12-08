import React from 'react'
import Layout from '@components/Layout/Layout'
import Product from '@components/Product/Product'
import useShop from '@store/Cart'

const Cart = () => {
    const { items, total, count } = useShop()
    return (
        <Layout>
            <div className='container mx-auto max-w-sm md:max-w-3xl py-5 text-center'>
                <h2 className='font-bold text-2xl'>Your cart total is ${total.toFixed(2)}</h2>
                <h3 className='font-semibold text-xl'>Items in cart: {count}</h3>
                <div className='flex justify-center md:justify-between flex-wrap'>
                    {
                        items.map((item, idx) =>
                            <div className='max-w-xs' key={idx}>
                                <Product product={item} />
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout >
    )
}

export default Cart