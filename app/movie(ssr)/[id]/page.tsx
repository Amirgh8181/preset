import Image from "next/image";
import NotFound from "../../not-found";
import { Metadata,ResolvingMetadata } from "next";


async function getData(id: number) {
    try {
        const req = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { cache: 'no-store' })
        return req.json()
    }
    catch (e) {
        console.log(e);

    }
}
export async function generateMetadata(
    { params, searchParams }: {params:{id:number},searchParams:string},
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    let res;
    const req = await fetch(`https://moviesapi.ir/api/v1/movies/${params.id}`, { cache: 'no-store' })
    .then(res=>res.json())
    .then()
    return{
        title:res.title
    }
  }

const MovieDetails = async ({ params,searchParams }:{params:{id:number},searchParams:string}) => {
    let request = await getData(params.id)
    console.log(request);
    console.log(params);
    console.log(searchParams);
    // agar id ersali dar javab ma vojood nadasht not found ra neshan bede
    if(!request.id){
        return NotFound()
    }
    
        
    return (
        <div className="container mx-auto bg-zinc-300 flex flex-row justify-between my-10 p-10 rounded-lg">
            <div className="flex flex-col">
                <div>title : {request.title}</div>
                <div>year : {request.year}</div>
                <div>Rated : {request.rated}</div>
                <div>runtime : {request.runtime}</div>
                <div>actor : {request.actors}</div>
            </div>
            <div><Image width={200} height={200} src={request.poster} alt="movie picture" className="rounded-lg"/></div>
        </div>
    )
}

export default MovieDetails