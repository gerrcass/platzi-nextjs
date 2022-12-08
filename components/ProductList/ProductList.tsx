import Product from '@components/Product/Product'

type ProductListProps = {
    products: TProduct[]
}

const ProductList = ({ products }: ProductListProps) => (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 container mx-auto max-w-sm md:max-w-3xl py-5 -mt-8'>
        {
            products.map((product, index) => (
                <div className='mx-auto'>
                    <Product product={product} key={index} />
                </div>
            ))
        }
    </div>
)
export default ProductList