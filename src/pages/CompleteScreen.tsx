import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import CompleteSvg from "../assets/images/complete-review.svg?react";
function CompleteScreen() {
  return (
    <Layout>
      <CompleteSvg />
      <span>소중한 의견이 등록되었어요!</span>
    </Layout>
  );
}

export default CompleteScreen;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center  justify-center font-display bg-[#FFFFFF]`}
`;
