import React from 'react'
import Layout from '@components/Layout/Layout'
import useShop from '@store/Cart'
import Image from 'next/image'

const Cart = () => {
    const { items, total, count, addToCart, removeFromCart } = useShop()

    return (
        <Layout>
            <div className='container mx-auto max-w-sm md:max-w-3xl py-5 text-center'>
                <h2 className='text-xl font-medium'>Your cart total is <strong>${total.toFixed(2)}</strong></h2>
                <p className='text-sm font-medium'>{`(${count} ${count===1 ? 'item':'items'})`}</p>
                <ul>
                    {
                        items.map((product) =>
                            <li key={product.id} className='bg-gray-100 flex justify-between items-center rounded-xl hover:shadow-md hover:-translate-y-1 duration-200 overflow-hidden mt-4'>
                                <div className='flex items-center cursor-pointer'>
                                    <Image src={product.image} width={100} height={100} className='brightness-[98%]' alt='Avocado Image' />
                                    <h3 className='text-xl font-bold'>{product.name}</h3>
                                </div>
                                <div className='flex justify-center mx-4 md:mx-8'>
                                    <button type="button" onClick={() => addToCart(product, 1)} className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-full text-sm text-center inline-flex items-center dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <span className="sr-only">Add To Cart</span>
                                    </button>
                                    <input type='text' className='w-5 text-center mx-2' value={product.quantity} />
                                    <button type="button" onClick={() => removeFromCart(product, 1)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-full text-sm text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                        <span className="sr-only">Remove From Cart</span>
                                    </button>
                                </div>
                            </li>
                        )
                    }
                </ul>

            </div>
        </Layout>
    )
}

export default Cart