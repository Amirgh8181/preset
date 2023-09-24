import Image from "next/image";
import NotFound from "../../not-found";

async function getData(id: number) {
    try {
        const req = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { cache: 'no-store' })
        return req.json()
    }
    catch (e) {
        console.log(e);

    }
}

const MovieDetails = async ({ params,searchParams }:any) => {
    let request = await getData(params.id)
    console.log(request);
    console.log(params);
    console.log(searchParams);
    // agar id ersali dar javab ma vojood nadasht not found ra neshan bede
    if(!request.id){
        return NotFound()
    }
    
        
    return (
        <section className="container mx-auto bg-zinc-300 flex flex-row justify-between my-10 p-10 rounded-lg">
            <div className="flex flex-col">
                <div>title : {request.title}</div>
                <div>year : {request.year}</div>
                <div>Rated : {request.rated}</div>
                <div>runtime : {request.runtime}</div>
                <div>actor : {request.actors}</div>
            </div>
            <div><Image width={300} height={300} src={request.poster} alt="movie picture" className="rounded-lg"/></div>
        </section>
    )
}

export default MovieDetails