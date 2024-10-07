import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "../../components/Common/NavBar";
import Header from "../../components/Booth/Header";
import ImgSlider from "../../components/Booth/ImgSlider";
import BoothInfo from "../../components/Booth/BoothInfo";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
type BoothPageType = {
  children?: React.ReactNode;
};
function BoothDetail({ children }: BoothPageType) {
  const locationNow = useLocation();

  const navigate = useNavigate();
  return (
    <Layout>
      <Header name="하루필름 혜화역점" />
      <MainWrapper>
        <ImgSlider />
        <BoothInfo />
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
