/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.svg?react";
import ServiceName from "../assets/images/name.svg?react";
import tw from "twin.macro";
import styled from "styled-components";

function SplashScreen() {
  const [opacity, setOpacity] = useState(100);
  const navigate = useNavigate();
  useEffect(() => {
    if (opacity > 0) {
      const timer = setTimeout(() => {
        setOpacity((prev) => Math.max(prev - 8, 0)); // 상태 업데이트
      }, 200);

      return () => clearTimeout(timer); // 타이머 정리
    } else {
      // 페이지 이동
      navigate("/home");
    }
  }, [opacity]);

  return (
    <Container style={{ opacity: opacity / 100 }}>
      <Logo />
      <ServiceName tw="mt-4" />
    </Container>
  );
}

export default SplashScreen;

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center w-full h-[100vh]`}
`;
