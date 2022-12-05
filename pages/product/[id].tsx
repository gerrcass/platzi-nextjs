import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/Layout/Layout'
import Image from 'next/image'
import useShop from '@store/Cart'

const ProductItem = () => {
    const [item, setItem] = useState<TProduct>()
    const [qty, setQty] = useState<number>(1)
    const { query: { id } } = useRouter()
    const { addToCart } = useShop()

    useEffect(() => {
        id && window
            .fetch(`/api/avo/${id}`)
            .then((response) => response.json())
            .then((data: TProduct) => {
                setItem(data)
            })
            .catch(err => console.error(err.message))
    }, [id])
    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        //event.preventDefault();
        if (item) {
            addToCart(item, qty)
        }
        console.log('item: ', item, 'qty: ', qty)
    }

    const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setQty(Number(event.target.value));
    };

    const Component1 = () => (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container py-24">
                <div className="mx-auto flex">
                    {item?.image && <Image alt="Avocado Image" priority={true} className="lg:w-1/3 w-72 h-72 object-cover object-center" width={333} height={333} src={item?.image} />}
                    <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{item?.attributes.shape}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item?.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>

                        </div>
                        <p className="leading-relaxed">{item?.attributes.description}</p>
                        <div className="flex mt-1 items-center pb-5 border-b-2 border-gray-200 mb-5" />
                        <div className="flex justify-between items-center">
                            <span className="title-font font-medium text-2xl text-gray-900">${item?.price}</span>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Qty</span>
                                <div className="relative mr-3 ">
                                    {/* <select id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select> */}
                                    <select onChange={selectHandler} id="quantity" className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">

                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                                <button onClick={buttonHandler} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


    return (

        <Layout>
            <div className="container mx-auto max-w-md md:max-w-3xl">
                <Component1 />
            </div>
        </Layout>


    )
}

export default ProductItem