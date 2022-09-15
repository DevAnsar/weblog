import Image from "../containers/Image/CoverImage";
import userIcon from "./../../public/images/person-1.jpeg";
const ProfileImage = ({
  name,
  image,
}: {
  name?: string;
  image?: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-fuchsia-500">
        <Image
          alt={name}
          src={image || userIcon}
        />
      </div>
    </div>
  );
};
export default ProfileImage;
