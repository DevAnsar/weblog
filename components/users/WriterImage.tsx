import Link from "next/link";
import Image from "next/image";
import type { UserInterface } from "../../types";
import { ImageLoader } from "../../utils/helper";
import userIcon from "./../../public/images/person-1.jpeg";
const WriterImage = ({ user, date }: { user: UserInterface; date: string }) => {
  return (
    <Link href={`/user/${user?.username}`}>
    <a>
      <div className="flex items-center">
        <div className="w-7 h-full md:w-10 md:h-10 rounded-md overflow-hidden">
          <Image
            alt=""
            title=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            loader={ImageLoader}
            src={user?.image_url || userIcon}
          />
        </div>
        <div className="flex flex-col pr-3">
          <span className="text-gray-800 text-xs md:text-sm">
            توسط:
            {user?.name}
          </span>
          <span className="text-gray-500 text-xs">{date}</span>
        </div>
      </div>
      </a>
    </Link>
  );
};
export default WriterImage;
