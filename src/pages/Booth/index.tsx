import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "../../components/Common/NavBar";
import Header from "../../components/Common/Header";
import ImgSlider from "../../components/Booth/ImgSlider";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import BoothInfoSection from "../../components/Booth/BoothInfo";
import { useQuery } from "@tanstack/react-query";
import { getBoothInfo } from "../../api/booth";

// 특정 부스 상세 정보 페이지
function BoothDetail() {
  const locationNow = useLocation();
  const { boothId } = useParams() as { boothId: string };
  //특정 포토부스 정보 조회 api 호출
  const { isLoading, data: boothInfo } = useQuery({
    queryKey: ["getBoothInfo", boothId],
    queryFn: () => getBoothInfo(boothId),
  });

  const navigate = useNavigate();
  return (
    <Layout>
      {!isLoading && boothInfo && <Header mainText={boothInfo.name} handleBackClick={() => navigate("/home")} />}
      <MainWrapper>
        <ImgSlider type={boothInfo?.photoBoothBrand!} />
        {!isLoading && boothInfo && (
          <BoothInfoSection
            name={boothInfo.name}
            road={boothInfo.road}
            x={boothInfo.x}
            y={boothInfo.y}
            photoBoothBrand={""}
          />
        )}
        <MenuContainer>
          <MenuBtn $active={locationNow.pathname.endsWith("feed")} onClick={() => navigate("feed")}>
            홈
          </MenuBtn>
          <MenuBtn $active={locationNow.pathname.endsWith("review")} onClick={() => navigate("review")}>
            리뷰
          </MenuBtn>
          <MenuBtn $active={locationNow.pathname.endsWith("image")} onClick={() => navigate("image")}>
            사진
          </MenuBtn>
        </MenuContainer>
        {/* 하위 홈, 리뷰, 사진 영역 컴포넌트 렌더링 */}
        <Outlet />
      </MainWrapper>
      <NavBar />
    </Layout>
  );
}

export default BoothDetail;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto bg-[#FFFFFF]`}
`;

const MainWrapper = styled.div`
  ${tw`overflow-auto flex flex-col w-full mt-[60px] items-center pb-[80px]`}
`;

const MenuContainer = styled.div`
  ${tw`flex flex-row w-full h-[32px] border-b-2 border-b-gray100 mt-[30px] justify-between px-[30px]`}
`;
const MenuBtn = styled.button<{ $active: boolean }>`
  ${tw`w-[67px] h-[31px] font-display font-semibold text-[14px]`}
  ${({ $active }) => ($active ? tw`text-gray700 border-b-4 border-b-main ` : tw`text-gray300`)}
`;
