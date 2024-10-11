import tw from "twin.macro";
import styled from "styled-components";
import NextButton from "../../components/Common/NextButton";
import UploadImageSection from "../../components/WriteReview/UploadImageSection";
import { useState } from "react";
function Step2() {
  const [reviewText, setReviewText] = useState<string>("");
  const handleSubmit = () => {
    if (reviewText.length > 300) {
      alert("리뷰는 300자를 넘을 수 없습니다.");
      return;
    }
  };
  return (
    <MainWrapper>
      <LabelBox>
        <span className="q-label">사진을 등록해주세요</span>
        <span className="tag">선택</span>
      </LabelBox>
      <UploadImageSection />
      <LabelBox>
        <span className="q-label">부스에 대한 설명을 작성해주세요</span>
        <span className="tag">선택</span>
      </LabelBox>
      <textarea placeholder="포토부스에 대한 설명을 적어주세요" onChange={(e) => setReviewText(e.target.value)} />
      <span className="text-cnt">{`${reviewText?.length} / 300`}</span>
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
    ${tw`ml-[90%] font-medium text-[12px] text-gray400`}
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
