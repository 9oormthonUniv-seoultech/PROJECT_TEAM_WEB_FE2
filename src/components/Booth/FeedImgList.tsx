import tw from "twin.macro";
import styled from "styled-components";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getRecentImages } from "../../api/review";

function FeedImgList() {
  const { boothId } = useParams() as { boothId: string };
  const { isLoading, data: images } = useQuery({
    queryKey: ["getRecentImages", boothId],
    queryFn: () => getRecentImages(boothId),
  });
  const navigate = useNavigate();
  return (
    <Container>
      <RowBox>
        <RowBox className="w-[63px] gap-[2px]">
          <span className="title">사진</span>
          <span className="count">{images && images?.totalImageCount ? images?.totalImageCount : ""}</span>
        </RowBox>
        <MoreBtn onClick={() => navigate(`/home/${boothId}/image`)}>
          더보기
          <RightArrowIcon />
        </MoreBtn>
      </RowBox>
      {!isLoading && images && images.totalImageCount > 0 ? (
        <ImgBox>
          {images.filePaths.map((imagePath, index) => {
            if (index === 5) {
              const remainingImages = images.totalImageCount - 6;

              return (
                <OverlayContainer key={index}>
                  <img className="img-container" src={imagePath} />
                  <Overlay>
                    <span>+{remainingImages}</span>
                  </Overlay>
                </OverlayContainer>
              );
            }
            return <img className="img-container" src={imagePath} key={index} />;
          })}
        </ImgBox>
      ) : (
        <div>등록된 이미지가 없어요</div>
      )}
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
    ${tw`w-full [aspect-ratio: 1 / 1] rounded-[8px] bg-gray100`}
  }
`;
const OverlayContainer = styled.div`
  ${tw`relative w-full h-full`}
`;

const Overlay = styled.div`
  ${tw`absolute inset-0 bg-gray600 bg-opacity-40 flex items-center justify-center rounded-[8px]`}
  span {
    ${tw`text-[white] text-[16px] font-semibold`}
  }
`;
