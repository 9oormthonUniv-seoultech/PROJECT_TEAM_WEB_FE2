import { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
type Props = {
  message: string;
  onClose: () => void;
};
function Alert({ message, onClose }: Props) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);
  return (
    <Overlay>
      <Container>
        <span className="title">{message}</span>
        <button onClick={onClose}>확인</button>
      </Container>
    </Overlay>
  );
}

export default Alert;
const Overlay = styled.div`
  ${tw`
        w-full h-full bg-[black] bg-opacity-20 
        fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
        z-[30] flex-col items-center
    `}
`;

const Container = styled.div`
  ${tw`w-[320px] h-[170px] flex flex-col  bg-gray100 font-display p-[20px] rounded-[8px] mt-3 mx-auto justify-between`}

  .title {
    ${tw`font-medium text-[18px] text-gray700 mt-1`}
  }
  button {
    ${tw`w-full h-[50px] rounded-[8px] font-display font-semibold text-[16px] bg-main text-[#FFFFFF]`}
  }
`;
