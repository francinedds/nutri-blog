import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#9DAB91] text-white">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.svg"
          alt="NutriViva logo"
          width={100}
          height={100}
          priority />
      </Link>
    </header>
  );
}