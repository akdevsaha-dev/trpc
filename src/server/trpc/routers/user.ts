import { procedure, router } from "../trpc";
import { z } from "zod"
export const userRouter = router({
    getUser: procedure
        .input(
            z.object({
                id: z.string(),
                name: z.string()
            })
        )
        .query(({ input }) => {
            return { id: input.id, name: input.name }
        })
})