import styled from "styled-components";
import tw from "twin.macro";
import Search from "../../assets/images/search.svg?react";
import BackIcon from "../../assets/icons/back-icon";
import { useNavigate } from "react-router-dom";

function PhotoReview() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/photo-check");
  };

  const handleBack = () => {
    navigate("/qr-scan");
  };
  return (
    <Container>
      <Header>
        <div className="relative flex flex-row w-full justify-center items-center">
          <Title>리뷰 작성</Title>
          <button onClick={handleBack}>
            <div className="absolute left-0">
              <BackIcon color="grey"/>
            </div>
          </button>
        </div>
        <DateText>2024년 8월 3일</DateText>
        <svg width="390" height="2" viewBox="0 0 390 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-5">
          <path
            d="M-6 1C-2.4 1 267.167 1 401.5 1"
            stroke="#E9EAEE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Header>
      <ContentContainer>
        <LabelContainer>
          <Label>언제 사진을 찍으셨나요?</Label>
          <RequiredBadge>
            <RequiredText>필수</RequiredText>
          </RequiredBadge>
        </LabelContainer>
        <div className="w-[351.61px] h-[35.05px] relative">
          <div className="w-[92.61px] h-[35.05px] left-[145px] top-0 absolute">
            <div className="left-[78.61px] top-[8px] absolute text-center text-[#676f7b] text-base font-semibold font-['Pretendard']">
              월
            </div>
            <div className="w-[70.93px] h-[35.05px] left-0 top-0 absolute bg-[#e9eaee] rounded-md" />
          </div>
          <div className="w-[92.61px] h-[35.05px] left-[259px] top-0 absolute">
            <div className="left-[78.61px] top-[8px] absolute text-center text-[#676f7b] text-base font-semibold font-['Pretendard']">
              일
            </div>
            <div className="w-[70.93px] h-[35.05px] left-0 top-0 absolute bg-[#e9eaee] rounded-md" />
          </div>
          <div className="left-[103.64px] top-[8px] absolute text-center text-[#676f7b] text-base font-medium font-['Pretendard']">
            년
          </div>
          <div className="w-24 h-[35.05px] left-0 top-0 absolute bg-[#e9eaee] rounded-md" />
          <div className="left-[29px] top-[8px] absolute text-center text-[#c7c9ce] text-base font-normal font-['Pretendard']">
            0000
          </div>
          <div className="left-[170px] top-[8px] absolute text-center text-[#c7c9ce] text-base font-normal font-['Pretendard']">
            00
          </div>
        </div>
        <LabelContainer>
          <Label>사용하신 부스의 위치는 어딘가요?</Label>
          <RequiredBadge>
            <RequiredText>필수</RequiredText>
          </RequiredBadge>
        </LabelContainer>
        <InputContainer>
          <SearchIcon>
            <Search />
          </SearchIcon>
        </InputContainer>
      </ContentContainer>
      <ButtonContainer onClick={() => handleNext()}>
        <div className="text-center text-white text-[22px] font-semibold font-['Pretendard']">다음</div>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-background flex flex-col w-full min-h-screen items-center`}
  overflow-x: hidden;
`;

const Header = styled.header`
  ${tw`w-full flex flex-col place-items-center p-6 relative`}
`;

const Title = styled.div`
  ${tw`text-[#171d24] text-2xl font-semibold font-['Pretendard']`}
`;

const DateText = styled.div`
  ${tw`opacity-70 text-[#676f7b] text-xs font-medium font-['Pretendard'] mt-1`}
`;

const ContentContainer = styled.div`
  ${tw`flex flex-col items-start w-11/12 mt-10 gap-6`}
`;

const LabelContainer = styled.div`
  ${tw`flex items-center gap-2.5`}
`;

const Label = styled.div`
  ${tw`text-[#171d24] text-lg font-semibold font-['Pretendard']`}
`;

const RequiredBadge = styled.div`
  ${tw`px-2.5 py-1.5 bg-[#a1a6b5] rounded-3xl flex justify-center items-center`}
`;

const RequiredText = styled.div`
  ${tw`text-xs font-semibold font-['Pretendard']`}
`;

const InputContainer = styled.div`
  ${tw`w-11/12 p-2.5 bg-[#e9eaee] rounded-lg flex justify-end items-center`}
`;

const SearchIcon = styled.div`
  ${tw`w-6 p-px flex justify-center items-center`}
`;

const ButtonContainer = styled.button`
  ${tw`w-[280px] h-[62px] bg-[#5453ee] rounded-lg mt-20 flex justify-center items-center`}
`;

export default PhotoReview;
