import tw from "twin.macro";
import styled from "styled-components";
import DummyImg from "../../assets/images/dummy-photo.jpeg";
import LikeFilledIcon from "../../assets/icons/like-filled-icon";
import { useState } from "react";
import LikeNotFilledIcon from "../../assets/icons/like-not-filled-icon";

type ImageCardProps = {
  isEditing: boolean;
}

function ImageCard({ isEditing }: ImageCardProps) {
  const [like, setLike] = useState(false);
  
  return (
    <ImgBox $imageurl={DummyImg}>
      {!isEditing && (
        <LikeBtn onClick={() => setLike(!like)}>
          {like ? <LikeFilledIcon /> : <LikeNotFilledIcon />}
        </LikeBtn>
      )}
    </ImgBox>
  );
}

export default ImageCard;

const ImgBox = styled.div<{ $imageurl: string }>`
    ${tw`w-full [aspect-ratio: 3 / 4] relative rounded-[8px] `}

    background-image: url(${(props) => props.$imageurl});
    background-size: cover;
    background-position: center;
`;

const LikeBtn = styled.button`
    ${tw`absolute w-[30px] h-[30px] rounded-full bg-[white] flex items-center justify-center bottom-1.5 right-1.5`}
`;
