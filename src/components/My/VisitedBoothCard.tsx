import tw from "twin.macro";
import styled from "styled-components";
import EditIcon from "../../assets/icons/edit-icon";
import { useNavigate } from "react-router-dom";
import { searchLogoUrlByName } from "../../hooks/getImageUrl";
type CardProps = {
  width?: string;
  height?: string;
  photoboothId: number;
  name: string;
  month: number;
  date: number;
};
function VisitedBoothCard({ width, height, photoboothId, name, month, date }: CardProps) {
  const navigate = useNavigate();
  return (
    <CardBox width={width} height={height}>
      <ImgBox $imageurl={searchLogoUrlByName(name)} />
      <div className=" relative flex flex-col justify-between items-end w-full">
        <div className="flex flex-col w-full">
          <span className="booth-name">{name}</span>
          <span className="visited-date">{`${month}월 ${date}일 이용`}</span>
        </div>
        <button className="go-btn" onClick={() => navigate(`/write-review/${photoboothId}/step/1`)}>
          리뷰 쓰러가기
          <EditIcon />
        </button>
      </div>
    </CardBox>
  );
}

export default VisitedBoothCard;
const CardBox = styled.div<{ width?: string; height?: string }>`
  ${tw`rounded-[8px] bg-gray100 flex gap-[16px] px-[10px] py-[13.5px]`}

  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "135px")};

  /* width에 비례하여 font-size 조정 */
  font-size: calc(${({ width }) => (width ? "14px" : "17px")}); /* 예시 비율 */

  .booth-name {
    ${tw`font-display font-medium text-[1em] text-gray700`}
  }
  .visited-date {
    ${tw`font-display font-medium text-[0.9em] text-gray400 `}
  }

  .go-btn {
    ${tw` flex items-center justify-center gap-[2px] px-[12px] py-[6px] text-[0.9em] text-[white]  bg-main rounded-[24px]`}
  }
`;

const ImgBox = styled.div<{ $imageurl: string }>`
  ${tw`w-[50%] [aspect-ratio: 1 / 1]  relative rounded-[4px] `}

  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
`;
