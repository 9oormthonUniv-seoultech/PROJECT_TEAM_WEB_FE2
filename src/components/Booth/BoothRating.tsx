import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Rating from "../Common/Rating";
import Polygon from "../../assets/images/polygon.svg?react";
import HighestSvg from "../../assets/images/highest-rate-character.svg?react";
import HighSvg from "../../assets/images/high-rate-character.svg?react";
import CommonSvg from "../../assets/images/common-rate-character.svg?react";
import LowSvg from "../../assets/images/low-rate-character.svg";
import LowestSvg from "../../assets/images/lowest-rate-character.svg";
function BoothRating() {
  const score = 3.5;

  const RenderCharacter = () => {
    if (score <= 1) return <LowestSvg />;
    if (score <= 2) return <LowSvg />;
    if (score <= 3) return <CommonSvg />;
    if (score <= 4) return <HighSvg />;
    if (score <= 5) return <HighestSvg />;
  };

  const getRatingText = () => {
    if (score <= 1) return "아쉬워요";
    if (score <= 2) return "조금 아쉬워요";
    if (score <= 3) return "무난해요";
    if (score <= 4) return "만족해요";
    if (score <= 5) return "완전만족해요";
  };

  return (
    <Wrapper>
      <span className="title">부스 만족도</span>
      <div className="flex gap-5 items-end">
        <RatingBox>
          <Rating w="24" h="24" readonly rate={score} />
          <span className="sub-text">{getRatingText()}</span>
          <div className="polygon">
            <Polygon />
          </div>
        </RatingBox>
        <RenderCharacter />
      </div>
    </Wrapper>
  );
}

export default BoothRating;

const Wrapper = styled.div`
  ${tw`w-full h-[175px] p-[18px] flex flex-col font-display`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700`}
  }
`;

const RatingBox = styled.div`
  ${tw`relative flex flex-col items-center justify-center min-w-[248px] w-[75%] h-[83px] rounded-[9px] bg-main mt-[10px] mr-1`}
  .sub-text {
    ${tw`font-normal text-[16px] text-[#FFFFFF] mt-[5px]`}
  }
  .polygon {
    ${tw`absolute left-[98%] top-4 `}
  }
`;
