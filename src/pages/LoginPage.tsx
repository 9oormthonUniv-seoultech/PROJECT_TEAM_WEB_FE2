/// <reference types="vite-plugin-svgr/client" />
import LoginBanner from "../assets/images/login-banner.svg?react";
import KaKaoImg from "../assets/images/kakao.svg?react";
import tw from "twin.macro";
import styled from "styled-components";
function LoginPage() {
  const handleLogin = () => {
    window.location.href = "https://pocket4cut.link/oauth2/authorization/kakao";
  };
  return (
    <Container>
      <LoginBanner />
      <LoginBtn onClick={handleLogin}>
        <KaKaoImg />
        <span>카카오톡으로 계속하기</span>
      </LoginBtn>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center w-full h-[100vh] bg-[#FFFFFF]`}
`;

const LoginBtn = styled.button`
  ${tw`w-[310px] h-[56px] flex flex-row items-center bg-[#FBE300] rounded-[8px] justify-center mt-[30px] `}

  span {
    ${tw`font-display font-semibold text-16 text-[#000000] cursor-pointer ml-3.5`}
  }
`;
