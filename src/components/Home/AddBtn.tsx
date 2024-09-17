import tw from "twin.macro";
import styled from "styled-components";
import AddSvg from "../../assets/images/add.svg?react";
import { useNavigate } from "react-router-dom";
function AddBtn() {
  const navigate = useNavigate();

  const goToPhotoUpload = () => {
    navigate("/photo-upload");
  };
  return (
    <Container onClick={goToPhotoUpload}>
      <AddSvg />
      <span>추억 저장하기</span>
    </Container>
  );
}

export default AddBtn;

const Container = styled.button`
  ${tw`absolute bottom-11 z-10 w-[280px] h-[57px] flex flex-row items-center justify-center bg-main rounded-[8px] `}
  left: 50%;
  transform: translateX(-50%);

  span {
    ${tw`ml-2 font-display font-semibold text-[22px] text-[#FFFFFF]`}
  }
`;
