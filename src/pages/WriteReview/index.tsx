import tw from "twin.macro";
import styled from "styled-components";
import Header from "../../components/Common/Header";
import { Outlet, useNavigate } from "react-router-dom";

function WriteReview() {
  const navigate = useNavigate();

  //현재 날짜 가져오기
  const today = new Date();

  return (
    <Layout>
      <Header
        mainText="리뷰 작성"
        subText={`${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`}
        handleBackClick={() => navigate(-1)}
      />
      <Outlet />
    </Layout>
  );
}

export default WriteReview;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto font-display bg-[#FFFFFF]`}
`;
