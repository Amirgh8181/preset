import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div>
        <div>year (one dynamic parameters can handle)</div>
        <Link href={'/'} className='block'>main</Link>
    </div>
  )
}
export default page;
