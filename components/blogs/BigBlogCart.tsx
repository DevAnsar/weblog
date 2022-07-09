import Image from "next/image";
import { ImageLoader } from "../../utils/helper";
import WriterImage from "../users/WriterImage";

const BigBlogCart = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-x-5">
      <div className="col-span-1 lg:col-span-2">
        <div className="rounded-2xl overflow-hidden w-full h-60">
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
      </div>

      <div className="col-span-1 lg:col-span-3 flex flex-col justify-center w-full">
        <h1 className="font-bold text-2xl text-gray-900 leading-loose">
          چطوری دوچرخه ی خود را برای تابستان استرالیا انتخاب کنیم؟
        </h1>
        <span className="font-bold text-base text-slate-400 mt-3 leading-loose">
          چطوری دوچرخه ی خود را برای تابستان استرالیا انتخاب کنیم؟ چطوری دوچرخه
          ی خود را برای تابستان استرالیا انتخاب کنیم؟
        </span>
        <WriterImage />
      </div>
    </div>
  );
};
export default BigBlogCart;
