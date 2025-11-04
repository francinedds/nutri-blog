import { getAllPosts } from "@/app/lib/getPosts";
import PostList from "./components/post-list";

export default function Home() {

  const posts = getAllPosts();

  return (
    <PostList posts={posts}/>
  );
}
