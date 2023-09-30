"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'



const FetchDataCsr = () => {
    const [response, setResponse] = useState<movie[]>([])
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        try {
            const req: fetchdatatype = await axios.get("https://moviesapi.ir/api/v1/movies?page={page}")
            setResponse(req.data.data)
        }
        catch(e) {
            throw new Error('faild to fetch data')
        }

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