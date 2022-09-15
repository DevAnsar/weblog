import { useRef, FC } from "react";
import { ImageProps } from "next/image";
import styled from "styled-components";
import useOnScreen from "../../../hooks/useOnScreen";
import type {GetBlogStyledImageProps} from "../../../types"

const ScalableImage: FC<ImageProps> = ({ src, alt }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  console.log("isVisible", isVisible);
  return (
    <Wrapper ref={ref}>
      <StyledImage isVisible={isVisible} title={alt} imgUrl={typeof src === "string" ? src : undefined} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height : 100%;
`;

const StyledImage = styled.div<GetBlogStyledImageProps>`
  transition: 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-image: ${props => props.imgUrl && `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width : 100%;
  height : 100%;
  animation: ${props => props.isVisible && "scale 0.8s 1"};
  @keyframes scale {
    0% {
      scale: 1.1;
    }
    30% {
      scale: 1.1;
    }
    100% {
      scale: 1;
    }
  }
`;
export default ScalableImage;
