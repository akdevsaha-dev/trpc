import { procedure, router } from "../trpc";

export const postRouter = router({
    getPosts: procedure.query(() => {
        return [
            { id: '1', title: 'hi this is title one' },
            { id: '2', title: 'hi this is title two' },
        ]
    })
})