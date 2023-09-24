import Image from "next/image"
import Link from "next/link"
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

async function getData() {
    try {
        const req = await fetch("https://moviesapi.ir/api/v1/movies?page={page}", { cache: 'no-store' })
        return req.json()
    }
    catch(e){
        console.log(e);
        
    }
}

//SSR
//fetch("https://moviesapi.ir/api/v1/movies?page={page}", { cache: 'no-store' })
//SSG
//fetch("https://moviesapi.ir/api/v1/movies?page={page}") && fetch("https://moviesapi.ir/api/v1/movies?page={page}", { cache: 'force-cache' })
//ISR
//fetch("https://moviesapi.ir/api/v1/movies?page={page}", { next:{revalidate:60(second)} })

const SsrRequest = async () => {
    let request = await getData()
    let result:movie[]=request.data    
    return (
        <div className="flex flex-wrap gap-8">
            {
                result?.map(item=>
                        <Link href={`/movie(ssr)/${item.id}?AMIR=22`} key={item.id} className="groupe flex flex-col justify-center items-center w-[14rem] h-[27rem] border border-blue-500 rounded-xl space-y-4">
                            <Image width={200} height={240} alt={item.title} src={item.poster} className="groupe-hover:scale-110 object-cover rounded-xl"/>
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

export default SsrRequest