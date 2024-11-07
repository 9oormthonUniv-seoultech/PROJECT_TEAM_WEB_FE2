import tw from "twin.macro";
import styled from "styled-components";
type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

function NextButton({ text, onClick, disabled }: ButtonProps) {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {text}
    </Container>
  );
}

export default NextButton;
const Container = styled.button`
  ${tw`w-[280px] h-[60px] bg-main rounded-lg flex justify-center items-center font-semibold text-[20px] text-[#FFFFFF] mx-auto `}
  &:disabled {
    ${tw`bg-gray400`}
  }
`;
