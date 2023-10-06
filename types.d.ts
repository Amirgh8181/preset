
type movie = {
    country: string,
    genres: string[],
    id: number,
    images: string[],
    imdb_rating: string,
    poster: string,
    title: string,
    year: string
}
type fetchdatatype = {
    data: { data: movie[] },
    metadata: object
}

type routeRequest={
    title?:string
    userId?:number
    id?:number
    completed?:boolean
}