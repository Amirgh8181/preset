import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request:Request){

    console.log('middleware');
    
    const regexp=new RegExp('/api/*')
    if(regexp.test(request.url)){}

    console.log(request.method);
    console.log(request.url);
    
    const origin=request.headers.get('origin')
    console.log(`origin : ${origin}`);
    NextResponse.next()
    
}
export const config = {
    matcher: '/api/:path*',
  }