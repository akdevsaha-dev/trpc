"use client";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const userQuery = trpc.user.getUser.useQuery({ id: "12", name: "akdev" });
  const postQuery = trpc.post.getPosts.useQuery();
  if (userQuery.isLoading || postQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (userQuery.error || postQuery.error) {
    return <div>error Loading data</div>;
  }
  return (
    <div className="h-screen text-black bg-white w-full flex items-center justify-center">
      <p>
        user: {userQuery.data?.id}, {userQuery.data?.name}{" "}
      </p>
      <ul>
        {postQuery.data?.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  );
}
