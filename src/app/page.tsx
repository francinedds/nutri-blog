import SearchInput from "./components/search-input";
import PostCard from "./components/post-card";
import { getAllPosts } from "@/app/lib/getPosts";
import { XLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react/ssr";

export default function Home() {

  const posts = getAllPosts();

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
            <XLogo
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

      <hr className="border-t border-[#9DAB91] w-[900px]" />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
         {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}                
            description={post.description ?? ""} 
            date={post.date ?? ""}
            imageUrl={post.image ?? ""}
            link={`/posts/${post.slug}`}
          />
        ))}
      </section>
    </main>
  );
}
