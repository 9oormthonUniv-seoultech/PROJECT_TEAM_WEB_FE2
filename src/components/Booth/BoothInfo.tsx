import tw from "twin.macro";
import styled from "styled-components";
import LikeIcon from "../../assets/icons/like-icon";
function BoothInfo() {
  return (
    <Container>
      <ColBox>
        <span className="main-text">하루필름 혜화역점 </span>
        <span className="sub-text">서울시 종로구 대학로 11길 36, 1층</span>
        <span className="sub-text">현재 위치로 115m</span>
      </ColBox>
      <div className="flex items-center gap-[8px]">
        <button className="guide-btn">길안내 시작 </button>
        <LikeIcon color={"#B0B0EE"} />
      </div>
    </Container>
  );
}

export default BoothInfo;

const Container = styled.div`
  ${tw`w-full px-[16px] flex flex-row font-display justify-between items-start`}

  .main-text {
    ${tw`font-semibold text-[18px] text-gray700`}
  }
  .sub-text {
    ${tw`font-normal text-[12px] text-gray400`}
  }
  .guide-btn {
    ${tw`w-[128px] h-[39px] rounded-[30px] bg-main font-semibold text-[16px] text-[#FFFFFF]`}
  }
`;

const ColBox = styled.div`
  ${tw`flex flex-col`}
`;
