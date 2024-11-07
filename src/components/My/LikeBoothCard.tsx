import tw from "twin.macro";
import styled from "styled-components";
import StarIcon from "../../assets/icons/star-icon";
import LikeFilledIcon from "../../assets/icons/like-filled-icon";
import LikeNotFilledIcon from "../../assets/icons/like-not-filled-icon";
import { searchLogoUrlByName } from "../../hooks/getImageUrl";
import { useState } from "react";
type CardProps = {
  width?: string;
  height?: string;
  photoBoothId: number;
  name: string;
  rating: number;
  feature: string;
  featureCount: number;
};
function LikeBoothCard({ width, height, photoBoothId, name, rating, feature, featureCount }: CardProps) {
  const [like, setLike] = useState(true);
  return (
    <CardBox width={width} height={height}>
      <ImgBox $imageurl={searchLogoUrlByName(name)} />
      <div className="flex flex-col justify-between w-full">
        <div>
          <span className="booth-name">{name}</span>
          <div className="flex gap-[2px] items-center">
            <StarIcon />
            <span className="rating">{rating}</span>
          </div>
        </div>
        <div className="flex gap-[2px] items-center">
          <span className="hash-tag">{feature}</span>
          <span className="hash-tag">{`+${featureCount - 1}`}</span>
          <button className="like-btn">
            {like ? <LikeFilledIcon width={22} height={22} /> : <LikeNotFilledIcon width={22} height={22} />}
          </button>
        </div>
      </div>
    </CardBox>
  );
}

export default LikeBoothCard;

const CardBox = styled.div<{ width?: string; height?: string }>`
  ${tw`rounded-[8px] bg-gray100 flex gap-[16px] px-[10px] py-[13.5px]`}

  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "135px")};

  /* width에 비례하여 font-size 조정 */
  font-size: calc(${({ width }) => (width ? "14px" : "17px")}); /* 예시 비율 */

  .booth-name {
    ${tw`font-display font-medium text-[1em] text-gray700`}
  }
  .rating {
    ${tw`font-display font-semibold text-[1em] text-gray700 mt-[0.0625em]`}
  }
  .hash-tag {
    ${tw`flex items-center h-[2.4em] rounded-[1.5em] bg-[white] px-[10px] font-display font-normal text-[0.9em] text-gray400`}
  }
  .like-btn {
    ${tw`w-[2.2em] h-[2.2em] rounded-full bg-[white] flex items-center justify-center`}
  }
`;

const ImgBox = styled.div<{ $imageurl: string }>`
  ${tw`w-[50%] [aspect-ratio: 1 / 1]  relative rounded-[4px] `}

  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
`;
