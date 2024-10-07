import { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/icons/close-icon";

interface OptionProps {
  onClick: () => void;
  isActive: boolean;
  label: string;
  subLabel?: string;
}

const OptionComponent = ({ onClick, isActive, label, subLabel }: OptionProps) => {
  return (
    <Option onClick={onClick} isActive={isActive} label={label} subLabel={subLabel}>
      <div className="flex items-center gap-3">
        <CircleContainer>
          <CircleBorder isActive={isActive} />
          {isActive && <CircleInner />}
        </CircleContainer>
        <Label isActive={isActive}>{label}</Label>
      </div>
      {isActive && subLabel && <SubLabel>{subLabel}</SubLabel>}
    </Option>
  );
};

function PhotoUpload() {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
    console.log(`${option} 버튼이 클릭되었습니다.`);
  };

  const handleNext = () => {
    navigate("/qr-scan");
  };

  const handleClose = () => {
    navigate("/home");
  }

  return (
    <Container>
      <header className="w-[390px] h-[146px] relative bg-white mb-12">
        <div className="left-[150px] top-[82px] absolute text-[#171d24] text-2xl font-semibold font-['Pretendard']">
          사진 등록
        </div>
        <CloseButton onClick={handleClose}>
          <CloseIcon color={"grey"}/>
        </CloseButton>
        <svg width="390" height="2" viewBox="0 0 390 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0">
          <path
            d="M-6 1C-2.4 1 267.167 1 401.5 1"
            stroke="#E9EAEE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </header>

      <OptionContainer>
        <OptionComponent
          onClick={() => handleOptionClick("QR 인식")}
          isActive={activeOption === "QR 인식"}
          label="QR 인식"
          subLabel="QR 인식은 하루필름 매장만 가능해요"
        />
        <OptionComponent
          onClick={() => handleOptionClick("내 사진첩 불러오기")}
          isActive={activeOption === "내 사진첩 불러오기"}
          label="내 사진첩 불러오기"
        />
      </OptionContainer>
      <ButtonContainer onClick={() => handleNext()}>
        <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">다음</div>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-background flex flex-col items-center min-h-screen w-full`}
  overflow-x: hidden;
`;

const OptionContainer = styled.div`
  ${tw`flex flex-col mb-12 items-center`}
`;

const Option = styled.button<OptionProps>`
  ${tw`w-[267px] h-[90px] rounded-lg border mb-4 cursor-pointer transition-colors duration-200`}
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
  border-color: ${({ isActive }) => (isActive ? '#5453ee' : '#c7c9ce')};
`;

const CircleInner = styled.div`
  ${tw`absolute w-2.5 h-2.5 bg-[#5453ee] rounded-full`}
  left: 6px;
  top: 6px;
`;

const Label = styled.div<{ isActive: boolean }>`
  ${tw`text-base font-semibold font-['Pretendard']`}
  color: ${({ isActive }) => (isActive ? '#5453ee' : '#c7c9ce')};
`;

const SubLabel = styled.div`
  ${tw`text-[#5453ee] text-xs font-medium font-['Pretendard']`}
`;

const ButtonContainer = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#5453ee] rounded-lg mt-12 flex justify-center items-center`}
`;

const CloseButton = styled.button`
  ${tw`w-6 h-6 p-0.5 left-[345px] top-[85px] absolute justify-center items-center gap-2.5 inline-flex`}
`;

export default PhotoUpload;
