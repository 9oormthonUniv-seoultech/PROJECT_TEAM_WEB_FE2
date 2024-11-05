import tw from "twin.macro";
import styled from "styled-components";
import NextButton from "../../components/Common/NextButton";
import UploadImageSection from "../../components/WriteReview/UploadImageSection";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { submitReviewData } from "../../api/review";
import { getPresignedUrl, uploadToS3 } from "../../api/file";
import { useAuthStore } from "../../store/useAuthStore";
function Step2() {
  const location = useLocation();
  const navigate = useNavigate();
  const { boothId } = useParams() as { boothId: string };
  const { rate, selectedBoothTags, selectedPhotoTags } = location.state;
  const { accessToken } = useAuthStore();
  const [reviewText, setReviewText] = useState<string>("");
  const [imageFiles, setImageFiles] = useState<File[]>([]); // 새로 추가된 파일들

  const validateReview = (reviewText: string): boolean => {
    if (reviewText.length > 300) {
      alert("리뷰는 300자를 넘을 수 없습니다.");
      return false;
    }
    return true;
  };

  const getUploadedFilePaths = async (imageFiles: File[], accessToken: string): Promise<string[]> => {
    const uploadPromises = imageFiles.map(async (image) => {
      const presignedData = await getPresignedUrl("/images/review", image.name, accessToken);
      if (presignedData) {
        await uploadToS3(presignedData.url, image);
        return presignedData.filePath;
      }
      return null;
    });

    const filePaths = (await Promise.all(uploadPromises)).filter(Boolean) as string[];
    return filePaths;
  };

  const submitReview = async (
    accessToken: string,
    boothId: string,
    rate: number,
    selectedBoothTags: number[],
    selectedPhotoTags: number[],
    filePaths: string[],
    reviewText: string
  ) => {
    const res = await submitReviewData(
      accessToken,
      boothId,
      rate,
      selectedBoothTags,
      selectedPhotoTags,
      filePaths,
      reviewText
    );

    if (res && res.code === 200) {
      navigate("/write-review/complete");
    }
  };

  // 메인 로직
  const handleSubmit = async () => {
    // Step 1: 리뷰 검증
    if (!validateReview(reviewText)) {
      return;
    }

    // Step 2: 이미지 업로드 및 filePaths 저장
    const filePaths = await getUploadedFilePaths(imageFiles, accessToken!);

    // Step 3: 리뷰등록 api 호출
    await submitReview(accessToken!, boothId, rate, selectedBoothTags, selectedPhotoTags, filePaths, reviewText);
  };

  return (
    <MainWrapper>
      <LabelBox>
        <span className="q-label">사진을 등록해주세요</span>
        <span className="tag">선택</span>
      </LabelBox>
      <UploadImageSection imageFiles={imageFiles} setImageFiles={setImageFiles} />
      <LabelBox>
        <span className="q-label">부스에 대한 설명을 작성해주세요</span>
        <span className="tag">선택</span>
      </LabelBox>
      <div className="relative">
        <textarea placeholder="포토부스에 대한 설명을 적어주세요" onChange={(e) => setReviewText(e.target.value)} />
        <span className="text-cnt">{`${reviewText?.length} / 300`}</span>
      </div>
      <NextButton text="완료하기" onClick={handleSubmit} />
    </MainWrapper>
  );
}

export default Step2;

const MainWrapper = styled.main`
  ${tw`overflow-auto w-full mt-[80px] pb-[80px] px-[16px] m-auto`}

  .desc-text {
    ${tw`font-medium text-[12px] text-gray400 mt-[5px]`}
  }

  textarea {
    ${tw`w-full h-[235px] rounded-[8px] bg-gray100 font-display font-normal text-[16px] text-gray700 resize-none p-[15px] mt-[15px]`}
    &:placeholder {
      ${tw`text-gray300`}
    }
    &:focus {
      ${tw`outline-none`}
    }
  }

  .text-cnt {
    ${tw`absolute top-[255px] right-1.5 font-medium text-[12px] text-gray400`}
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
