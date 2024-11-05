import tw from "twin.macro";
import styled from "styled-components";
import { useState } from "react";
import Rating from "../../components/Common/Rating";
import InputTagSection from "../../components/WriteReview/InputTagSection";
import { BoothTagCategories, PhotoTagCategories } from "../../data/review-tag-categories";
import NextButton from "../../components/Common/NextButton";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchPhotoBoothName } from "../../api/booth";
import { useAuthStore } from "../../store/useAuthStore";
import { searchBoothFeatures, searchPhotoFeatures } from "../../api/review";

function Step1() {
  const { boothId } = useParams() as { boothId: string };
  const navigate = useNavigate();
  const [rate, setRate] = useState<number>(0);
  const [selectedBoothTags, setSelectedBoothTags] = useState<number[]>([]);
  const [selectedPhotoTags, setSelectedPhotoTags] = useState<number[]>([]);

  //포토부스 이름 조회 api 호출
  const { isLoading, data: boothName } = useQuery({
    queryKey: ["searchBoothName", boothId],
    queryFn: () => searchPhotoBoothName(boothId),
  });

  const { data: BoothFeatures } = useQuery({
    queryKey: ["searchBoothFeatures"],
    queryFn: () => searchBoothFeatures(),
  });

  const { data: PhotoFeatures } = useQuery({
    queryKey: ["searchPhotoFeatures"],
    queryFn: () => searchPhotoFeatures(),
  });
  const getRatingText = () => {
    if (rate === 0) return "별점을 선택해주세요";
    if (rate <= 1) return "아쉬워요";
    if (rate <= 2) return "조금 아쉬워요";
    if (rate <= 3) return "무난해요";
    if (rate <= 4) return "만족해요";
    if (rate <= 5) return "완전만족해요";
  };

  const handleNextStep = () => {
    const totalSelectedTagsLength = selectedBoothTags.length + selectedPhotoTags.length;
    if (totalSelectedTagsLength > 5) {
      alert("태그는 최대 5개 선택 가능합니다.");
      return;
    }
    navigate(`/write-review/${boothId}/step/2`, {
      state: {
        rate: rate,
        selectedBoothTags: selectedBoothTags,
        selectedPhotoTags: selectedPhotoTags,
      },
    });
  };

  return (
    <MainWrapper>
      {!isLoading && boothName && <span className="booth-name-box">{boothName}</span>}

      {/* 별점 입력 섹션 */}
      <LabelBox>
        <label className="q-label">매장은 어떠셨나요?</label>
        <span className="tag">필수</span>
      </LabelBox>
      <RatingBox>
        <Rating w={"35"} h={"35"} readonly={false} rate={rate} setRate={setRate} />
        <span className="sub-text">{getRatingText()}</span>
      </RatingBox>

      {/* 태그 입력 섹션 */}
      <LabelBox>
        <label className="q-label">어떤 점이 좋았나요?</label>
        <span className="tag">필수</span>
      </LabelBox>
      <span className="desc-text">부스에 어울리는 키워드를 골라주세요 (최대 5개)</span>
      <div className="flex m-[20px] gap-[30px]">
        {BoothFeatures && (
          <InputTagSection
            title="부스"
            features={BoothFeatures}
            selectedTags={selectedBoothTags}
            setSelectedTags={setSelectedBoothTags}
          />
        )}
        {PhotoFeatures && (
          <InputTagSection
            title="사진"
            features={PhotoFeatures}
            selectedTags={selectedPhotoTags}
            setSelectedTags={setSelectedPhotoTags}
          />
        )}
      </div>
      <NextButton
        text="다음"
        onClick={handleNextStep}
        disabled={rate === 0 || selectedBoothTags.length + selectedPhotoTags.length === 0}
      />
    </MainWrapper>
  );
}

export default Step1;
const MainWrapper = styled.main`
  ${tw`overflow-auto w-full mt-[80px] pb-[80px] px-[16px]`}

  .booth-name-box {
    ${tw`flex items-center justify-center h-[30px] rounded-[8px] bg-gray100 font-medium text-[14px] text-gray400 px-[20px] my-[25px] mx-auto max-w-[180px]`}
  }
  .desc-text {
    ${tw`font-medium text-[12px] text-gray400 mt-[5px]`}
  }
`;

const LabelBox = styled.div`
  ${tw`flex mt-[20px] gap-[10px]`}

  .q-label {
    ${tw`font-semibold text-[18px] text-gray700`}
  }

  .tag {
    ${tw`flex items-center justify-center w-[41px] h-[26px] rounded-[24px] bg-gray300 font-semibold text-[12px] text-[#FFFFFF]`}
  }
`;

const RatingBox = styled.div`
  ${tw`relative flex flex-col items-center justify-center  w-[300px] h-[100px] rounded-[9px] bg-main mt-[10px] mx-auto`}
  .sub-text {
    ${tw`font-normal text-[16px] text-[#FFFFFF] mt-[8px]`}
  }
`;
