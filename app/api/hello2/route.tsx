import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export async function GET(request:Request){

    const origin = request.headers.get('origin')
    const remaining =await limiter.removeTokens(1)
    if (remaining<0){
        return new NextResponse("",{
            status:444,
            statusText:"many request error",
            headers:{
                'Access-Control-Allow-Origin':origin||'*',
                'Content-Type':'text/plain'
            }
        })

    }
   return new NextResponse("message hello world")
}