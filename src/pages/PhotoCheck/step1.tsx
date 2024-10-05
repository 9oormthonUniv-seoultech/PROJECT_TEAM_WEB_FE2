import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import BackIcon from "../../assets/icons/back-icon.tsx";

interface Step1Props {
  handleNextClick: () => void;
}

function PhotoCheck1({ handleNextClick } : Step1Props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/photo-review");
  };

  return (
    <Container>
      <Header>
        <div className="relative flex flex-row w-full justify-center items-center">
          <Title>사진 확인</Title>
          <button onClick={handleBack}>
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
      <img src="https://via.placeholder.com/300x350" alt="QR 사진" height="350" width="300" />
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

export default PhotoCheck1;
