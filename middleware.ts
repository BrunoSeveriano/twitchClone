import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
