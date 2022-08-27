import Image from "next/image";
import { ImageLoader } from "../../utils/helper";
import userIcon from "./../../public/images/person-1.jpeg";
const WriterImage = ({
  name,
  date,
  image,
}: {
  name: string;
  date: string;
  image?: string;
}) => {
  return (
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
          src={image || userIcon}
        />
      </div>
      <div className="flex flex-col pr-3">
        <span className="text-gray-700 text-sm">
          توسط:
          {name}
        </span>
        <span className="text-gray-500 text-xs">{date}</span>
      </div>
    </div>
  );
};
export default WriterImage;
