import tw from "twin.macro";
import styled from "styled-components";
import NavBar from "../../components/Common/NavBar";
import Header from "../../components/Common/Header";
import ImgSlider from "../../components/Booth/ImgSlider";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import BoothInfoSection from "../../components/Booth/BoothInfoSection";
import { useQuery } from "@tanstack/react-query";
import { getBoothInfo } from "../../api/booth";
import { useEffect, useRef, useState } from "react";

// 특정 부스 상세 정보 페이지
function BoothDetail() {
  const locationNow = useLocation();
  const { boothId } = useParams() as { boothId: string };
  //특정 포토부스 정보 조회 api 호출
  const { isLoading, data: boothInfo } = useQuery({
    queryKey: ["getBoothInfo", boothId],
    queryFn: () => getBoothInfo(boothId),
  });

  // MenuContainer 고정 여부를 결정할 상태 변수
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, []);

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

        <div ref={menuRef} />
        {/* 고정 여부에 따라 위치가 변경되는 MenuContainer */}

        <MenuContainer isSticky={isSticky}>
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

const MenuContainer = styled.div<{ isSticky: boolean }>`
  ${tw`flex flex-row w-full h-[35px] border-b-2 border-b-gray100  justify-between px-[30px] bg-[white]`}
  ${({ isSticky }) => isSticky && `position: fixed; top: 58px; z-index: 10 ; max-width: 480px;`}
`;
const MenuBtn = styled.button<{ $active: boolean }>`
  ${tw`w-[67px] h-[35px] font-display font-semibold text-[16px]`}
  ${({ $active }) => ($active ? tw`text-gray700 border-b-4 border-b-main ` : tw`text-gray300`)}
`;
