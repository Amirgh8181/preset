"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getData } from '@/lib/getallmovie'



const FetchDataCsr = () => {
    const [response, setResponse] = useState<movie[]>([])
    useEffect(() => {
        res()
    }, [])

    const res=async()=>{
        let result:movie[]=await getData()
        setResponse(result)
    }

    return (
        <div>
            {
                response.map(res=>
                    <div key={res.id}>{res.title}</div>
                )
            }
        </div>
    )
}

export default FetchDataCsr;