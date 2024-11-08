import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import CompleteSvg from "../../assets/images/share-complete.svg?react";
function ShareCompleteScreen() {
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
      navigate("/album");
    }
  }, [opacity]);
  return (
    <Layout>
      <CompleteSvg />
      <span className="w-[145px] text-gray400 mt-1">링크가 복사됐어요!</span>
    </Layout>
  );
}

export default ShareCompleteScreen;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center  justify-center font-display bg-[#FFFFFF]`}
`;
