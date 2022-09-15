import ScalableImage from "../containers/Image/ScalableImage";
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
    <div className="flex flex-col h-full">
      <div className="flex w-full md:flex-col gap-5 h-full">
        <div className="rounded-3xl overflow-hidden w-1/3 md:w-full md:h-48 lg:h-52">
          <Link href={`/blogs/${post.slug}`}>
            <a>
              <ScalableImage src={post.image_url} />
            </a>
          </Link>
        </div>
        <div className="flex flex-col justify-between w-2/3 md:w-full lg:mt-3 gap-1 grow">
          <Link href={`/blogs/${post.slug}`}>
            <a>
              <h1 className="font-bold text-sm lg:text-xl text-gray-900 leading-relaxed">
                {post.title}
              </h1>
              <span className="font-bold text-xs lg:text-sm text-slate-500 lg:mt-3 leading-[1px]">
                {post.excerpt}
              </span>
            </a>
          </Link>
          {!withoutuser && (
            <WriterImage user={post.user} date={post.date_formatted} />
          )}
        </div>
      </div>
    </div>
  );
};
export default BlogCart;
