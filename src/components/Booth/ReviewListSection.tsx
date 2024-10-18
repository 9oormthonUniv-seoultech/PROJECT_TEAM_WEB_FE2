import tw from "twin.macro";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

import { Review } from "../../@types/review";
function ReviewListSection({
  data,
}: {
  data: {
    reviewCount: number;
    reviews: Review[];
  };
}) {
  return (
    <Container>
      <span className="title">
        리뷰 <span className="text-gray400">{}</span>
      </span>
      {data.reviews.length > 0 &&
        data.reviews.map((review, index) => (
          <ReviewItem
            name={review.name}
            year={review.year}
            month={review.month}
            date={review.date}
            contents={review.contents}
            features={review.features}
            imageUrl={review.imageUrl}
            imagesCount={review.imagesCount}
            key={index}
          />
        ))}

      <hr className="w-full bg-gray300 h-[1px]" />
    </Container>
  );
}

export default ReviewListSection;
const Container = styled.div`
  ${tw`flex flex-col w-full px-[18px] py-[30px]`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700 mb-2`}
  }
`;
