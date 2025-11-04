import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  description: string;
  date?: string;
  imageUrl?: string;
  link?: string;
}

export default function PostCard({
  title,
  description,
  date,
  imageUrl,
  link = "#",
}: PostCardProps) {
  return (
    <div className="h-[380px]">
      <Link
        href={link}
        className="block border border-[#9DAB91] rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-[#F8F7F2] h-full"
      >
        {imageUrl && (
          <div className="relative w-full h-40">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover p-3 rounded-2xl"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="p-4 flex flex-col space-y-2 h-[calc(100%-10rem)]">
          <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 text-justify grow overflow-hidden text-ellipsis">
            {description}
          </p>
          {date && <span className="flex justify-end text-xs">{date}</span>}
        </div>
      </Link>
    </div>
  );
}
