import tw from "twin.macro";
import styled from "styled-components";
import LikeFilledIcon from "../../assets/icons/like-filled-icon";
import { useState } from "react";
import LikeNotFilledIcon from "../../assets/icons/like-not-filled-icon";
import CheckIcon from "../../assets/images/photo-checked.svg?react";
import {Post} from "../../api";
import {useAuthStore} from "../../store/useAuthStore.ts";

type ImageCardProps = {
  id : number;
  isEditing?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  photoUrl:string;
  isLiked: boolean;
};

function ImageCard({ id, isEditing, isSelected, onClick, photoUrl, isLiked }: ImageCardProps) {
  const [like, setLike] = useState(isLiked);
  const { accessToken } = useAuthStore();
  
  const likePhotos = async (albumId: number, accessToken: string) => {
    try {
      const res = await Post(
        `/api/v1/album/like/${albumId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleLikeButtonClick = () => {
    setLike(!like);
    console.log(id);
    likePhotos(id, accessToken);
  }
  
  return (
    <ImgBox $imageurl={photoUrl} onClick={isEditing ? onClick : undefined}> {/* 편집 모드에서 클릭 활성화 */}
      {!isEditing && (
        <LikeBtn onClick={handleLikeButtonClick}>
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