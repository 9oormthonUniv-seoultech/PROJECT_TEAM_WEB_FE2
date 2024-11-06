import Header from "../../components/Common/Header";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import MyReviewCard from "../../components/My/MyReviewCard";
import { useQuery } from "@tanstack/react-query";
import { getMyReviews } from "../../api/my";
import { useAuthStore } from "../../store/useAuthStore";
function MyReviewPage() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();
  //리뷰 조회
  const { isLoading, data } = useQuery({
    queryKey: ["getMyAllReviews"],
    queryFn: () => getMyReviews(accessToken!),
  });

  return (
    <Layout>
      <Header mainText="나의 리뷰" handleBackClick={() => navigate(-1)} />
      <ImgBox>
        {!isLoading && data && data.reviewMypageDetailDtoList.length > 0 ? (
          data.reviewMypageDetailDtoList.map((item, index) => (
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
          <div>등록된 리뷰가 없어요</div>
        )}
      </ImgBox>
    </Layout>
  );
}

export default MyReviewPage;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto bg-[#FFFFFF]`}
`;
const ImgBox = styled.div`
  ${tw`w-full grid gap-[10px] mt-[60px] p-[15px]`}
  grid-template-columns: repeat(2, 1fr);
`;
