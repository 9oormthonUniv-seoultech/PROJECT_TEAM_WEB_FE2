import tw from "twin.macro";
import styled from "styled-components";
import Header from "../../components/Common/Header";
import { useNavigate } from "react-router-dom";
import LikeBoothCard from "../../components/My/LikeBoothCard";
import { useQuery } from "@tanstack/react-query";
import { getLikedBooths } from "../../api/my";
import { useAuthStore } from "../../store/useAuthStore";
function LikeBoothsPage() {
  const navigate = useNavigate();

  const { accessToken } = useAuthStore();
  //찜한 부스 조회
  const { data: likedBoothData } = useQuery({
    queryKey: ["getLikedBooths"],
    queryFn: () => getLikedBooths(accessToken!),
  });
  return (
    <Layout>
      <Header mainText="찜해둔 부스" handleBackClick={() => navigate(-1)} />
      <CardContainer>
        {likedBoothData &&
          likedBoothData.map((item, index) => (
            <LikeBoothCard
              photoBoothId={item.photoBoothId}
              rating={item.rating}
              name={item.name}
              feature={item.feature}
              featureCount={item.featureCount}
              key={index}
            />
          ))}
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
