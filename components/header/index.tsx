import Link from 'next/link'
import React from 'react'
import Search from "@/components/search"

const Header = () => {
    return (
        <div className='bg-zinc-800 p-8'>
            <div className='flex justify-between'>
                <h1 className='text-4xl text-white hover:text-yellow-300 transition-all duration-300'><Link href={'/'}>MovieSite</Link></h1>
                <Search />
            </div>
        </div>
    )
}

export default Header