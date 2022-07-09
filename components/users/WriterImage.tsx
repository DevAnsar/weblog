import Image from "next/image";
import { ImageLoader } from "../../utils/helper";

const WriterImage = ()=>{
    return(
        <div className="flex items-center mt-3">
        <div className="w-10 h-10 rounded-md overflow-hidden">
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
        <div className="flex flex-col pr-3">
          <span className="text-gray-700 text-sm">
            توسط: انصار میرزایی
          </span>
          <span className="text-gray-500 text-xs">6 روز پیش</span>
        </div>
      </div>
    )
}
export default WriterImage;