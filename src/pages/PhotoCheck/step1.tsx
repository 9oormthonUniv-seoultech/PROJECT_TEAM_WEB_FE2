import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import BackIcon from "../../assets/icons/back-icon.tsx";

interface Step1Props {
  handleNextClick: () => void;
  dateInfo: string;
}

function PhotoCheck1({ handleNextClick, dateInfo }: Step1Props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/photo-review");
  };

  return (
    <Container>
      <Header>
        <Title>사진 확인</Title>
        <DateText>{dateInfo}</DateText>
        <button className="absolute left-[10px] top-[35%]" onClick={handleBack}>
          <BackIcon color="white" />
        </button>
      </Header>

      <img src="https://via.placeholder.com/300x350" alt="QR 사진" height="350" width="300" className="m-auto" />
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
  ${tw`relative w-full flex flex-col items-center justify-center mb-12 h-[80px] border-b-[1.5px] border-b-background`}
`;

const Title = styled.div`
  ${tw`text-[#FFFFFF] text-2xl font-semibold font-['Pretendard']`}
`;

const DateText = styled.div`
  ${tw`opacity-70 text-[#676f7b] text-xs font-medium font-['Pretendard'] mt-1`}
`;

const ButtonContainer = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#5453ee] rounded-lg mt-8 mb-[72px] flex justify-center items-center`}
`;

export default PhotoCheck1;
