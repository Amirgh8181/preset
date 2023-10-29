import { Metadata, ResolvingMetadata } from "next";
import { getOneData } from "@/lib/getmovie";
import SingleMovieNotFound from "./not-found";
import MovieDetailsCard from "@/components/movieDetails";

// dynamic metadata
export async function generateMetadata(
    { params }: { params: { id: number } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const res = await getOneData(params.id)
    if (!res.id)
        return {
            title: "movie not found"
        }

    return {
        title: res.title
    }
}

const MovieDetails = async ({ params }: { params: { id: number } }) => {
    let request: movie = await getOneData(params.id)
    console.log(request);

    // agar id ersali dar javab ma vojood nadasht not found ra neshan bede
    if (!request.id) {
        return SingleMovieNotFound()
    }
    return (
        <>
            <MovieDetailsCard request={request} />
        </>
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
