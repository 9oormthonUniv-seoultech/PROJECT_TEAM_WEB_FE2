import tw from "twin.macro";
import styled from "styled-components";
import PlanBUrl from "../../assets/images/planb-logo.png?url";
import StarIcon from "../../assets/icons/star-icon";
import LikeIcon from "../../assets/icons/like-icon";
type CardProps = {
  width?: string;
  height?: string;
};
function LikeBoothCard({ width, height }: CardProps) {
  return (
    <CardBox width={width} height={height}>
      <ImgBox $imageurl={PlanBUrl} />
      <div className="flex flex-col justify-between">
        <div>
          <span className="booth-name">하루필름 건대입구역점</span>
          <div className="flex gap-[2px] items-center">
            <StarIcon />
            <span className="rating">4.5</span>
          </div>
        </div>
        <div className="flex gap-[2px] items-center">
          <span className="hash-tag"># 선명한 화질 </span>
          <span className="hash-tag">+3</span>
          <button className="like-btn">
            <LikeIcon width={22} height={22} color="#BOBOEE" />
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
  ${tw`w-[33.3%] [aspect-ratio: 1 / 1]  relative rounded-[4px] `}

  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
`;
