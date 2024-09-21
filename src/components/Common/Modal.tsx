import tw from "twin.macro";
import styled from "styled-components";

type ModalType = {
  sub?: string;
  title: string;
  option: string[];
  onClick?: () => void;
  onLeftOptionClick: () => void;
  onRightOptionClick: () => void;
};

function Modal({ sub, title, option, onClick, onLeftOptionClick, onRightOptionClick }: ModalType) {
  return (
    <Overlay onClick={onClick}>
      <Container>
        <span className="sub">{sub ? sub : ""}</span>
        <span className="title">{title}</span>
        <RowBox>
          <button className="left-btn" onClick={onLeftOptionClick}>
            {option[0]}
          </button>
          <button className="right-btn" onClick={onRightOptionClick}>
            {option[1]}
          </button>
        </RowBox>
      </Container>
    </Overlay>
  );
}

export default Modal;
const Overlay = styled.div`
  ${tw`
        w-full h-full bg-[black] bg-opacity-40 
        fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
        flex justify-center items-center
        z-[20]
    `}
`;
const Container = styled.div`
  ${tw`w-[95] h-[170px] flex flex-col  bg-gray100 font-display p-[20px] rounded-[8px]`}

  .sub {
    ${tw`font-normal text-[12px] text-gray400`}
  }
  .title {
    ${tw`font-medium text-[18px] text-gray700 mt-1`}
  }
  .left-btn {
    ${tw`w-1/2 h-[50px] rounded-[8px] font-display font-semibold text-[16px] bg-main text-[#FFFFFF]`}
  }
  .right-btn {
    ${tw`w-1/2 h-[50px] rounded-[8px] font-display font-semibold text-[16px] bg-[#FFFFFF] text-gray400`}
  }
`;

const RowBox = styled.div`
  ${tw`w-full flex flex-row items-center gap-[10px] mt-[30px]`}
`;
