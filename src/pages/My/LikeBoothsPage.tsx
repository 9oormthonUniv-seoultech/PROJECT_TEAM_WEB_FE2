import tw from "twin.macro";
import styled from "styled-components";
import Header from "../../components/Common/Header";
import { useNavigate } from "react-router-dom";
import LikeBoothCard from "../../components/My/LikeBoothCard";
function LikeBoothsPage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header mainText="찜해둔 부스" handleBackClick={() => navigate(-1)} />
      <CardContainer>
        <LikeBoothCard />
      </CardContainer>
    </Layout>
  );
}

export default LikeBoothsPage;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto bg-[#FFFFFF]`}
`;

const CardContainer = styled.div`
  ${tw`w-full flex flex-col px-[15px] mt-[85px] gap-[14px]`}
`;
