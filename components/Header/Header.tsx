import Link from 'next/link'
import Image from 'next/image'
import useShop from '@store/Cart'
const Header = () => {
    const { count } = useShop()
    return (
        <div className="bg-green-800 sticky top-0 z-10">
            <div className="container mx-auto max-w-md md:max-w-3xl text-primary">
                <nav>
                    <menu className='flex justify-between items-center h-20'>
                        <li><Link className='flex items-center' href='/'>
                            <Image
                                src="/images/logo-avocado.png"
                                alt="Avocator logo"
                                width={50}
                                height={50}
                                priority={true}
                            />
                            <p>Mr. Avo</p>
                        </Link></li>
                        <li><Link href='/cart'>
                            <div className='relative'>
                                <div className='absolute bottom-0 right-0 rounded-full w-4 h-4 bg-green-200 text-green-700 text-sm font-bold flex justify-center items-center'>{count}</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                        </Link></li>
                    </menu>
                </nav>
            </div>
        </div>
    )
}

export default Header