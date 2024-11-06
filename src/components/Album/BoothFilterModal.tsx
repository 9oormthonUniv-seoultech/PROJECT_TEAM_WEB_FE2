import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import CloseIcon from "../../assets/icons/close-icon";

type OptionProps = {
  onClick: () => void;
  isActive: boolean;
  label: string;
};

const OptionComponent = ({ onClick, isActive, label }: OptionProps) => {
  return (
    <Option onClick={onClick} isActive={isActive}>
      <div className="flex items-center gap-3">
        <CircleContainer>
          <CircleBorder isActive={isActive} />
          {isActive && <CircleInner />}
        </CircleContainer>
        <Label isActive={isActive}>{label}</Label>
      </div>
    </Option>
  );
};

type BoothFilterProps = {
  photoBooth: string;
  setPhotoBooth: React.Dispatch<React.SetStateAction<string>>;
  setIsBoothFilterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BoothFilterModal({ photoBooth, setPhotoBooth, setIsBoothFilterModalOpen }: BoothFilterProps) {
  const photoBoothOptions = [
    "하루필름", "포토매틱", "인생네컷", "포토시그니처", "셀픽스",
    "인생사진", "포토이즘", "포토이즘 박스", "포토그레이", "비룸"
  ];
  
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
            <OptionComponent
              key={booth}
              onClick={() => setPhotoBooth(booth)}
              isActive={photoBooth === booth}
              label={booth}
            />
          ))}
        </OptionContainer>
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
        /* 한 줄에 두 개씩 배치 */
`;

const Option = styled.button<OptionProps>`
    ${tw`w-[150px] h-[90px] rounded-lg border mb-4 cursor-pointer transition-colors duration-200`}
    padding: ${({ isActive }) => (isActive ? "23px 12px" : "8px 12px")};
    background-color: ${({ isActive }) => (isActive ? "#e1e0ff" : "transparent")};
    border-color: ${({ isActive }) => (isActive ? "#5453ee" : "#c7c9ce")};
    display: flex;
    flex-direction: ${({ isActive }) => (isActive ? "column" : "row")};
    justify-content: center;
    align-items: center;
    gap: ${({ isActive }) => (isActive ? "10px" : "12px")};
`;

const CircleContainer = styled.div`
    ${tw`w-[22px] h-[22px] relative`}
`;

const CircleBorder = styled.div<{ isActive: boolean }>`
    ${tw`absolute w-full h-full rounded-full border-2`}
    border-color: ${({ isActive }) => (isActive ? "#5453ee" : "#c7c9ce")};
`;

const CircleInner = styled.div`
    ${tw`absolute w-2.5 h-2.5 bg-[#5453ee] rounded-full`}
    left: 6px;
    top: 6px;
`;

const Label = styled.div<{ isActive: boolean }>`
    ${tw`text-base font-semibold font-['Pretendard']`}
    color: ${({ isActive }) => (isActive ? "#5453ee" : "#c7c9ce")};
`;

const CloseButton = styled.button`
    ${tw`absolute right-[10px]`}
`;