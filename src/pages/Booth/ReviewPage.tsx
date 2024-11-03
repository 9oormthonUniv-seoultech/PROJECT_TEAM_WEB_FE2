import FeedTagSection from "../../components/Booth/FeedTagSection";
import ReviewListSection from "../../components/Booth/ReviewListSection";
import { useQuery } from "@tanstack/react-query";
import { getBoothTags, getPhotoTags } from "../../api/review";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import NoImage from "../../assets/images/no-images.svg?react";
function ReviewPage() {
  const { boothId } = useParams() as { boothId: string };
  const { accessToken } = useAuthStore();

  const { isLoading: boothTagLoading, data: BoothTags } = useQuery({
    queryKey: ["getBoothTags", boothId],
    queryFn: () => getBoothTags(boothId, accessToken!),
  });

  const { isLoading: photoTagLoading, data: PhotoTags } = useQuery({
    queryKey: ["getPhotoTags", boothId],
    queryFn: () => getPhotoTags(boothId, accessToken!),
  });
  if (
    !boothTagLoading &&
    !photoTagLoading &&
    BoothTags &&
    PhotoTags &&
    (BoothTags.length > 0 || PhotoTags.length > 0)
  ) {
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
        <ReviewListSection />
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

export default ReviewPage;
