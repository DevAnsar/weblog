import Image from "../containers/Image";
import WriterImage from "../users/WriterImage";
import type { PostInterface } from "../../types";

const BigBlogCart = ({ post }: { post: PostInterface }) => {
  return (
    <div className="grid lg:grid-cols-5 gap-x-5">
      <div className="col-span-1 lg:col-span-2">
        <div className="rounded-2xl overflow-hidden w-full h-60">
          <Image src={post.image_url} />
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3 flex flex-col justify-center w-full">
        <h1 className="font-bold text-2xl text-gray-900 leading-loose">
          {post.title}
        </h1>
        <span className="font-bold text-base text-slate-400 mt-3 leading-loose">
          {post.excerpt}
        </span>
        <WriterImage name={post.user.name} date={post.date_formatted} />
      </div>
    </div>
  );
};
export default BigBlogCart;
