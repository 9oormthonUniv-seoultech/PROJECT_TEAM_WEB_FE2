import tw from "twin.macro";
import styled from "styled-components";
import HomeIcon from "../../assets/icons/home-icon";
import AlbumIcon from "../../assets/icons/album-icon";
import MyIcon from "../../assets/icons/my-icon";

import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from "react";
import Modal from "./Modal";
function NavBar() {
  const locationNow = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuthStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isActive = (menu: string) => {
    // 하위 경로도 포함하여 활성화 확인
    if (locationNow.pathname.startsWith(menu)) {
      return "#5453EE";
    } else {
      return "#C7C9CE";
    }
  };

  const goToMenu = (menu: string) => {
    if (isLoggedIn) {
      navigate(menu);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <Container>
        <MenuBtn onClick={() => navigate("/home")} disabled={locationNow.pathname === "/home"}>
          <HomeIcon color={isActive("/home")} />
          <Text $active={locationNow.pathname.startsWith("/home")}>홈</Text>
        </MenuBtn>
        <MenuBtn onClick={() => goToMenu("/album")} disabled={locationNow.pathname === "/album"}>
          <AlbumIcon color={isActive("/album")} />
          <Text $active={locationNow.pathname.startsWith("/album")}>앨범</Text>
        </MenuBtn>
        <MenuBtn onClick={() => goToMenu("/my/booth-records")} disabled={locationNow.pathname === "/my"}>
          <MyIcon color={isActive("/my")} />
          <Text $active={locationNow.pathname.startsWith("/my")}>MY</Text>
        </MenuBtn>
      </Container>
      {isOpen && (
        //로그인 모달창
        <Modal
          sub="3초 로그인으로 추억을 저장해보세요"
          title="해당 기능은 로그인 후에 이용할 수 있어요"
          option={["로그인하기", "괜찮아요"]}
          onClick={() => setIsOpen(false)}
          onLeftOptionClick={() => navigate("/login")}
          onRightOptionClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default NavBar;

const Container = styled.nav`
  ${tw`fixed bottom-0 flex flex-row [max-width: 480px] w-full h-[60px] px-[53px] items-center justify-between bg-background z-20`}
`;

const MenuBtn = styled.button`
  ${tw`flex flex-col items-center w-[25px]`}
`;

const Text = styled.span<{ $active: boolean }>`
  ${tw`font-display font-medium text-[9px] mt-0.5`}
  ${(props) => (props.$active ? tw`text-main` : tw`text-gray200`)}
`;
