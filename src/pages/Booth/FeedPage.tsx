import BoothRating from "../../components/Booth/BoothRating";
import FeedImgList from "../../components/Booth/FeedImgList";
import FeedTagSection from "../../components/Booth/FeedTagSection";
import ReviewListSection from "../../components/Booth/ReviewListSection";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { getBoothTags, getPhotoTags, getRecentReviews } from "../../api/review";
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
      {!isLoading && data && <ReviewListSection data={data} />}
    </div>
  );
}

export default FeedPage;
