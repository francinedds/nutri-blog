import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  image: string;
  link?: string;
  content: string;
  author?: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const slug = fileName.replace(/\.md$/, "");

    return {
      slug,
      title: data.title ?? "Sem título",
      description: data.description ?? "",
      date: data.date ?? "",
      image: data.image ?? "",
      link: data.link ?? "",
      author: data.author ?? "",
      content,
      
    };
  });
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "Sem título",
    description: data.description ?? "",
    date: data.date ?? "",
    image: data.image ?? "",
    link: data.link ?? "",
    author: data.author ?? "",
    content,
  };
}

