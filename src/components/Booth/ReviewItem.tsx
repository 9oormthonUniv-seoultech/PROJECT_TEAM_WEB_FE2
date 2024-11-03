import tw from "twin.macro";
import styled from "styled-components";
import { Review } from "../../@types/review";

function ReviewItem({ name, year, month, date, contents, features, imageUrl, imageCount }: Review) {
  return (
    <Container>
      <div className="flex gap-[10px]">
        <div className="flex flex-col w-full gap-[10px]">
          <div className="flex gap-[8px] items-center">
            <div className="profile-icon"></div>
            <div className="flex flex-col">
              <span className="nickname">{`@${name}`}</span>
              <span className="date">{`${year}.${month}.${date} 작성`}</span>
            </div>
          </div>
          <span className="review-text">{contents}</span>
        </div>
        {imageCount > 0 && (
          <ImgBox $imageurl={imageUrl}>
            {imageCount - 1 > 0 && <div className="num-tag">{`+${imageCount - 1}`}</div>}
          </ImgBox>
        )}
      </div>
      {features?.length > 0 && (
        <TagList>
          {features.slice(0, 2).map((feature, index) => (
            <TagBox key={index}>{feature}</TagBox>
          ))}
          {features.length > 2 && <TagBox>{`+${features.length - 2}`}</TagBox>}
        </TagList>
      )}
    </Container>
  );
}

export default ReviewItem;

const Container = styled.div`
  ${tw`w-full flex flex-col font-display my-[20px] gap-[10px]`}
  .profile-icon {
    ${tw`w-[33px] h-[33px] rounded-[50%] bg-gray200`}
  }
  .nickname {
    ${tw`font-semibold text-[16px] text-gray700`}
  }
  .date {
    ${tw`font-normal text-[10px] text-gray400`}
  }
  .review-text {
    ${tw`font-normal text-[14px] text-gray600`}
  }
`;

const ImgBox = styled.div<{ $imageurl: string }>`
  ${tw`h-[94px] [aspect-ratio: 1 / 1] relative rounded-[4px] bg-background `}

  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
  .num-tag {
    ${tw`absolute w-[33px] h-[22px] rounded-[24px] bg-[#000000] text-[#FFFFFF] font-normal text-[10px]  flex items-center justify-center right-1 bottom-1`}
  }
`;
const TagList = styled.div`
  ${tw`flex gap-[5px] items-center`}
`;

const TagBox = styled.span`
  ${tw`flex items-center h-[30px] rounded-[24px] bg-gray100 font-normal text-[12px] text-gray400 px-[20px]`}
`;
