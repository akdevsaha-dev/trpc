import { postRouter } from "./routers/post";
import { userRouter } from "./routers/user";
import { router } from "./trpc";


export const appRouter = router({
    user: userRouter,
    post: postRouter
})
export type AppRouter = typeof appRouter
