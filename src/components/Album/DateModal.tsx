import styled from "styled-components";
import tw from "twin.macro";
import X from "../../assets/images/X.svg?react";
import { useState } from "react";

type ModalProps = {
  closeModal: () => void;
  setDate: (tags: string) => void;
}

export default function DateModal({ closeModal, setDate }: ModalProps) {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  
  const confirm = () => {
    setDate(year + "년 " + month + "월");
    closeModal();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>날짜 입력</Title>
        <SubText>사진을 찍은 날짜를 선택해주세요!</SubText>
        <CloseButton onClick={closeModal}>
          <X />
        </CloseButton>
        <DateContainer>
          <div className="h-[49px] p-[5px] bg-background rounded-lg flex items-center gap-[10px]">
            <StyledInput placeholder="0000" value={year} maxLength={4} onChange={(e) => setYear(e.target.value)} />
            <p className="text-gray400 font-bold">년</p>
            <StyledInput placeholder="00" value={month} maxLength={2} onChange={(e) => setMonth(e.target.value)} />
            <p className="text-gray400 font-bold">월</p>
          </div>
        </DateContainer>
        <ConfirmButton onClick={confirm}>확인</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  ${tw`fixed inset-0 flex justify-center items-center bg-opacity-50 z-50`}
  background-color: rgba(23, 28, 36, 0.8);
`;

const ModalContent = styled.div`
  ${tw`w-[390px] h-auto relative bg-background rounded-tl-[26px] rounded-tr-[26px] p-8 flex flex-col items-center`}
`;

const Title = styled.h2`
    ${tw`text-center text-[#171c24] text-[22px] font-semibold mb-2`}
`;

const SubText = styled.p`
    ${tw`text-center text-[#676f7b] text-xs font-medium mb-2`}
`;

const CloseButton = styled.button`
    ${tw`absolute top-4 right-4 w-[26px] h-[26px] bg-[#e9eaee] rounded-full`}
`;

const DateContainer = styled.div`
    ${tw`space-y-4 my-4 flex flex-col items-start`}
`;

const ConfirmButton = styled.button`
    ${tw`w-[225.81px] h-[50px] bg-[#5453ee] rounded-md text-[#FFFFFF] text-[22px] font-medium mt-3`}
`;

const StyledInput = styled.input`
  ${tw`w-full h-full rounded-lg text-center text-gray400 bg-gray100`}
`;