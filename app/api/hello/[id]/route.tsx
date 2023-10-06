import { NextResponse } from "next/server"
const url: string = process.env.DATA_SOURCE_URL as string
type props={
    params:{
        id:string
    }
}
export async function GET(request:Request,{params}:props) {
    //const id =request.url.slice(request.url.lastIndexOf('/')+1)
    const res = await fetch(`${url}/movies?page=${params.id}`)
    const todos = await res.json()
    return NextResponse.json(todos)
}