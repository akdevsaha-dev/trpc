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
        .query(({ input }): { id: string; name: string } => {
            return { id: input.id, name: input.name }
        })
})