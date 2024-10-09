import tw from "twin.macro";
import styled from "styled-components";
import NextButton from "../../components/Common/NextButton";
import UploadImageSection from "../../components/WriteReview/UploadImageSection";
function Step2() {
  const handleSubmit = () => {};
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
      <NextButton text="완료하기" onClick={handleSubmit} />
    </MainWrapper>
  );
}

export default Step2;

const MainWrapper = styled.main`
  ${tw`overflow-auto w-full mt-[80px] pb-[80px] px-[16px]`}

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
