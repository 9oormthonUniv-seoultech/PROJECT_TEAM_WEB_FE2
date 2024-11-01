import Header from "../../components/Common/Header";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import MyReviewCard from "../../components/My/MyReviewCard";
function MyReviewPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header mainText="나의 리뷰" handleBackClick={() => navigate(-1)} />
      <ImgBox>
        <MyReviewCard />
        <MyReviewCard />
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
