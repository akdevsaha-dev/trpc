import { appRouter } from "@/server/trpc/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export async function POST(req: Request) {
    return fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: () => ({}),
    })
}