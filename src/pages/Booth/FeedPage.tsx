import BoothRating from "../../components/Booth/BoothRating";
import tw from "twin.macro";
import styled from "styled-components";
import FeedImgList from "../../components/Booth/FeedImgList";
import FeedTagSection from "../../components/Booth/FeedTagSection";
import ReviewListSection from "../../components/Booth/ReviewListSection";
function FeedPage() {
  return (
    <div className="w-full flex flex-col">
      <BoothRating />
      <div className="w-full h-[10px] bg-background"></div>
      <FeedImgList />
      <div className="w-full h-[10px] bg-background"></div>
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

export default FeedPage;
