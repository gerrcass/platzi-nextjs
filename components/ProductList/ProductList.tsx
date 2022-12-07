import Product from '@components/Product/Product'

type ProductListProps = {
    products: TProduct[]
}

const ProductList = ({ products }: ProductListProps) => (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 container mx-auto max-w-md md:max-w-3xl py-5'>
        {
            products.map((product, index) => (
                <Product product={product} key={index} />
            ))
        }
    </div>
)
export default ProductList