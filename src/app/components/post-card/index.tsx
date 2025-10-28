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
    <div>
      <Link
        href={link}
        className="block border border-[#9DAB91] rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-[#F8F7F2]"
      >
        {imageUrl && (
          <div className="relative w-full h-40">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="p-4 flex flex-col space-y-2">
          {date && <span className="text-xs text-gray-500">{date}</span>}
          <h2 className="text-sm font-semibold text-gray-800">
            {title}
          </h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </Link>
    </div>
  );
}
