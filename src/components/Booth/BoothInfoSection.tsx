import tw from "twin.macro";
import styled from "styled-components";
import LikeIcon from "../../assets/icons/like-filled-icon";
import { getDistance } from "../../hooks/getLocation";
import useBoothFilterStore from "../../store/useBoothFilterStore";
import { SpecificBoothInfo } from "../../@types/booth";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { checkBoothLike, deleteboothLike, postboothLike } from "../../api/my";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import LikeFilledIcon from "../../assets/icons/like-filled-icon";
import LikeNotFilledIcon from "../../assets/icons/like-not-filled-icon";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
function BoothInfoSection({ name, road, x, y }: SpecificBoothInfo) {
  const { lat, lng } = useBoothFilterStore();

  const { boothId } = useParams() as { boothId: string };
  const { accessToken } = useAuthStore();
  const [like, setLike] = useState(false);

  // 좋아요 여부 조회 api 호출
  const { data } = useQuery({
    queryKey: ["checkLike", boothId],
    queryFn: () => checkBoothLike(accessToken!, boothId).then((res) => setLike(res!)),
  });

  // 좋아요 버튼 클릭 핸들러
  const handleLike = async () => {
    if (like) {
      const res = await deleteboothLike(accessToken!, boothId);
      if (res) {
        setLike(false);
      }
    } else {
      const res = await postboothLike(accessToken!, boothId);
      if (res) {
        setLike(true);
      }
    }
  };

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
        <button onClick={handleLike}>
          {like ? <LikeFilledIcon width={30} height={30} /> : <LikeNotFilledIcon width={30} height={30} />}
        </button>
      </div>
    </Container>
  );
}

export default BoothInfoSection;

const Container = styled.div`
  ${tw`w-full px-[16px] flex flex-row font-display justify-between items-start mb-[30px]`}

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
