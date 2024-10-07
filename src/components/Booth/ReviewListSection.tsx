import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";
function ReviewListSection() {
  return (
    <Container>
      <span className="title">
        리뷰 <span className="text-gray400">567</span>
      </span>
      <ReviewItem />
      <hr className="w-full bg-gray300 h-[1px]" />
    </Container>
  );
}

export default ReviewListSection;
const Container = styled.div`
  ${tw`flex flex-col w-full px-[18px] py-[30px]`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700 mb-2`}
  }
`;
