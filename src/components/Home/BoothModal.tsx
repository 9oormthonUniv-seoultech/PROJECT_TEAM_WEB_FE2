import tw from "twin.macro";
import styled from "styled-components";
import LayerBar from "../../assets/images/layer.svg?react";
import StarIcon from "../../assets/icons/star-icon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBoothInfo, getBoothModalInfo } from "../../api/booth";
import { getLogoUrl } from "../../hooks/getImageUrl";
import useBoothFilterStore from "../../store/useBoothFilterStore";
import { getDistance } from "../../hooks/getLocation";

function BoothModal({ boothId }: { boothId: string }) {
  const [currentY, setCurrentY] = useState(0);
  const navigate = useNavigate();

  const { lat, lng } = useBoothFilterStore();
  // 모달 열리는 애니메이션 실행
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 스크롤 비활성화
    setCurrentY(0); // 처음에 열릴 때 0으로 설정하여 애니메이션 실행
    return () => {
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 활성화
    };
  }, []);

  //특정 포토부스 정보 조회 api 호출
  const { isLoading: isBoothInfoLoading, data: boothInfo } = useQuery({
    queryKey: ["getBoothInfo", boothId],
    queryFn: () => getBoothInfo(boothId),
  });

  //특정 포토부스 리뷰 관련 정보 조회 api 호출
  const { data: boothReviewInfo } = useQuery({
    queryKey: ["getBoothReviewInfo", boothId],
    queryFn: () => getBoothModalInfo(boothId),
  });
  return (
    <Wrapper
      style={{
        transform: `translateY(${currentY}px)`,
      }}
      onClick={() => navigate(`/home/${boothId}/feed`)}
    >
      <LayerBar />

      {!isBoothInfoLoading && boothInfo && boothReviewInfo ? (
        <Container>
          <InfoBox>
            <div className="flex items-center">
              <span className="title">{boothInfo.name}</span>
              <StarIcon />
              <span className="score">{boothReviewInfo.rating}</span>
            </div>
            <span className="sub-text">{`${getDistance(boothInfo.x, boothInfo.y, lat, lng)} 리뷰 ${boothReviewInfo.reviewCount}`}</span>
            <div className="flex items-center mt-2">
              {boothReviewInfo.features.length > 0 ? (
                boothReviewInfo.features.map((tag, index) => <TagBox key={index}>{tag}</TagBox>)
              ) : (
                <TagBox>{"#가 없어요"}</TagBox>
              )}
            </div>
          </InfoBox>
          <ImgBox $imageurl={getLogoUrl(boothInfo.photoBoothBrand)}>
            <div className="num-tag">{boothReviewInfo.imageCount}</div>
          </ImgBox>
        </Container>
      ) : (
        <div>loading..</div>
      )}
    </Wrapper>
  );
}

export default BoothModal;

const Wrapper = styled.div`
  ${tw`absolute w-full h-[180px] z-20 bg-[#ffffff] rounded-t-[26px] drop-shadow-sm bottom-0 flex flex-col items-center p-[18px] font-display cursor-pointer`}
  transform: translateY(100%);
  animation: slideUp 0.3s ease-in-out forwards;

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  &.close {
    animation: slideDown 0.3s ease-in-out forwards;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const Container = styled.div`
  ${tw`w-full flex items-center justify-between mt-[35px]`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700 mr-2`}
  }
  .score {
    ${tw`font-semibold text-[14px] text-gray600 ml-0.5 `}
  }
  .sub-text {
    ${tw`font-normal text-[14px] text-gray400`}
  }
`;
const InfoBox = styled.div`
  ${tw`flex flex-col w-3/4 items-start`}
`;

const ImgBox = styled.div<{ $imageurl: string }>`
  ${tw`w-[82px] h-[82px] relative rounded-[4px] `}

  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
  .num-tag {
    ${tw`absolute w-[33px] h-[22px] rounded-[24px] bg-[#000000] text-[#FFFFFF] font-normal text-[10px]  flex items-center justify-center right-1 bottom-1`}
  }
`;

const TagBox = styled.div`
  ${tw`w-[96px] h-[30px] rounded-[24px] flex items-center justify-center font-normal text-[12px] text-gray400 bg-gray100 mr-1`}
`;
