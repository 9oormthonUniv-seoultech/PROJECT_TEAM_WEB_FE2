import tw from "twin.macro";
import styled from "styled-components";
import AddSvg from "../../assets/images/add.svg?react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../Common/Modal";
import { useAuthStore } from "../../store/useAuthStore";
function AddBtn() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const goToPhotoUpload = () => {
    if (isLoggedIn) {
      navigate("/photo-upload");
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <Container onClick={goToPhotoUpload}>
        <AddSvg />
        <span>추억 저장하기</span>
      </Container>
      {isOpen && (
        //로그인 모달창
        <Modal
          sub="3초 로그인으로 추억을 저장해보세요"
          title="해당 기능은 로그인 후에 이용할 수 있어요"
          option={["로그인하기", "괜찮아요"]}
          onClick={() => setIsOpen(false)}
          onLeftOptionClick={() => navigate("/login")}
          onRightOptionClick={() => setIsOpen(false)}
        />
      )}
    </>
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
