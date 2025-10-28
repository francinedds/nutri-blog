import SearchInput from "./components/search-input";

export default function Home() {
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
      </section>
    </main>
  );
}
