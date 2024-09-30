import { useState } from "react";
import {useNavigate} from "react-router-dom";
import ShareComplete from '../../assets/images/share-complete.png';
import ShareLogo from "../../assets/images/share-logo.svg?react";
import styled from "styled-components";
import tw from "twin.macro";

function PhotoCheck() {
  const navigate = useNavigate();

  // State to track the current step
  const [step, setStep] = useState(1);

  // Function to handle the next button click
  const handleNextClick = () => {
    setStep((prevStep) => prevStep + 1); // Increment the step state
  };

  const handleBack = () => {
    navigate("/photo-review")
  }

  const handleBackStep = () => {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <>
      {step === 1 && (
        <Container>
          <Header>
            <div className="relative flex flex-row w-full justify-center items-center">
              <Title>사진 확인</Title>
              <button onClick={handleBack}>
                <svg
                  className="absolute left-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2L7 11.7561L17 22"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <DateText>2024년 8월 3일</DateText>
            <svg
              width="390"
              height="2"
              viewBox="0 0 390 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-5"
            >
              <path
                d="M-6 1C-2.4 1 267.167 1 401.5 1"
                stroke="#E9EAEE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Header>
          <img src="https://via.placeholder.com/327x497" alt="QR 사진" height="497" width="327" />
          <ButtonContainer onClick={() => handleNextClick()}>
            <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">다음</div>
          </ButtonContainer>
        </Container>
      )}

      {step === 2 && (
        <Container>
          <Header>
            <div className="relative flex flex-row w-full justify-center items-center">
              <Title>사진 확인</Title>
              <button onClick={handleBackStep}>
                <svg
                  className="absolute left-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2L7 11.7561L17 22"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <DateText>2024년 8월 3일</DateText>
            <svg
              width="390"
              height="2"
              viewBox="0 0 390 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-5"
            >
              <path
                d="M-6 1C-2.4 1 267.167 1 401.5 1"
                stroke="#E9EAEE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Header>
          <div className="relative items-center gap-2 inline-flex">
            <div className="px-5 py-2 bg-[#e9eaee] rounded-3xl border border-[#676f7b] flex-col justify-start items-center gap-5 inline-flex">
              <div className="text-[#676f7b] text-base font-normal font-['Pretendard']"># 기념일</div>
            </div>
            <div className="px-5 py-2 bg-[#e9eaee] rounded-3xl border border-[#676f7b] flex-col justify-start items-center gap-5 inline-flex">
              <div className="text-[#676f7b] text-base font-normal font-['Pretendard']"># 장소</div>
            </div>
            <div className="px-5 py-2 bg-[#e9eaee] rounded-3xl border border-[#676f7b] flex-col justify-start items-center gap-5 inline-flex">
              <div className="text-[#676f7b] text-base font-normal font-['Pretendard']"># 이름</div>
            </div>
          </div>
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
          <img className="mt-5" src="https://via.placeholder.com/245x371" alt="QR 사진" height="371" width="245" />
          <div className="mt-8 p-[15px] relative bg-[#e9eaee] rounded-lg gap-[15px] inline-flex">
            <div className="w-[291px] text-[#676f7b] text-base font-normal font-['Pretendard']">
              오늘 있었던 일들을 기록해보세요
            </div>
          </div>
          <ButtonContainer onClick={() => handleNextClick()}>
            <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">다음</div>
          </ButtonContainer>
        </Container>
      )}

      {step === 3 && (
        <Container>
          <Header>
            <div className="relative flex flex-row w-full justify-center items-center">
              <Title>사진 확인</Title>
              <button onClick={handleBackStep}>
                <svg
                  className="absolute left-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2L7 11.7561L17 22"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <DateText>2024년 8월 3일</DateText>
            <svg
              width="390"
              height="2"
              viewBox="0 0 390 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-5"
            >
              <path
                d="M-6 1C-2.4 1 267.167 1 401.5 1"
                stroke="#E9EAEE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Header>
          <ShareLogo className="mt-3"></ShareLogo>
          <div className="relative mt-6 justify-start items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 bg-[#e9eaee] rounded-[3px] border border-black" />
            <div className="text-white text-lg font-normal font-['Pretendard']">해시태그, 사진 기록까지 공유하기</div>
          </div>
          <ButtonContainer onClick={() => handleNextClick()}>
            <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">다음</div>
          </ButtonContainer>
          <ButtonContainer2 className="mt-0" onClick={() => navigate("/home")}>
            <div className="text-center text-[#676f7b] text-[22px] font-semibold font-['Pretendard']">
              다음에 할게요
            </div>
          </ButtonContainer2>
        </Container>
      )}

      {step === 4 && (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
          <img src={ShareComplete} alt="share-complete" width="282" height="296" />
          <span className="text-gray400">공유가 완료됐어요</span>
        </div>
      )}
    </>
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

const ButtonContainer2 = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#F9F9FB] rounded-lg mt-3 flex justify-center items-center`}
`;

export default PhotoCheck;
