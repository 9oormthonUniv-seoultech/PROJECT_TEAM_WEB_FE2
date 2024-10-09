import tw from "twin.macro";
import styled from "styled-components";
import Header from "../../components/Common/Header";
import { useNavigate } from "react-router-dom";
import WriteRating from "../../components/WriteReview/WriteRating";

function WriteReview() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header mainText="리뷰 작성" subText="0000년 00월 00일" handleBackClick={() => navigate(-1)} />
      <MainWrapper>
        <span className="booth-name-box">하루필름 공릉점</span>

        {/* 별점 입력 섹션 */}
        <LabelBox>
          <label className="q-label">매장은 어떠셨나요?</label>
          <span className="tag">필수</span>
        </LabelBox>
        <WriteRating />
      </MainWrapper>
    </Layout>
  );
}

export default WriteReview;
const Layout = styled.div`
  ${tw`flex flex-col [max-width: 480px] w-full h-[100vh] items-center m-auto font-display bg-[#FFFFFF]`}
`;

const MainWrapper = styled.main`
  ${tw`overflow-auto flex flex-col w-full mt-[80px] pb-[80px] px-[16px]`}

  .booth-name-box {
    ${tw`flex items-center justify-center h-[30px] rounded-[8px] bg-gray100 font-medium text-[14px] text-gray400 px-[20px] my-[25px] mx-auto`}
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
