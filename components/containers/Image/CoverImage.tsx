import { useRef, FC } from "react";
import Image,{ ImageProps } from "next/image";
import { ImageLoader } from "../../../utils/helper";
import useOnScreen from "../../../hooks/useOnScreen";

const CoverImage: FC<ImageProps> = ({ src, alt }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  console.log("isVisible", isVisible);
  return (
    <Image
      alt={alt}
      title={alt}
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
