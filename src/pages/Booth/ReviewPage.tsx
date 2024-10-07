import React from "react";
import BoothDetail from ".";
import FeedTagSection from "../../components/Booth/FeedTagSection";
import ReviewListSection from "../../components/Booth/ReviewListSection";

function ReviewPage() {
  return (
    <div className="w-full flex flex-col">
      <FeedTagSection
        title="부스는 이런 점이 좋았어요"
        category="booth"
        data={["홀수 출력 가능", "예쁜 셀카존", "깔끔한 소품", "넓은 대기 공간"]}
      />
      <div className="w-full h-[10px] bg-background"></div>
      <FeedTagSection title="촬영스타일은 이런 느낌이에요" category="photo" data={["선명한 화질"]} />
      <div className="w-full h-[10px] bg-background"></div>
      <ReviewListSection />
    </div>
  );
}

export default ReviewPage;
