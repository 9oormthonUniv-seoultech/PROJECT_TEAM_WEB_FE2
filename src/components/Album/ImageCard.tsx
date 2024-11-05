import tw from "twin.macro";
import styled from "styled-components";
import DummyImg from "../../assets/images/dummy-photo.jpeg";
import LikeFilledIcon from "../../assets/icons/like-filled-icon";
import { useState } from "react";
import LikeNotFilledIcon from "../../assets/icons/like-not-filled-icon";
import CheckIcon from "../../assets/images/photo-checked.svg?react";

type ImageCardProps = {
  isEditing: boolean;
  isSelected: boolean;
  onClick: () => void;
};

function ImageCard({ isEditing, isSelected, onClick }: ImageCardProps) {
  const [like, setLike] = useState(false);
  
  return (
    <ImgBox $imageurl={DummyImg} onClick={isEditing ? onClick : undefined}> {/* 편집 모드에서 클릭 활성화 */}
      {!isEditing && (
        <LikeBtn onClick={() => setLike(!like)}>
          {like ? <LikeFilledIcon /> : <LikeNotFilledIcon />}
        </LikeBtn>
      )}
      {isEditing && isSelected && (
        <CheckIconWrapper>
          <CheckIcon /> {/* 선택된 경우에만 체크 아이콘 표시 */}
        </CheckIconWrapper>
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

const CheckIconWrapper = styled.div`
  ${tw`absolute w-[24px] h-[24px] rounded-full bg-[#4b515a] flex items-center justify-center bottom-1.5 right-1.5`}
`;