import tw from "twin.macro";
import styled from "styled-components";
import { getReviewBoothTagImgUrl, getReviewPhotoTagImgUrl } from "../../hooks/getImageUrl";
import { TagCnt } from "../../@types/review";

type TagSectionProps = {
  title: string;
  category: string;
  data: TagCnt[];
};
function FeedTagSection({ title, category, data }: TagSectionProps) {
  return (
    <Container>
      <span className="title">{title}</span>
      {data.map((d, index: number) => (
        <TagWrapper key={index}>
          <Content>
            <div className="flex items-center">
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
  ${tw`flex items-center mx-[13px] font-display justify-between h-full`}

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
