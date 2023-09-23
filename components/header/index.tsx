import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-blue-400 p-8'>
        <div className='flex justify-between text-white'>
            <h1 className='text-4xl'>Header</h1>
            <ul className='flex space-x-4'>
                <li className='flex justify-center items-center text-lg w-24 h-12 bg-green-700 rounded-xl'>
                    <Link href={'/about'}>about</Link>
                </li>
                <li className='flex justify-center items-center text-lg w-24 h-12 bg-green-700 rounded-xl'>
                    <Link href={'/hell/amir/amir'}>hell(many)</Link>
                </li>
                <li className='flex justify-center items-center text-lg w-24 h-12 bg-green-700 rounded-xl'>
                    <Link href={'/year/amir'}>year(one)</Link>
                </li>
                <li className='flex justify-center items-center text-lg w-24 h-12 bg-green-700 rounded-xl'>
                    <Link href={'/movie'}>movie</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header