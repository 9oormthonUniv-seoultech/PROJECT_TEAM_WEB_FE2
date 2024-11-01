import tw from "twin.macro";
import styled from "styled-components";
import PlaceIcon from "../../assets/icons/place-icon";
import StarIcon from "../../assets/icons/star-icon";
function MyReviewCard() {
  return (
    <Card>
      <span className="date"> 8월 1일</span>
      <div className="flex flex-col w-fill justify-start gap-[1px]">
        <div className="flex gap-1 items-center">
          <PlaceIcon />
          <span className="booth-name">하루필름 건대입구역점</span>
        </div>
        <div className="flex gap-1 items-center">
          <StarIcon width="15" color="#FFFFFF" />
          <span className="rating">4.5</span>
        </div>
      </div>
    </Card>
  );
}

export default MyReviewCard;

const Card = styled.div<{ imageUrl?: string }>`
  ${tw`w-full [aspect-ratio: 1 / 1] rounded-[8px] bg-gray200 flex flex-col p-[10px] font-display justify-between`}

  .date {
    ${tw`font-normal text-[12px] text-[#FFFFFF] w-full text-end`}
  }
  .booth-name {
    ${tw`font-medium text-[12px] text-[#FFFFFF]`}
  }

  .rating {
    ${tw`font-semibold text-[14px] text-[#FFFFFF] mt-0.5`}
  }

  background-url: ${({ imageUrl }) => (imageUrl ? imageUrl : "none")}
}
`;
