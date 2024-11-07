import tw from "twin.macro";
import styled from "styled-components";
import BackIcon from "../../assets/icons/back-icon";
type HeaderProps = {
  mainText: string;
  handleBackClick: () => void;
  subText?: string;
};
function Header({ mainText, subText, handleBackClick }: HeaderProps) {
  return (
    <Container>
      <div className="back-icon" onClick={handleBackClick}>
        <BackIcon color="grey" />
      </div>
      <div className="flex flex-col items-center">
        <span className="booth-title">{mainText}</span>
        <span className="sub-text">{subText}</span>
      </div>
    </Container>
  );
}

export default Header;
const Container = styled.header`
  ${tw`w-full [max-width: 480px] py-[13px] fixed z-10 top-0 border-b-2 border-b-gray100 flex items-center justify-center bg-[#FFFFFF]`}

  .back-icon {
    ${tw`absolute left-[10px]`}
  }

  .booth-title {
    ${tw`font-display font-semibold text-[20px] text-gray700`}
  }
  .sub-text {
    ${tw`font-medium text-[12px] text-gray400`}
  }
`;
