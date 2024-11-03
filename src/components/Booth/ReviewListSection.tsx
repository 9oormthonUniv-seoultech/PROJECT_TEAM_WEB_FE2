// 특정 포토부스에 대한 전체 리뷰를 조회하는 컴포넌트
import tw from "twin.macro";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Review } from "../../@types/review";
import { useReviewsInfiniteQuery } from "../../hooks/useReviewQuery";
import { useParams } from "react-router-dom";
function ReviewListSection() {
  const { boothId } = useParams() as { boothId: string };

  const { ref, inView } = useInView();
  const { data: pages, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useReviewsInfiniteQuery(boothId);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <Container>
      <span className="title">
        리뷰 <span className="text-gray400">{}</span>
      </span>
      {!isLoading &&
        pages &&
        pages.pages.map(
          (page) =>
            page.data &&
            page.data.map((review, index) => (
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
            ))
        )}
      <div ref={ref}>{isFetchingNextPage ? "Loading more..." : null}</div>
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
