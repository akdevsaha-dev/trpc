import { initTRPC } from "@trpc/server";


export const z = initTRPC.create()

export const router = z.router;
export const procedure = z.procedure;