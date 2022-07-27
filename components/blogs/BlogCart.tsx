import Image from "../containers/Image";
import WriterImage from "../users/WriterImage";
import Link from "next/link";
import type { PostInterface } from "../../types";

const BlogCart = ({ post }: { post: PostInterface }) => {
  return (
    <div className="flex flex-col">
      <Link href={`/blogs/${post.slug}`}>
        <a>
          <div className="rounded-3xl overflow-hidden w-full h-52 md:h-48 lg:h-52 xl:60">
            <Image src={post.image_url} />
          </div>
          <div className="flex flex-col justify-center w-full mt-3">
            <h1 className="font-bold text-2xl text-gray-900 leading-relaxed">
              {post.title}
            </h1>
            <span className="font-bold text-base text-slate-400 mt-3 leading-relaxed">
              {post.excerpt}
            </span>
          </div>
        </a>
      </Link>
      <WriterImage name={post.user.name} date={post.date_formatted} />
    </div>
  );
};
export default BlogCart;
