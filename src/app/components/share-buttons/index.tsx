"use client";

import { usePathname } from "next/navigation";
import {
  FacebookLogoIcon,
  TwitterLogoIcon,
  WhatsappLogoIcon,
  LinkSimpleHorizontalIcon,
} from "@phosphor-icons/react/ssr";
import { useState } from "react";

export default function ShareBox() {
  const pathname = usePathname();
  const baseUrl = "https://nutri-blog.vercel.app";
  const shareUrl = `${baseUrl}${pathname}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="hidden lg:flex flex-col items-center gap-4 p-4 rounded-xl border border-[#9DAB91] bg-[#FAF9F6] shadow-sm text-[#9DAB91] fixed right-10 top-1/3">
      <p className="text-sm font-poppins text-[#9DAB91]">Share</p>

      {/* Icons */}
      <div className="flex flex-col gap-3 items-center">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookLogoIcon
            size={24}
            weight="bold"
            className="hover:opacity-60 transition-opacity"
          />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
        >
          <TwitterLogoIcon
            size={24}
            weight="bold"
            className="hover:opacity-60 transition-opacity"
          />
        </a>

        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            shareUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <WhatsappLogoIcon
            size={24}
            weight="fill"
            className="hover:opacity-60 transition-opacity"
          />
        </a>

        <button
          onClick={handleCopy}
          className="hover:opacity-60 transition-opacity"
          aria-label="Copiar link"
        >
          <LinkSimpleHorizontalIcon size={24} weight="bold" />
        </button>
      </div>

      {copied && (
        <span className="text-xs text-[#9DAB91] font-poppins mt-2">
          Copiado!
        </span>
      )}
    </aside>
  );
}
