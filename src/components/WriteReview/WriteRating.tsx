import tw from "twin.macro";
import styled from "styled-components";
import Rating from "../Common/Rating";
import { useState } from "react";

function WriteRating() {
  const [rate, setRate] = useState<number>(0);

  const getRatingText = () => {
    if (rate === 0) return "별점을 선택해주세요";
    if (rate <= 1) return "아쉬워요";
    if (rate <= 2) return "조금 아쉬워요";
    if (rate <= 3) return "무난해요";
    if (rate <= 4) return "만족해요";
    if (rate <= 5) return "완전만족해요";
  };
  console.log(rate);
  return (
    <RatingBox>
      <Rating w={"35"} h={"35"} readonly={false} rate={rate} setRate={setRate} />
      <span className="sub-text">{getRatingText()}</span>
    </RatingBox>
  );
}

export default WriteRating;

const RatingBox = styled.div`
  ${tw`relative flex flex-col items-center justify-center  w-[300px] h-[100px] rounded-[9px] bg-main mt-[10px] mx-auto`}
  .sub-text {
    ${tw`font-normal text-[16px] text-[#FFFFFF] mt-[8px]`}
  }
`;
