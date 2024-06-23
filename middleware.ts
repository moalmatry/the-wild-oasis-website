// import { NextResponse } from "next/server";

// export function middleware(request: Response) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

// export const config = {
//   matcher: ["/account", "/cabins"],
// };

import { auth } from "@/app/_lib/authentication/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
