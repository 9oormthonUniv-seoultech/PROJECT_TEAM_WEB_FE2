import { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { BoothCategories } from "../../data/booth-categories";

function BoothSlide() {
  //선택한 포토부스 초기화
  const [selectedBooth, setSelectedBooth] = useState<string[]>([]);

  //클릭된 부스의 id를 전달받아, 이미 선택된 부스라면 제거, 아니라면 추가하는 로직
  const handleClick = (boothId: string) => {
    setSelectedBooth((prevSelectedBooths) => {
      if (prevSelectedBooths.includes(boothId)) {
        //이미 선택된 부스면 배열에서 제거
        return prevSelectedBooths.filter((id) => id !== boothId);
      } else {
        //선택되지 않은 부스면 배열에 추가
        return [...prevSelectedBooths, boothId];
      }
    });
  };

  return (
    <Container>
      <SlideWrapper>
        {BoothCategories.map((booth, index) => (
          <BoothBtn key={index} $active={selectedBooth.includes(booth.id)} onClick={() => handleClick(booth.id)}>
            {booth.label}
          </BoothBtn>
        ))}
      </SlideWrapper>
    </Container>
  );
}

export default BoothSlide;

const Container = styled.div`
  ${tw`absolute top-20 z-10 flex-row items-center w-full`}
`;

const SlideWrapper = styled.div`
  ${tw`flex flex-row gap-2 overflow-x-auto ml-4 `}
  scroll-snap-type: x mandatory; /* 각 버튼이 스냅되게 설정 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and 엣지 */
  scrollbar-width: none; /* 파이어폭스 */
  -webkit-overflow-scrolling: touch; /* 모바일 환경에서 터치 스크롤 부드럽게 처리 */
`;
const BoothBtn = styled.button<{ $active: boolean }>`
  ${tw`border-[1px] px-[22px] h-[35px] font-display font-medium text-[14px] rounded-[24px] shrink-0`}
  scroll-snap-align: start;
  ${(props) =>
    !props.$active ? tw` border-gray400 bg-[#FFFFFF] text-gray400` : tw`border-main bg-[#E1E0FF] text-main `}
`;
