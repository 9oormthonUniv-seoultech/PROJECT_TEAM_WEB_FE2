import tw from "twin.macro";
import styled from "styled-components";
function ImagePage() {
  return (
    <Container>
      <div className="img-container"></div>
      <div className="img-container"></div>
      <div className="img-container"></div>
    </Container>
  );
}

export default ImagePage;

const Container = styled.div`
  ${tw`w-full p-[16px] grid gap-[8px] `}
  grid-template-columns: repeat(2, 1fr);

  .img-container {
    ${tw`w-full [aspect-ratio: 1 / 1] rounded-[8px] bg-gray200`}
  }
`;
