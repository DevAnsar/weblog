import { FC } from "react";
import Image, { ImageProps } from "next/image";
import { ImageLoader } from "../../utils/helper";

const CoverImage: FC<ImageProps> = ({ src, alt }) => {
  return (
    <Image
      alt={alt}
      title=""
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="cover"
      loader={ImageLoader}
      src={src}
    />
  );
};
export default CoverImage;
