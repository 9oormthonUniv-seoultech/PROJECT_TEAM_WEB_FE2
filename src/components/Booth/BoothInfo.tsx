import tw from "twin.macro";
import styled from "styled-components";
import LikeIcon from "../../assets/icons/like-icon";
import { getDistance } from "../../hooks/getLocation";
import useBoothFilterStore from "../../store/useBoothFilterStore";
import { SpecificBoothInfo } from "../../@types/booth";
function BoothInfoSection({ name, road, x, y }: SpecificBoothInfo) {
  const { lat, lng } = useBoothFilterStore();

  return (
    <Container>
      <ColBox>
        <span className="main-text">{name}</span>
        <span className="sub-text">{road}</span>
        <span className="sub-text">{`현재 위치로 ${getDistance(x, y, lat, lng)}`}</span>
      </ColBox>

      <div className="flex items-center gap-[8px]">
        <button
          className="guide-btn"
          onClick={() => (window.location.href = `https://map.kakao.com/link/to/${road},${x},${y}`)}
        >
          길안내 시작
        </button>
        <LikeIcon color={"#B0B0EE"} />
      </div>
    </Container>
  );
}

export default BoothInfoSection;

const Container = styled.div`
  ${tw`w-full px-[16px] flex flex-row font-display justify-between items-start`}

  .main-text {
    ${tw`font-semibold text-[18px] text-gray700`}
  }
  .sub-text {
    ${tw`font-normal text-[12px] text-gray400`}
  }
  .guide-btn {
    ${tw`px-[15px] h-[39px] rounded-[30px] bg-main font-semibold text-[16px] text-[#FFFFFF]`}
  }
`;

const ColBox = styled.div`
  ${tw`flex flex-col`}
`;
