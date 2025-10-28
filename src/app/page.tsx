"use client";

import { FacebookLogo, InstagramLogo, X } from "@phosphor-icons/react";
import SearchInput from "./components/search-input";
import PostCard from "./components/post-card";

export default function Home() {
  const posts = [
    {
      title: "Comece pelo simples: 5 trocas inteligentes para uma alimentação mais saudável.",
      description: "Pequenas mudanças fazem uma grande diferença! Descubra como substituir alimentos do dia a dia por opções mais nutritivas, sem abrir mão do sabor.",
      date: "28 Oct 2025",
      imageUrl: "/images/receita1.jpg",
      link: "/posts/10-receitas-saudaveis",
    },
  ];

  return (
    <main className="flex flex-col items-center grow bg-[#F8F7F2] px-6 py-6 space-y-10 w-full">
      <div className="flex justify-end w-full">
        <SearchInput />
      </div>

      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-amatic font-bold text-[#9DAB91] mb-2">
          Seu progresso começa no prato!
        </h1>
        <p className="text-[#C69168] text-sm font-poppins mb-6">
          Receitas, mitos e verdades: tudo o que você precisa para comer bem.
        </p>

        <div className="flex justify-center items-center space-x-4 w-full">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <X
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
            <InstagramLogo
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
            <FacebookLogo
              size={24}
              weight="bold"
              className="text-[#C69168] hover:opacity-50 transition-opacity"
            />
          </a>
        </div>
      </section>

      <hr className="border-t border-[#9DAB91] w-[900px] my-4" />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
            imageUrl={post.imageUrl}
            link={post.link}
          />
        ))}
      </section>
    </main>
  );
}
