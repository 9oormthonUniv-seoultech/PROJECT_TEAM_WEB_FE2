import tw from "twin.macro";
import styled from "styled-components";
import RightArrowIcon from "../../assets/icons/right-arrow";
import MyReviewCard from "../../components/My/MyReviewCard";
import { useNavigate } from "react-router-dom";
import LikeBoothCard from "../../components/My/LikeBoothCard";
import VisitedBoothCard from "../../components/My/VisitedBoothCard";
import { useQuery } from "@tanstack/react-query";
import { getMyReviews, getVisitedBooths } from "../../api/my";
import { useAuthStore } from "../../store/useAuthStore";
function RecordPage() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  //리뷰 조회
  const { data: myReviewData } = useQuery({
    queryKey: ["getMyAllReviews"],
    queryFn: () => getMyReviews(accessToken!),
  });

  //방문한 부스 조회
  const { isLoading, data: visitedBoothData } = useQuery<any>({
    queryKey: ["getVisitedBooths"],
    queryFn: () => getVisitedBooths(accessToken!),
  });

  return (
    <Container>
      <div className="flex w-full justify-between items-center mt-[20px] px-[16px]">
        <span className="title">{`${myReviewData && myReviewData.reviewCount ? myReviewData.reviewCount : "0"}개의 나의 리뷰`}</span>
        <button className="more-btn" onClick={() => navigate("/my-reviews")}>
          더보기
          <RightArrowIcon width={6} color="#676F7B" />
        </button>
      </div>

      <ImgBox>
        {myReviewData && myReviewData?.reviewMypageDetailDtoList.length > 0 ? (
          myReviewData.reviewMypageDetailDtoList
            .slice(0, 2)
            .map((item, index) => (
              <MyReviewCard
                reviewId={item.reviewId}
                imageUrl={item.imageUrl}
                month={item.month}
                date={item.date}
                photoboothName={item.photoboothName}
                rating={item.rating}
                key={index}
              />
            ))
        ) : (
          <div>아직 작성한 리뷰가 없어요</div>
        )}
      </ImgBox>

      <div className="flex w-full justify-between items-center mt-[20px] px-[16px]">
        <span className="title">찜해둔 부스</span>
        <button className="more-btn" onClick={() => navigate("/like-booths")}>
          더보기
          <RightArrowIcon width={6} color="#676F7B" />
        </button>
      </div>
      <SlideWrapper>
        <LikeBoothCard width="292px" height="110px" />
        <LikeBoothCard width="292px" height="110px" />
      </SlideWrapper>

      <div className="flex w-full justify-between items-center mt-[20px] px-[16px]">
        <span className="title">방문한 부스</span>
        {visitedBoothData && visitedBoothData.length > 0 && (
          <button className="more-btn" onClick={() => navigate("/visited-booths")}>
            더보기
            <RightArrowIcon width={6} color="#676F7B" />
          </button>
        )}
      </div>

      <SlideWrapper>
        {visitedBoothData && visitedBoothData.length > 0 ? (
          visitedBoothData
            .slice(0, 2)
            .map((item: any, index: number) => (
              <VisitedBoothCard
                width="292px"
                height="110px"
                name={item.name}
                photoboothId={item.photoboothId}
                month={item.month}
                date={item.date}
                key={index}
              />
            ))
        ) : (
          <span>방문한 부스가 없어요</span>
        )}
      </SlideWrapper>
    </Container>
  );
}

export default RecordPage;

const Container = styled.div`
  ${tw`w-full flex flex-col font-display my-[15px]`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700`}
  }
  .more-btn {
    ${tw`w-[66px] h-[22px] rounded-[24px] bg-gray100 font-normal text-[12px] text-gray400 flex gap-1 items-center justify-center`}
  }
`;

const ImgBox = styled.div`
  ${tw`w-full grid gap-[10px] mt-[10px] px-[16px]`}
  grid-template-columns: repeat(2, 1fr);
`;

const SlideWrapper = styled.div`
  ${tw`flex gap-2 overflow-x-auto mt-[10px] ml-[16px]`}
  scroll-snap-type: x mandatory; /* 각 버튼이 스냅되게 설정 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and 엣지 */
  scrollbar-width: none; /* 파이어폭스 */
  -webkit-overflow-scrolling: touch; /* 모바일 환경에서 터치 스크롤 부드럽게 처리 */

  /* 자식 카드 크기를 유지하기 위해 min-width 적용 */
  > div {
    min-width: 292px; /* 카드의 너비에 맞춰 설정 */
    scroll-snap-align: start; /* 스냅을 카드 시작 지점에 맞춤 */
  }
`;
