import styled from "styled-components";
import tw from "twin.macro";
import X from "../../assets/images/X.svg?react";
import { useEffect, useState } from "react";

type ModalProps = {
  closeModal: () => void;
  setRecords: (tags: string) => void;
  records: string;
};

function RecordModal({ closeModal, setRecords, records }: ModalProps) {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [words, setWords] = useState(records);
  const confirm = () => {
    setRecords(words);

    closeModal();
  };

  useEffect(() => {
    // 키보드가 열릴 때 visualViewport 이벤트 리스너 추가
    const handleResize = () => {
      const viewportHeight = window.innerHeight;
      const visualViewport = window.visualViewport;

      if (visualViewport) {
        const visualViewportHeight = visualViewport.height;

        // 키보드가 나타날 때 높이를 계산하여 모달 위치 조정
        if (visualViewportHeight < viewportHeight) {
          setKeyboardHeight(viewportHeight - visualViewportHeight);
        } else {
          setKeyboardHeight(0);
        }
      }
    };

    // visualViewport가 존재할 경우에만 리스너 등록
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
    }

    return () => {
      // visualViewport가 존재할 경우에만 리스너 제거
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <ModalOverlay>
      <ModalContent style={{ transform: `translateY(-${keyboardHeight}px)` }}>
        <Title>기록 추가</Title>
        <SubText>자유롭게 사진에 대한 기록을 추가해보세요!</SubText>
        <CloseButton onClick={closeModal}>
          <X />
        </CloseButton>
        <RecordContainer>
          <div className="w-full h-[49px] p-[5px] bg-[#e9eaee] rounded-lg justify-start items-start gap-[15px] inline-flex">
            <StyledInput placeholder="기념일" value={words} onChange={(e) => setWords(e.target.value)} />
          </div>
        </RecordContainer>
        <ConfirmButton onClick={confirm}>확인</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default RecordModal;

const ModalOverlay = styled.div`
  ${tw`fixed inset-0 flex justify-center items-center bg-opacity-50 z-50`}
  background-color: rgba(23, 28, 36, 0.8);
`;

const ModalContent = styled.div`
  ${tw`w-full h-auto relative bg-background rounded-tl-[26px] rounded-tr-[26px] p-8 flex flex-col items-center max-w-[480px]`}
  position: fixed;
  bottom: 0;
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

const RecordContainer = styled.div`
  ${tw`space-y-4 my-4 flex flex-col items-start w-full`}
`;

const ConfirmButton = styled.button`
  ${tw`w-full h-[50px] bg-[#5453ee] rounded-md text-[#FFFFFF] text-[22px] font-medium mt-3`}
`;

const StyledInput = styled.input`
  ${tw`w-full h-full rounded-lg text-gray400 bg-gray100 flex-grow`}
`;
