import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='block'>hell (many dynamic parameters can be handle)</div>
            <Link href={'/'} className='block'>main</Link>

        </div>
    )
}
export default page;
