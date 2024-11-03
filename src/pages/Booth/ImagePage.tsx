import tw from "twin.macro";
import styled from "styled-components";
import NoImage from "../../assets/images/no-images.svg?react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useReviewImageInfiniteQuery } from "../../hooks/useReviewQuery";
function ImagePage() {
  const { boothId } = useParams() as { boothId: string };
  const { accessToken } = useAuthStore();
  const { ref, inView } = useInView();
  const {
    data: pages,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useReviewImageInfiniteQuery(boothId, accessToken!);
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  if (!isLoading && pages && pages?.pages.length! > 0) {
    return (
      <Container>
        {pages.pages.map(
          (page) =>
            page.data &&
            page.data.map((imagePath, index) => <img className="img-container" src={imagePath} key={index} />)
        )}

        <div ref={ref}>{isFetchingNextPage ? "Loading more..." : null}</div>
      </Container>
    );
  } else {
    return (
      <div className="w-full flex flex-col items-center mx-auto mt-20">
        <NoImage />
        <p className="text-gray400 mt-4">리뷰를 작성해 보세요</p>
      </div>
    );
  }
}

export default ImagePage;

const Container = styled.div`
  ${tw`w-full p-[16px] grid gap-[8px] `}
  grid-template-columns: repeat(2, 1fr);

  .img-container {
    ${tw`w-full [aspect-ratio: 1 / 1] rounded-[8px] bg-gray200`}
  }
`;
