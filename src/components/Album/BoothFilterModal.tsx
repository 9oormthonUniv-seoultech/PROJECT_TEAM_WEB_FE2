import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import CloseIcon from "../../assets/icons/close-icon";
import OptionButton from "../Common/OptionButton.tsx";
import NextButton from "../Common/NextButton.tsx";
import { BoothCategories } from "../../data/booth-categories.ts";

type BoothFilterProps = {
  photoBooth: string;
  setPhotoBooth: React.Dispatch<React.SetStateAction<string>>;
  setIsBoothFilterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BoothFilterModal({ photoBooth, setPhotoBooth, setIsBoothFilterModalOpen }: BoothFilterProps) {
  const photoBoothOptions = BoothCategories.map((item) => item.label);

  return (
    <Overlay>
      <Container>
        <header className="relative w-full flex flex-col items-center mb-12">
          <div className="flex items-center h-[60px]">
            <span className="font-semibold text-gray700 text-[22px]">포토부스 필터</span>
            <CloseButton onClick={() => setIsBoothFilterModalOpen(false)}>
              <CloseIcon color={"grey"} />
            </CloseButton>
          </div>
          <hr className="h-[1.5px] w-full bg-gray200 " />
        </header>

        <OptionContainer>
          {photoBoothOptions.map((booth) => (
            <OptionButton
              key={booth}
              onClick={() => setPhotoBooth(booth)}
              isActive={photoBooth === booth}
              label={booth}
              // size={"small"}
            />
          ))}
        </OptionContainer>
        <div className="mt-4">
          <NextButton text={"확인"} onClick={() => setIsBoothFilterModalOpen(false)} />
        </div>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.div`
  ${tw`
    w-full h-full bg-[black] bg-opacity-40
    fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
    flex justify-center items-center
    z-[30]
  `}
`;

const Container = styled.div`
  ${tw`bg-background flex flex-col items-center min-h-screen w-full max-w-[480px] m-auto`}
  overflow-x: hidden;
`;

const OptionContainer = styled.div`
  ${tw`grid grid-cols-2 gap-4`}
`;

const CloseButton = styled.button`
  ${tw`absolute right-[10px]`}
`;
