import tw from "twin.macro";
import styled from "styled-components";
import NoImage from "../../assets/images/no-images.svg?react";
function ImagePage() {
  if (true) {
    return (
      <Container>
        <div className="img-container"></div>
        <div className="img-container"></div>
        <div className="img-container"></div>
      </Container>
    );
  } else {
    return (
      <div className="w-full flex flex-col items-center mx-auto mt-20">
        <NoImage />
        <p className="text-gray400 mt-4">리뷰를 작성해 보세요</p>
      </div>
    );
  }
}

export default ImagePage;

const Container = styled.div`
  ${tw`w-full p-[16px] grid gap-[8px] `}
  grid-template-columns: repeat(2, 1fr);

  .img-container {
    ${tw`w-full [aspect-ratio: 1 / 1] rounded-[8px] bg-gray200`}
  }
`;
