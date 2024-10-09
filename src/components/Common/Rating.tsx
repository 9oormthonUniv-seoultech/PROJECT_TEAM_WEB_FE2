import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { FaStar } from "react-icons/fa6";

type RatingProps = {
  w: string;
  h: string;
  readonly: boolean;
  rate?: number; // Accept ratings with decimals
  setRate?: React.Dispatch<React.SetStateAction<number>>;
};

function Rating({ w, h, readonly, rate, setRate }: RatingProps) {
  // const [rating, setRating] = useState(rate || 0);
  const handleClickStar = (index: number) => {
    if (!readonly && setRate) {
      setRate(index + 1);
    }
  };
  const calculateRate = (rate: number, index: number) => {
    if (rate >= index) {
      return "100%";
    }
    if (Math.floor(index - rate) > 0) {
      return "0%";
    }
    const percentage = ((rate % 1) * 100).toFixed();
    return `${percentage}%`;
  };
  return (
    <div className={`flex`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div className={`relative w-[${w}px] h-[${h}px] cursor-pointer`} key={index}>
          <FaStar
            size={w}
            onClick={() => handleClickStar(index)}
            className={` ${!readonly && rate! >= index + 1 ? "text-yellow" : "text-purple"}`}
          />
          {readonly && (
            <span
              style={rate ? { width: calculateRate(rate, index + 1) } : {}}
              className={`h-[${h}px] absolute left-0 top-0 overflow-hidden`}
            >
              <FaStar size={w} className={" text-yellow"} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Rating;
