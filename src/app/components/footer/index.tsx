import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#9DAB91] py-6">
      <div className="flex items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="NutriViva logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          <Link href="/terms" className="text-sm text-white hover:underline">
            Termos de Uso
          </Link>
          <Link href="/privacy" className="text-sm text-white hover:underline">
            Política de Privacidade
          </Link>
          <span className="text-sm text-white">Direitos Reservados</span>
        </div>
      </div>
    </footer>
  );
}
