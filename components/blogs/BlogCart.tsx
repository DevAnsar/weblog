import Image from "next/image";
import { ImageLoader } from "../../utils/helper";
import WriterImage from "../users/WriterImage";

const BlogCart = () => {
  return (
    <div className="flex flex-col">
      <div className="rounded-3xl overflow-hidden w-full h-52 md:h-48 lg:h-52 xl:60">
        <Image
          alt=""
          title=""
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          loader={ImageLoader}
          src="https://server.ansarmirzayi.ir/images/settings/IMG_20220316_193825_419.jpg"
        />
      </div>
      <div className="flex flex-col justify-center w-full mt-3">
        <h1 className="font-bold text-2xl text-gray-900 leading-relaxed">
          چطوری دوچرخه ی خود را برای تابستان استرالیا انتخاب کنیم؟
        </h1>
        <span className="font-bold text-base text-slate-400 mt-3 leading-relaxed">
          چطوری دوچرخه ی خود را برای تابستان استرالیا انتخاب کنیم؟ چطوری دوچرخه
          ی خود را برای تابستان استرالیا انتخاب کنیم؟
        </span>
        <WriterImage />
      </div>
    </div>
  );
};
export default BlogCart;
