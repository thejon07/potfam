import { NextResponse } from 'next/server'
import {getToken} from "next-auth/jwt"


export async function middleware(request) {
  const session = await getToken(
    {
      req:request,
      secret:process.env.AUTH_SECRET,
      cookieName: "__Secure-authjs.session-token"
    }
  );
  const path = request.nextUrl.pathname;
  
  const publicpath = path == "/signup"
  const privatepath = path == "/cart"

  if(privatepath && !session){
    return NextResponse.redirect(new URL("/option",request.url))
  }

  if(publicpath && session){
    return NextResponse.redirect(new URL("/",request.url))
  }
 
}
 
export const config = {
  matcher:["/cart","/signup"],
}