import styled from "styled-components";
import tw from "twin.macro";
import X from "../../assets/images/X.svg?react";
import React, { useEffect, useState } from "react";

type ModalProps = {
  hashTags: string[];
  closeModal: () => void;
  setHashTags: React.Dispatch<React.SetStateAction<string[]>>;
};

function HashtagModal({ hashTags, closeModal, setHashTags }: ModalProps) {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [countHash, setCountHash] = useState(0);

  const [hash1, setHash1] = useState(hashTags[0] ?? "");
  const [hash2, setHash2] = useState(hashTags[1] ?? "");
  const [hash3, setHash3] = useState(hashTags[2] ?? "");

  useEffect(() => {
    // 해시태그가 채워진 것만 카운트
    const count = [hash1, hash2, hash3].filter((hash) => hash.length > 0).length;
    setCountHash(count);
  }, [hash1, hash2, hash3]);

  const confirm = () => {
    setHashTags([hash1, hash2, hash3]);
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
        <Title>해시태그 추가</Title>
        <SubText>최대 3개까지 #를 추가해볼 수 있어요!</SubText>
        <CloseButton onClick={closeModal}>
          <X />
        </CloseButton>
        <HashtagContainer>
          <div className="flex items-center">
            <Hash hasText={hash1.length > 0}>#</Hash>
            <HashtagItem hasText={hash1.length > 0}>
              <StyledInput placeholder="기념일" value={hash1} onChange={(e) => setHash1(e.target.value)} />
            </HashtagItem>
          </div>
          <div className="flex items-center">
            <Hash hasText={hash2.length > 0}>#</Hash>
            <HashtagItem hasText={hash2.length > 0}>
              <StyledInput placeholder="장소" value={hash2} onChange={(e) => setHash2(e.target.value)} />
            </HashtagItem>
          </div>
          <div className="flex items-center">
            <Hash hasText={hash3.length > 0}>#</Hash>
            <HashtagItem hasText={hash3.length > 0}>
              <StyledInput placeholder="이름" value={hash3} onChange={(e) => setHash3(e.target.value)} />
            </HashtagItem>
            <HashtagCount>({countHash}/3)</HashtagCount>
          </div>
        </HashtagContainer>
        <ConfirmButton onClick={confirm}>확인</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default HashtagModal;

const ModalOverlay = styled.div`
  ${tw`fixed inset-0 flex justify-center items-center bg-opacity-50 z-50`}
  background-color: rgba(23, 28, 36, 0.8);
`;

const ModalContent = styled.div`
  ${tw`w-full h-auto relative bg-background rounded-tl-[26px] rounded-tr-[26px] p-8 flex flex-col items-center max-w-[480px]`}
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

const HashtagContainer = styled.div`
  ${tw`space-y-4 my-4 flex flex-col items-start`}
`;

type HashtagItemProps = {
  hasText: boolean;
};

const HashtagItem = styled.div<HashtagItemProps>`
  ${tw`w-[139px] h-[42px] flex items-center rounded-lg pl-4 text-gray400 text-lg font-medium`}
  background-color: ${({ hasText }) => (hasText ? "#e1e0ff" : "#e9eaee")};
`;

const Hash = styled.div<HashtagItemProps>`
  ${tw`mr-2 text-[22px] font-semibold`}
  color: ${({ hasText }) => (hasText ? "#5453ee" : "#676f7b")};
`;

const HashtagCount = styled.div`
  ${tw`text-left text-[#b0b1b3] text-xs font-medium mt-2 ml-[10px]`}
`;

const ConfirmButton = styled.button`
  ${tw`w-[225.81px] h-[50px] bg-[#5453ee] rounded-md text-[#FFFFFF] text-[22px] font-medium mt-3`}
`;

const StyledInput = styled.input`
  ${tw`w-full h-full rounded-lg text-main`}
  background-color: transparent;
  border: none;
  outline: none;
`;
