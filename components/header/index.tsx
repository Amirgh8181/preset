import Link from 'next/link'
import React from 'react'
const Header = () => {
    return (
        <div className='bg-blue-400 p-8'>
            <div className='flex justify-between'>
                <h1 className='text-4xl text-white hover:text-yellow-300 transition-all duration-300'><Link href={'/'}>AmirMovie</Link></h1>
                <nav><ul className='flex space-x-4 text-blue-400'>
                    <li className="flex justify-center items-center text-lg w-24 h-12 bg-white hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-xl">
                        <Link href={'/about'}>about</Link>
                    </li>
                    <li className='flex justify-center items-center text-lg w-24 h-12 bg-white hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-xl'>
                        <Link href={'/hell/amir/amir'}>hell(many)</Link>
                    </li>
                    <li className='flex justify-center items-center text-lg w-24 h-12 bg-white hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-xl'>
                        <Link href={'/year/amir'}>year(one)</Link>
                    </li>
                    <li className='flex justify-center items-center text-lg w-24 h-12 bg-white hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-xl'>
                        <Link href={'/movie(csr)'}>movie(csr)</Link>
                    </li>
                    <li className='flex justify-center items-center text-lg w-24 h-12 bg-white hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-xl'>
                        <Link href={'/movie(ssr)'}>movie(ssr)</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header