import tw from "twin.macro";
import styled from "styled-components";
import HomeIcon from "../../assets/icons/home-icon";
import AlbumIcon from "../../assets/icons/album-icon";
import MyIcon from "../../assets/icons/my-icon";

import { useLocation, useNavigate } from "react-router-dom";
function NavBar() {
  const locationNow = useLocation();
  const navigate = useNavigate();

  const isActive = (menu: string) => {
    if (locationNow.pathname === menu) {
      return "#5453EE";
    } else {
      return "#C7C9CE";
    }
  };

  return (
    <Container>
      <MenuBtn onClick={() => navigate("/home")} disabled={locationNow.pathname === "/home"}>
        <HomeIcon color={isActive("/home")} />
        <Text $active={locationNow.pathname === "/home"}>홈</Text>
      </MenuBtn>
      <MenuBtn onClick={() => navigate("/album")} disabled={locationNow.pathname === "/album"}>
        <AlbumIcon color={isActive("/album")} />
        <Text $active={locationNow.pathname === "/album"}>앨범</Text>
      </MenuBtn>
      <MenuBtn onClick={() => navigate("/my")} disabled={locationNow.pathname === "/my"}>
        <MyIcon color={isActive("/my")} />
        <Text $active={locationNow.pathname === "/my"}>MY</Text>
      </MenuBtn>
    </Container>
  );
}

export default NavBar;

const Container = styled.nav`
  ${tw`fixed bottom-0 flex flex-row [max-width: 480px] w-full h-[60px] px-[53px] items-center justify-between bg-background`}
`;

const MenuBtn = styled.button`
  ${tw`flex flex-col items-center w-[25px]`}
`;

const Text = styled.span<{ $active: boolean }>`
  ${tw`font-display font-medium text-[9px] mt-0.5`}
  ${(props) => (props.$active ? tw`text-main` : tw`text-gray200`)}
`;
