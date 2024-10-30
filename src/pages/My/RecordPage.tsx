import tw from "twin.macro";
import styled from "styled-components";
import RightArrowIcon from "../../assets/icons/right-arrow";
import MyReviewCard from "../../components/My/MyReviewCard";
import { useNavigate } from "react-router-dom";
import LikeBoothCard from "../../components/My/LikeBoothCard";
import VisitedBoothCard from "../../components/My/VisitedBoothCard";
function RecordPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="flex w-full justify-between items-center mt-[20px]">
        <span className="title">24개의 나의 리뷰</span>
        <button className="more-btn" onClick={() => navigate("/my-reviews")}>
          더보기
          <RightArrowIcon width={6} color="#676F7B" />
        </button>
      </div>

      <ImgBox>
        <MyReviewCard />
        <MyReviewCard />
      </ImgBox>

      <div className="flex w-full justify-between items-center mt-[20px]">
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

      <div className="flex w-full justify-between items-center mt-[20px]">
        <span className="title">방문한 부스</span>
        <button className="more-btn" onClick={() => navigate("/visited-booths")}>
          더보기
          <RightArrowIcon width={6} color="#676F7B" />
        </button>
      </div>

      <SlideWrapper>
        <VisitedBoothCard width="292px" height="110px" />
        <VisitedBoothCard width="292px" height="110px" />
      </SlideWrapper>
    </Container>
  );
}

export default RecordPage;

const Container = styled.div`
  ${tw`w-full flex flex-col font-display my-[15px] pl-[16px]`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700`}
  }
  .more-btn {
    ${tw`w-[66px] h-[22px] rounded-[24px] bg-gray100 font-normal text-[12px] text-gray400 flex gap-1 items-center justify-center`}
  }
`;

const ImgBox = styled.div`
  ${tw`w-full grid gap-[10px] mt-[10px] pr-[16px]`}
  grid-template-columns: repeat(2, 1fr);
`;

const SlideWrapper = styled.div`
  ${tw`flex gap-2 overflow-x-auto mt-[10px] `}
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
