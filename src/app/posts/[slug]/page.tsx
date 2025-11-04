import { getAllPosts, getPostBySlug } from "@/app/lib/getPosts";
import { ArrowCircleLeftIcon } from "@phosphor-icons/react/ssr";
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
        <ArrowCircleLeftIcon size={40} className="text-[#9DAB91] hover:opacity-50 transition-opacity" />
      </Link>

      <article className="w-full max-w-[700px] mx-auto px-4 sm:px-6 space-y-4">
        <h2 className="text-center text-xl font-semibold mb-2">{post.title}</h2>
        <Image
          src={post.image}
          alt="Imagem Nutricional"
          width={200}
          height={200}
          className="w-full h-[300px] object-cover rounded-lg mb-4 mx-auto"
        />
        <p className="flex text-justify font-semibold mb-4">{post.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="whitespace-pre-line" />

        <div className="flex justify-end text-sm mt-10 mb-10">
          <p><span className="font-semibold">Criado por:</span> {post.author} <span className="font-semibold">em</span> {post.date}</p>
        </div>
      </article>
    </main>
  );
}
