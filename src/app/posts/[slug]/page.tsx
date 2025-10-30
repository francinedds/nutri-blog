import { getAllPosts, getPostBySlug } from "@/app/lib/getPosts";
import { CircleArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPostBySlug((await params).slug);

  if (!post) return notFound();

  console.log(post);

  return (
    <main className="flex flex-col grow bg-[#F8F7F2] w-full">
      <Link href="/" className="p-6">
        <CircleArrowLeft size={40} className="text-[#9DAB91] hover:opacity-50 transition-opacity"/>
      </Link>

      <article className="text-center w-full max-w-xl mx-auto space-y-4">
        <h2 className="text-xl font-bold mb-4">{post.title}</h2>
        <Image
          src="/nutri-img.jpg"  
          alt="Imagem Nutricional"
          width={500}                
          height={300}               
          className="rounded-lg mb-4 mx-auto"     
        />
        <p className="mb-4">{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="whitespace-pre-line" />
      </article>
    </main>
  );
}
