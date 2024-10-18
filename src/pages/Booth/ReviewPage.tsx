import React from "react";
import BoothDetail from ".";
import FeedTagSection from "../../components/Booth/FeedTagSection";
import ReviewListSection from "../../components/Booth/ReviewListSection";
import { useQuery } from "@tanstack/react-query";
import { getBoothTags, getPhotoTags, getRecentReviews } from "../../api/review";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

function ReviewPage() {
  const { boothId } = useParams() as { boothId: string };
  const { accessToken } = useAuthStore();

  const { isLoading, data } = useQuery({
    queryKey: ["getRecentReviews", boothId],
    queryFn: () => getRecentReviews(boothId, accessToken!),
  });

  const { isLoading: boothTagLoading, data: BoothTags } = useQuery({
    queryKey: ["getBoothTags", boothId],
    queryFn: () => getBoothTags(boothId, accessToken!),
  });

  const { isLoading: photoTagLoading, data: PhotoTags } = useQuery({
    queryKey: ["getPhotoTags", boothId],
    queryFn: () => getPhotoTags(boothId, accessToken!),
  });
  return (
    <div className="w-full flex flex-col">
      {!boothTagLoading && BoothTags && BoothTags.length > 0 && (
        <FeedTagSection title="부스는 이런 점이 좋았어요" category="booth" data={BoothTags} />
      )}
      <div className="w-full h-[10px] bg-background"></div>
      {!photoTagLoading && PhotoTags && PhotoTags.length > 0 && (
        <FeedTagSection title="촬영스타일은 이런 느낌이에요" category="photo" data={PhotoTags} />
      )}
      <div className="w-full h-[10px] bg-background"></div>
      {!isLoading && data && <ReviewListSection data={data} />}
    </div>
  );
}

export default ReviewPage;
