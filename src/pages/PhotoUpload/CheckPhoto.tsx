import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import BackIcon from "../../assets/icons/back-icon.tsx";
import NextButton from "../../components/Common/NextButton.tsx";

function CheckPhoto() {
  const navigate = useNavigate();

  const location = useLocation();
  const { imageFile } = location.state;

  const handleNextClick = () => {
    navigate("/photo-review", { state: { imageFile: imageFile } });
  };

  return (
    <Container>
      <Header>
        <Title>사진 확인</Title>
        <button className="absolute left-[10px] top-[35%]" onClick={() => navigate(-1)}>
          <BackIcon color="white" />
        </button>
      </Header>

      <img src={URL.createObjectURL(imageFile)} alt="QR 사진" className="img-container" />
      <NextButton onClick={handleNextClick} text="다음" />
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-gray600 flex flex-col w-full h-[100vh] items-center pb-[60px] justify-between`}
  // overflow-x: hidden;

  .img-container {
    ${tw`w-[70%]`}
  }
`;

const Header = styled.header`
  ${tw`relative w-full flex flex-col items-center justify-center h-[80px] border-b-[1.5px] border-b-background`}
`;

const Title = styled.div`
  ${tw`text-[#FFFFFF] text-2xl font-semibold font-['Pretendard']`}
`;

export default CheckPhoto;
