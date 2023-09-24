"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'

interface movie {
    country: string,
    genres: string[],
    id: number,
    images: string[],
    imdb_rating: string,
    poster: string,
    title: string,
    year: string
}
interface fetchdatatype {
    data: { data: movie[] },
    metadata: object
}

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
            console.log(e);
            
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