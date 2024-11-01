import tw from "twin.macro";
import styled from "styled-components";
import RightArrowIcon from "../../assets/icons/right-arrow";

function FeedImgList() {
  return (
    <Container>
      <RowBox>
        <RowBox className="w-[63px] gap-[2px]">
          <span className="title">사진</span>
          <span className="count">60</span>
        </RowBox>
        <MoreBtn>
          더보기
          <RightArrowIcon />
        </MoreBtn>
      </RowBox>
      <ImgBox>
        <div className="img-container"></div>
        <div className="img-container"></div>
        <div className="img-container"></div>
        <div className="img-container"></div>
        <div className="img-container"></div>
      </ImgBox>
    </Container>
  );
}

export default FeedImgList;

const Container = styled.div`
  ${tw`flex flex-col w-full px-[18px] py-[30px]`}
`;

const RowBox = styled.div`
  ${tw`flex flex-row items-center justify-between font-display `}

  .title {
    ${tw`font-semibold text-[18px] text-gray700`}
  }
  .count {
    ${tw`font-semibold text-[18px] text-gray400`}
  }
`;

const MoreBtn = styled.button`
  ${tw`flex w-[70px] h-[26px] rounded-[30px] bg-gray200 font-normal text-[13px] text-[#FFFFFF] items-center justify-center gap-1`}
`;

const ImgBox = styled.div`
  ${tw`w-full grid gap-[10px] mt-[25px]`}
  grid-template-columns: repeat(3, 1fr);

  .img-container {
    ${tw`w-full [aspect-ratio: 1 / 1] rounded-[8px] bg-gray200`}
  }
`;
