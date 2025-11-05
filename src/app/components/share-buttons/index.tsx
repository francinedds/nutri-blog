"use client";

import { usePathname } from "next/navigation";
import {
  FacebookLogoIcon,
  TwitterLogoIcon,
  WhatsappLogoIcon,
  LinkSimpleHorizontalIcon,
  ShareNetworkIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react/ssr";
import { useState } from "react";

export default function ShareBox() {
  const pathname = usePathname();
  const baseUrl = "https://nutri-blog.vercel.app";
  const shareUrl = `${baseUrl}${pathname}`;

  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
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
            className="hover:opacity-60 transition-transform duration-300"
            aria-label="Copiar link"
          >
            {copied ? (
              <CheckCircleIcon
                size={24}
                weight="fill"
                className="text-[#C69168] scale-110 transition-transform duration-300"
              />
            ) : (
              <LinkSimpleHorizontalIcon
                size={24}
                weight="bold"
                className="transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </aside>

      {/* Mobile */}
      <div className="lg:hidden fixed bottom-5 right-5 flex flex-col items-end gap-2">
        {open && (
          <div className="flex flex-col items-center gap-3 mb-2 p-3 rounded-lg bg-[#FAF9F6] border border-[#9DAB91] shadow-md text-[#9DAB91]">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookLogoIcon
                size={22}
                weight="bold"
                className="hover:opacity-60"
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
                size={22}
                weight="bold"
                className="hover:opacity-60"
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
                size={22}
                weight="fill"
                className="hover:opacity-60"
              />
            </a>
            <button
              onClick={handleCopy}
              className="hover:opacity-60 transition-transform duration-300"
              aria-label="Copiar link"
            >
              {copied ? (
                <CheckCircleIcon
                  size={24}
                  weight="fill"
                  className="text-[#C69168] scale-110 transition-transform duration-300"
                />
              ) : (
                <LinkSimpleHorizontalIcon
                  size={24}
                  weight="bold"
                  className="transition-transform duration-300"
                />
              )}
            </button>
          </div>
        )}

        {/* Botão flutuante */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#9DAB91] text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-[#879a7e] transition-colors"
        >
          <ShareNetworkIcon size={26} weight="bold" />
        </button>
      </div>
    </>
  );
}
