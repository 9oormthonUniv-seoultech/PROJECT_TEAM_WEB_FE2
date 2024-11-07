import NavBar from "../../components/Common/NavBar";
import tw from "twin.macro";
import styled from "styled-components";
import ProfileSection from "../../components/My/ProfileSection";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { getLogout } from "../../api/user";
function My() {
  const locationNow = useLocation();
  const navigate = useNavigate();

  // MenuContainer 고정 여부를 결정할 상태 변수
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-60px 0px 0px 0px" } // rootMargin을 통해 top: 0에 도달하면 고정되게 설정
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
  const { accessToken, logout } = useAuthStore();

  const handleLogout = async () => {
    const res = await getLogout(accessToken!);
    if (res) {
      logout();
      navigate("/home");
    }
  };
  return (
    <Layout>
      <main className="w-full flex flex-col overflow-auto pb-[80px]">
        <ProfileSection />
        {/* Intersection Observer가 감지할 위치 */}
        <div ref={menuRef} />
        <MenuContainer isSticky={isSticky}>
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
        <button
          className="text-gray400 border-b-[1px] border-b-gray400 mx-auto px-1 text-[14px] font-medium"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </main>
      <NavBar />
    </Layout>
  );
}

export default My;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto bg-[#FFFFFF]`}
`;

const MenuContainer = styled.div<{ isSticky: boolean }>`
  ${tw`flex flex-row w-full justify-center h-[35px] border-b-2 border-b-gray100 mt-[10px]  px-[45px] gap-[100px]`}
  ${({ isSticky }) => isSticky && `position: fixed; top: 0; z-index: 10; background-color: #FFFFFF;`}
`;
const MenuBtn = styled.button<{ $active: boolean }>`
  ${tw`w-[105px] h-[35px] font-display font-semibold text-[16px]`}
  ${({ $active }) => ($active ? tw`text-gray700 border-b-4 border-b-main ` : tw`text-gray700`)}
`;
