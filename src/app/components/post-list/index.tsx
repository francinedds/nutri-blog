"use client";

import { useState, useMemo } from "react";
import { Post } from "@/app/lib/getPosts";
import { XLogoIcon, InstagramLogoIcon, FacebookLogoIcon } from "@phosphor-icons/react/ssr";
import SearchInput from "@/app/components/search-input";
import PostCard from "@/app/components/post-card";

export default function PostList({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  // Essa função serve pra padronizar o texto, tanto o que vem dos posts quanto o que o usuário digita, pra deixar a busca mais inteligente.
  const normalize = (s: string) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  
  // useMemo é um hook do React que evita recalcular uma operação pesada toda vez que o componente atualiza (ou seja, quando o filtro mudar), caso contrário, reaproveita o resultado anterior.
  const filteredPosts = useMemo(() => { 
    const q = normalize(query); // Cada post é verificado. Ele passa no filtro se qualquer destas condições for verdadeira. O operador || significa "ou" — então basta uma delas bater.
    return posts.filter(
      (p) => 
        normalize(p.title).includes(q) || 
        normalize(p.slug).includes(q) ||
        normalize(p.description ?? "").includes(q)
    ); 
  }, [posts, query]);

  return (
    <main className="flex flex-col items-center grow bg-[#F8F7F2] px-6 py-6 space-y-10 w-full">
      <div className="flex justify-end w-full">
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar post..."
        />
      </div>

      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-amatic font-bold text-[#9DAB91] mb-2">
          Seu progresso começa no prato!
        </h1>
        <p className="text-[#C69168] text-sm font-poppins mb-6">
          Receitas, mitos e verdades: tudo o que você precisa para comer bem.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-4 w-full">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <XLogoIcon
              size={24}
              weight="bold"
              className="text-[#C69168] hover:opacity-50 transition-opacity"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramLogoIcon
              size={24}
              weight="bold"
              className="text-[#C69168] hover:opacity-50 transition-opacity"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookLogoIcon
              size={24}
              weight="bold"
              className="text-[#C69168] hover:opacity-50 transition-opacity"
            />
          </a>
        </div>
      </section>

      <hr className="border-t border-[#9DAB91] w-[900px]" />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              description={post.description ?? ""}
              date={post.date ?? ""}
              imageUrl={post.image ?? ""}
              link={`/posts/${post.slug}`}
            />
          ))
        ) : (
          <p className="text-[#9DAB91] text-center col-span-full mt-10">
            Nenhum post encontrado.
          </p>
        )}
      </section>
    </main>
  );
}
