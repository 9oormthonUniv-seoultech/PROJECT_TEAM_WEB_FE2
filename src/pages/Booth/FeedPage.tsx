import BoothRating from "../../components/Booth/BoothRating";
import FeedImgList from "../../components/Booth/FeedImgList";
import FeedTagSection from "../../components/Booth/FeedTagSection";
import ReviewListSection from "../../components/Booth/ReviewListSection";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { getBoothTags, getPhotoTags, getRecentReviews } from "../../api/review";
import NoImage from "../../assets/images/no-images.svg?react";
import tw from "twin.macro";
import styled from "styled-components";
import ReviewItem from "../../components/Booth/ReviewItem";
function FeedPage() {
  const { boothId } = useParams() as { boothId: string };

  const { accessToken } = useAuthStore();
  //최근 리뷰 조회
  const { isLoading, data } = useQuery({
    queryKey: ["getRecentReviews", boothId],
    queryFn: () => getRecentReviews(boothId, accessToken!),
  });

  const { data: BoothTags } = useQuery({
    queryKey: ["getBoothTags", boothId],
    queryFn: () => getBoothTags(boothId, accessToken!),
  });

  const { data: PhotoTags } = useQuery({
    queryKey: ["getPhotoTags", boothId],
    queryFn: () => getPhotoTags(boothId, accessToken!),
  });
  if (!isLoading && data && data?.reviewCount > 0) {
    return (
      <div className="w-full flex flex-col">
        <BoothRating />
        <div className="w-full h-[10px] bg-background"></div>
        <FeedImgList />
        <div className="w-full h-[10px] bg-background"></div>
        {BoothTags && BoothTags.length > 0 && (
          <FeedTagSection title="부스는 이런 점이 좋았어요" category="booth" data={BoothTags} />
        )}
        <div className="w-full h-[10px] bg-background"></div>
        {PhotoTags && PhotoTags.length > 0 && (
          <FeedTagSection title="촬영스타일은 이런 느낌이에요" category="photo" data={PhotoTags} />
        )}
        <div className="w-full h-[10px] bg-background"></div>

        {/* 최신 리뷰 */}
        <ReviewContainer>
          <span className="title">
            리뷰 <span className="text-gray400">{data.reviewCount}</span>
          </span>
          {data &&
            data.reviews.map((review, index) => (
              <ReviewItem
                name={review.name}
                year={review.year}
                month={review.month}
                date={review.date}
                contents={review.contents}
                features={review.features}
                imageUrl={review.imageUrl}
                imageCount={review.imageCount}
                key={index}
              />
            ))}
        </ReviewContainer>
      </div>
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
export default FeedPage;

const ReviewContainer = styled.div`
  ${tw`flex flex-col w-full px-[18px] py-[30px]`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700 mb-2`}
  }
`;
