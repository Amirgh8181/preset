"use client"
import { useEffect, useState } from 'react'
import { getData } from '@/lib/getallmovie'
import Link from 'next/link'
import Image from 'next/image'



const FetchDataCsr = () => {
    const [response, setResponse] = useState<movie[]>([])
    useEffect(() => {
        res()
    }, [])

    const res = async () => {
        let result: movie[] = await getData()
        setResponse(result)
    }

    return (
        <div className="flex flex-wrap justify-center gap-8 my-16">
            {
                response.map(item =>
                    <Link href={`/movie(ssr)/${item.id}?AMIR=22`} key={item.id} className="group flex flex-col justify-center items-center w-[14rem] h-[27rem] border border-blue-500 rounded-xl space-y-4">
                        <Image width={200} height={240} alt={item.title} src={item.poster} className="group-hover:scale-110 object-cover rounded-xl" />
                        <h3 className="text-center">{item.title}</h3>
                        <div className="flex justify-around w-full">
                            <div className="bg-gray-400 rounded-xl w-16 h-8 flex justify-center items-center">{item.year}</div>
                            <div title={item.country} className="bg-gray-400 rounded-xl text-sm w-16  flex justify-center items-center overflow-hidden whitespace-nowrap">{item.country}</div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default FetchDataCsr;