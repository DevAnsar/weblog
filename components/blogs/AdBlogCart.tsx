import { useState, useEffect } from "react";
import Image from "../containers/Image";
import Link from "next/link";
import type { PostInterface } from "../../types";

const BlogCart = ({ post_id }: { post_id: number }) => {
  const [post, setPost] = useState<PostInterface | undefined>(undefined);

  useEffect(() => {
    console.log(post_id);
    fetch(`http://localhost:8000/api/v1/posts/data/${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.post);
      });
  }, []);
  if (post === undefined) return null;
  return (
    <div className="flex gap-5 p-3 rounded-3xl border mt-5 hover:shadow-md transition duration-200">
      <Link href={`/blogs/${post.slug}`}>
        <a>
          <div className="rounded-xl md:rounded-3xl overflow-hidden w-20 h-20 md:h-28 md:w-32 lg:h-28 lg:w-40">
            <Image src={post.image_url} />
          </div>
        </a>
      </Link>
      <div className="flex flex-col justify-start w-full">
        <h1 className="font-bold text-xs md:text-lg text-gray-900 leading-relaxed">
          مطالعه بیشتر
        </h1>
        <h1 className="font-bold text-sm md:text-lg text-gray-700 leading-relaxed md:mt-4">
          {post.title}
        </h1>
        <span className="font-bold text-sm md:text-base text-slate-400 md:mt-2 leading-relaxed">
          {post.excerpt}
        </span>
      </div>
    </div>
  );
};
export default BlogCart;
