import Image from "next/image";
import NotFound from "@/app/not-found";
import { Metadata, ResolvingMetadata } from "next";
import { getOneData } from "@/lib/getmovie";
import { getData } from "@/lib/getallmovie";
import SingleMovieNotFound from "./not-found";


// dynamic metadata
export async function generateMetadata(
    { params, searchParams }: { params: { id: number }, searchParams: string },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const res = await getOneData(params.id)
    if(!res.id)
        return{
            title:"movie not found"
        }
    
    return {
        title: res.title
    }
}

const MovieDetails = async ({ params, searchParams }: { params: { id: number }, searchParams: string }) => {
    let request = await getOneData(params.id)
    // agar id ersali dar javab ma vojood nadasht not found ra neshan bede
    if (!request.id) {
        return SingleMovieNotFound()
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
            <div><Image width={200} height={200} src={request.poster} alt="movie picture" className="rounded-lg" /></div>
        </div>
    )
}

export default MovieDetails

// getStaticPath
// export async function generateStaticParams() {
//     const res:movie[] = await getData()
//     return res.map(mov => ({
//         id: mov.id.toString()
//     })

//     )
// }
