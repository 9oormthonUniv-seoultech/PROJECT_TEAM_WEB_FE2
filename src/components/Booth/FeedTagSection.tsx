import tw from "twin.macro";
import styled from "styled-components";
import { getReviewBoothTagImgUrl, getReviewPhotoTagImgUrl } from "../../hooks/getImageUrl";
import { TagCnt } from "../../@types/review";
import { useMemo } from "react";

type TagSectionProps = {
  title: string;
  category: string;
  data: TagCnt[];
};
function FeedTagSection({ title, category, data }: TagSectionProps) {
  // data 배열의 각 항목의 count를 합산하여 계산
  //컴포넌트 렌더링 시점에 data 배열을 이용해 totalCount를 계산
  const totalCount = useMemo(() => data.reduce((sum, item) => sum + item.count, 0), [data]);

  return (
    <Container>
      <span className="title">{title}</span>
      {data.map((d, index: number) => (
        <TagWrapper key={index}>
          {/* 비율만큼 보라색 배경 칠하기 */}
          <ColoredBar width={(d.count / totalCount) * 100 + "%"} />
          <Content>
            <div className="flex items-center z-10">
              <img
                src={
                  category == "booth" ? getReviewBoothTagImgUrl(d.featureName) : getReviewPhotoTagImgUrl(d.featureName)
                }
                alt="tag img"
              />
              <span className="tag-label">{d.featureName}</span>
            </div>
            <span className="cnt">{d.count}</span>
          </Content>
        </TagWrapper>
      ))}
    </Container>
  );
}

export default FeedTagSection;
const Container = styled.div`
  ${tw`flex flex-col w-full px-[18px] py-[30px]`}
  .title {
    ${tw`font-semibold text-[18px] text-gray700 mb-2`}
  }
`;

const TagWrapper = styled.div`
  ${tw`relative  w-full h-[42px] rounded-[8px] bg-gray200 my-[4px]`}
`;

const Content = styled.div`
  ${tw`flex items-center mx-[13px] font-display justify-between h-full z-20`}

  img {
    ${tw`mr-2`}
  }
  .tag-label {
    ${tw`font-semibold text-[16px] text-[#FFFFFF]`}
  }
  .cnt {
    ${tw`font-semibold text-[14px] text-[#FFFFFF] `}
  }
`;
const ColoredBar = styled.div<{ width: string }>`
  ${tw`absolute left-0 top-0 h-full bg-main rounded-[8px]`}
  width: ${({ width }) => width}; /* 비율에 따른 너비 설정 */
`;
