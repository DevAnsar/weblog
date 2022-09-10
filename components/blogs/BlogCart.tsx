import Image from "../containers/Image";
import WriterImage from "../users/WriterImage";
import Link from "next/link";
import type { GetPost } from "../../types";

const BlogCart = ({
  post,
  withoutuser = false,
}: {
  post: GetPost;
  withoutuser?: Boolean;
}) => {
  return (
    <div className="flex flex-col">
      <Link href={`/blogs/${post.slug}`}>
        <a className="flex w-full md:flex-col gap-5">
          <div className="rounded-3xl overflow-hidden w-1/3 md:w-full md:h-48 lg:h-52">
            <Image src={post.image_url} />
          </div>
          <div className="flex flex-col justify-center w-2/3 md:w-full lg:mt-3 gap-1">
            <h1 className="font-bold text-sm lg:text-2xl text-gray-900 leading-relaxed">
              {post.title}
            </h1>
            <span className="font-bold text-xs lg:text-base text-slate-400 lg:mt-3 leading-relaxed">
              {post.excerpt}
            </span>
            {!withoutuser && (
              <WriterImage
                user={post.user}
                date={post.date_formatted}
              />
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};
export default BlogCart;
