import tw from "twin.macro";
import styled from "styled-components";
import Header from "../../components/Common/Header";
import VisitedBoothCard from "../../components/My/VisitedBoothCard";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVisitedBooths } from "../../api/my";
import { useAuthStore } from "../../store/useAuthStore";
function VisitedBoothsPage() {
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  //최근 리뷰 조회
  const { isLoading, data } = useQuery<any>({
    queryKey: ["getVisitedBooths"],
    queryFn: () => getVisitedBooths(accessToken!),
  });

  return (
    <Layout>
      <Header mainText="방문한 부스" handleBackClick={() => navigate(-1)} />
      <CardContainer>
        {!isLoading && data && data.length > 0 ? (
          data.map((item: any, index: number) => (
            <VisitedBoothCard
              name={item.name}
              photoboothId={item.photoboothId}
              month={item.month}
              date={item.date}
              key={index}
            />
          ))
        ) : (
          <div></div>
        )}
      </CardContainer>
    </Layout>
  );
}

export default VisitedBoothsPage;

const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto bg-[#FFFFFF]`}
`;

const CardContainer = styled.div`
  ${tw`w-full flex flex-col px-[15px] mt-[85px] gap-[14px]`}
`;
