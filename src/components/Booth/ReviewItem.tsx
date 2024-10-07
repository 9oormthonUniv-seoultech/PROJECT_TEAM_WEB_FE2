import tw from "twin.macro";
import styled from "styled-components";
import haruUrl from "../../assets/images/haru-logo.png?url";
function ReviewItem() {
  return (
    <Container>
      <div className="flex gap-[10px]">
        <div className="flex flex-col w-full gap-[10px]">
          <div className="flex gap-[8px] items-center">
            <div className="profile-icon"></div>
            <div className="flex flex-col">
              <span className="nickname">@닉네임</span>
              <span className="date">2024.09.30 작성</span>
            </div>
          </div>
          <span className="review-text">
            다양한 소품들이 준비되어 있어, 더욱 개성 있는 사진을 찍을 수 있었어요. 친구들과 함께 찍으니 더욱 즐거웠어요!
          </span>
        </div>
        <ImgBox $imageurl={haruUrl}>
          <div className="num-tag">+2</div>
        </ImgBox>
      </div>
      <TagList>
        <TagBox>깔끔한 소품</TagBox>
        <TagBox>빛번짐 없음</TagBox>
        <TagBox>+2</TagBox>
      </TagList>
    </Container>
  );
}

export default ReviewItem;

const Container = styled.div`
  ${tw`w-full flex flex-col font-display my-[20px] gap-[10px]`}
  .profile-icon {
    ${tw`w-[33px] h-[33px] rounded-[50%] bg-gray200`}
  }
  .nickname {
    ${tw`font-semibold text-[16px] text-gray700`}
  }
  .date {
    ${tw`font-normal text-[10px] text-gray400`}
  }
  .review-text {
    ${tw`font-normal text-[14px] text-gray600`}
  }
`;

const ImgBox = styled.div<{ $imageurl: string }>`
  ${tw`w-[94px] h-[94px] relative rounded-[4px] `}

  background-image: url(${(props) => props.$imageurl});
  background-size: cover;
  background-position: center;
  .num-tag {
    ${tw`absolute w-[33px] h-[22px] rounded-[24px] bg-[#000000] text-[#FFFFFF] font-normal text-[10px]  flex items-center justify-center right-1 bottom-1`}
  }
`;
const TagList = styled.div`
  ${tw`flex gap-[5px] items-center`}
`;

const TagBox = styled.span`
  ${tw`flex items-center h-[30px] rounded-[24px] bg-gray100 font-normal text-[12px] text-gray400 px-[20px]`}
`;
