import tw from "twin.macro";
import styled from "styled-components";
import RightArrowIcon from "../../assets/icons/right-arrow";
import MyReviewCard from "../../components/My/MyReviewCard";
import { useNavigate } from "react-router-dom";
import LikeBoothCard from "../../components/My/LikeBoothCard";
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
      <div className="w-full mt-[10px]">
        <LikeBoothCard width="292px" height="110px" />
      </div>

      <div className="flex w-full justify-between items-center mt-[20px]">
        <span className="title">방문한 부스</span>
        <button className="more-btn">
          더보기
          <RightArrowIcon width={6} color="#676F7B" />
        </button>
      </div>
    </Container>
  );
}

export default RecordPage;

const Container = styled.div`
  ${tw`w-full flex flex-col font-display p-[16px]`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700`}
  }
  .more-btn {
    ${tw`w-[66px] h-[22px] rounded-[24px] bg-gray100 font-normal text-[12px] text-gray400 flex gap-1 items-center justify-center`}
  }
`;

const ImgBox = styled.div`
  ${tw`w-full grid gap-[10px] mt-[10px]`}
  grid-template-columns: repeat(2, 1fr);
`;
