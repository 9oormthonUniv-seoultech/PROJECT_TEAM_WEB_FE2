import styled from "styled-components";
import tw from "twin.macro";
import BackIcon from "../../assets/icons/back-icon.tsx";
import { useState } from 'react';
import HashModal from "../../components/PhotoCheck/HashModal.tsx";

interface Step2Props {
  handleNextClick : () => void;
  handleBackStep : () => void;
}

function PhotoCheck2({ handleNextClick, handleBackStep }: Step2Props) {
  const [isHashModalOpen, setIsHashModalOpen] = useState(false);
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);

  const openHashModal = () => {
    setIsHashModalOpen(true);
  };

  const closeHashModal = () => {
    setIsHashModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <div className="relative flex flex-row w-full justify-center items-center">
          <Title>사진 확인</Title>
          <button onClick={handleBackStep}>
            <div className="absolute left-0">
              <BackIcon color="white" />
            </div>
          </button>
        </div>
        <DateText>2024년 8월 3일</DateText>
        <svg width="390" height="2" viewBox="0 0 390 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-5">
          <path
            d="M-6 1C-2.4 1 267.167 1 401.5 1"
            stroke="#E9EAEE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Header>

      {/*<div className="relative items-center gap-2 inline-flex">*/}
      {/*  <div className="px-5 py-2 bg-[#e9eaee] rounded-3xl border border-[#676f7b] flex-col justify-start items-center gap-5 inline-flex">*/}
      {/*    <div className="text-[#676f7b] text-base font-normal font-['Pretendard']"># 기념일</div>*/}
      {/*  </div>*/}
      {/*  <div className="px-5 py-2 bg-[#e9eaee] rounded-3xl border border-[#676f7b] flex-col justify-start items-center gap-5 inline-flex">*/}
      {/*    <div className="text-[#676f7b] text-base font-normal font-['Pretendard']"># 장소</div>*/}
      {/*  </div>*/}
      {/*  <div className="px-5 py-2 bg-[#e9eaee] rounded-3xl border border-[#676f7b] flex-col justify-start items-center gap-5 inline-flex">*/}
      {/*    <div className="text-[#676f7b] text-base font-normal font-['Pretendard']"># 이름</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="relative left-[-60px]">
        <div className="left-[1.50px] top-0 absolute rounded-lg justify-start items-start gap-2 inline-flex">
          <button
            className="px-5 py-2 bg-[#5453ee] rounded-lg flex-col justify-start items-center gap-5 inline-flex"
            onClick={openHashModal}
          >
            <div className="text-white text-base font-semibold font-['Pretendard']">
              # 추가하기
            </div>
          </button>
        </div>
        <text className="left-[118px] top-[23px] absolute text-[#c7c9ce] text-xs font-normal font-['Pretendard']">
          0/3
        </text>
        <div className="relative mt-10">
          <svg width="246" height="34" viewBox="0 0 246 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.9085 1.09121C23.7089 0.03951 25.2911 0.0395091 26.0915 1.0912L34.6135 12.2888C35.6155 13.6054 34.6765 15.5 33.0219 15.5H15.9781C14.3235 15.5 13.3845 13.6054 14.3865 12.2888L22.9085 1.09121Z"
              fill="white"
            />
            <rect y="8" width="246" height="26" rx="13" fill="white" />
            <text
              x="50%"
              y="62%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#676f7b"
              fontSize="12"
              fontFamily="Pretendard"
              fontWeight="normal"
            >
              해시태그를 추가하면 사진을 쉽게 찾을 수 있어요
            </text>
          </svg>
        </div>
      </div>
      {isHashModalOpen && (
        <HashModal
          closeModal={closeHashModal}
        />
      )}
      <img className="mt-5" src="https://via.placeholder.com/245x250" alt="QR 사진" height="200" width="245" />
      <div className="mt-8 p-[10px] relative bg-[#e9eaee] rounded-lg inline-flex">
        <button className="w-[291px] text-[#676f7b] text-base font-normal font-['Pretendard']">
          클릭하여 오늘 있었던 일들을 기록해보세요
        </button>
      </div>
      <ButtonContainer onClick={handleNextClick}>
        <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">다음</div>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
    ${tw`bg-gray600 flex flex-col w-full min-h-screen items-center`}
    overflow-x: hidden;
`;

const Header = styled.header`
    ${tw`w-full flex flex-col place-items-center p-6`}
`;

const Title = styled.div`
    ${tw`text-[#FFFFFF] text-2xl font-semibold font-['Pretendard']`}
`;

const DateText = styled.div`
    ${tw`opacity-70 text-[#676f7b] text-xs font-medium font-['Pretendard'] mt-1`}
`;

const ButtonContainer = styled.button`
    ${tw`w-[280px] h-[62px] bg-[#5453ee] rounded-lg mt-8 flex justify-center items-center`}
`;

export default PhotoCheck2;
