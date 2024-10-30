import NavBar from "../../components/Common/NavBar";
import tw from "twin.macro";
import styled from "styled-components";
import ProfileSection from "../../components/My/ProfileSection";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
function My() {
  const locationNow = useLocation();
  const navigate = useNavigate();
  return (
    <Layout>
      <main className="w-full overflow-auto pb-[80px]">
        <ProfileSection />
        <MenuContainer>
          <MenuBtn
            $active={locationNow.pathname.endsWith("booth-records")}
            onClick={() => navigate("/my/booth-records")}
          >
            부스기록
          </MenuBtn>
          <MenuBtn $active={locationNow.pathname.endsWith("favorites")} onClick={() => navigate("/my/favorites")}>
            즐겨찾기
          </MenuBtn>
        </MenuContainer>
        {/* 하위 홈, 리뷰, 사진 영역 컴포넌트 렌더링 */}
        <Outlet />
      </main>
      <NavBar />
    </Layout>
  );
}

export default My;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto bg-[#FFFFFF]`}
`;

const MenuContainer = styled.div`
  ${tw`flex flex-row w-full justify-center h-[32px] border-b-2 border-b-gray100 mt-[30px]  px-[45px] gap-[100px]`}
`;
const MenuBtn = styled.button<{ $active: boolean }>`
  ${tw`w-[105px] h-[31px] font-display font-semibold text-[14px]`}
  ${({ $active }) => ($active ? tw`text-gray700 border-b-4 border-b-main ` : tw`text-gray700`)}
`;
