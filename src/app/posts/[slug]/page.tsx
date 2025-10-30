import { getAllPosts, getPostBySlug } from "@/app/lib/getPosts";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  console.log(params);

  return (
    <article className="prose mx-auto">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
