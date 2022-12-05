
import useShop from '@store/Cart'
import { useEffect } from 'react'
import Product from '@components/Product/Product'

type ProductListProps = {
    products: TProduct[]
}

const ProductList = ({ products }: ProductListProps) => {
    const { items, total, count, addToCart, removeFromCart } = useShop()

    useEffect(() => {
        console.log('items>> ', items)
        console.log('count>> ', count)
        console.log('total>> ', total)
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 container mx-auto max-w-md md:max-w-3xl py-5'>
                {
                    products.map((product) => (
                        <div key={product.id}>
                            <Product product={product} />
                        </div>
                    ))
                }
            </div>
            <button onClick={() => {
                //console.log(items)
                addToCart(products[0], 5)
                //console.log(items)
            }}>DALE</button>
        </>
    )
}

export default ProductList