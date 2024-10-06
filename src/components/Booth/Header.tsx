import tw from "twin.macro";
import styled from "styled-components";
import BackIcon from "../../assets/icons/back-icon";
import { useNavigate } from "react-router-dom";

function Header({ name }: { name: string }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <div className="back-icon" onClick={handleBackClick}>
        <BackIcon />
      </div>
      <span className="booth-title">{name}</span>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  ${tw`w-full [max-width: 480px] fixed z-10 top-0 h-[60px] border-b-2 border-b-gray100 flex items-center justify-center bg-[#FFFFFF]`}

  .back-icon {
    ${tw`absolute left-[10px]`}
  }

  .booth-title {
    ${tw`font-display font-semibold text-[22px] text-gray700`}
  }
`;
