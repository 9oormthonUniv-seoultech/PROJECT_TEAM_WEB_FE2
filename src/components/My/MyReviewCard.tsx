import tw from "twin.macro";
import styled from "styled-components";
import PlaceIcon from "../../assets/icons/place-icon";
import StarIcon from "../../assets/icons/star-icon";
import { MyReview } from "../../@types/review";
import { searchBoothId } from "../../api/booth";
import { useNavigate } from "react-router-dom";
function MyReviewCard({ reviewId, imageUrl, month, date, photoboothName, rating }: MyReview) {
  const navigate = useNavigate();

  const goToBoothReview = async () => {
    const res = await searchBoothId(photoboothName);
    if (res && res.length > 0) {
      const boothId = res[0].id;
      console.log(boothId);
      navigate(`/home/${boothId}/review`);
    }
  };

  return (
    <Card $imageUrl={imageUrl} onClick={goToBoothReview}>
      <span className="date"> {`${month}월 ${date}일`}</span>
      <div className="flex flex-col w-fill justify-start gap-[1px]">
        <div className="flex gap-1 items-center">
          <PlaceIcon />
          <span className="booth-name">{photoboothName}</span>
        </div>
        <div className="flex gap-1 items-center">
          <StarIcon width="15" color="#FFFFFF" />
          <span className="rating">{rating}</span>
        </div>
      </div>
    </Card>
  );
}

export default MyReviewCard;

const Card = styled.div<{ $imageUrl?: string }>`
  ${tw`w-full [aspect-ratio: 1 / 1] rounded-[8px] flex flex-col p-[10px] font-display justify-between`}

  .date {
    ${tw`font-normal text-[12px] text-[#FFFFFF] w-full text-end`}
  }
  .booth-name {
    ${tw`font-medium text-[12px] text-[#FFFFFF]`}
  }

  .rating {
    ${tw`font-semibold text-[14px] text-[#FFFFFF] mt-0.5`}
  }

  ${({ $imageUrl }) => ($imageUrl ? `background-image: url(${$imageUrl});` : tw`bg-gray200`)}
  background-size: cover;
  background-position: center;
}
`;
