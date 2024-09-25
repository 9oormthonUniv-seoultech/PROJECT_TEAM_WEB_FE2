import styled from "styled-components";
import tw from "twin.macro";
import Search from "../../assets/images/search.svg?react";

function PhotoReview() {
  return (
    <Container>
      <Header>
        <Title>리뷰 작성</Title>
        <DateText>2024년 8월 3일</DateText>
      </Header>
      <ContentContainer>
        <LabelContainer>
          <Label>언제 사진을 찍으셨나요?</Label>
          <RequiredBadge>
            <RequiredText>필수</RequiredText>
          </RequiredBadge>
        </LabelContainer>
        <InputContainer>
          <SearchIcon>
            <Search />
          </SearchIcon>
        </InputContainer>
        <LabelContainer>
          <Label>사용하신 부스의 위치는 어딘가요?</Label>
          <RequiredBadge>
            <RequiredText>필수</RequiredText>
          </RequiredBadge>
        </LabelContainer>
        <InputContainer>
          <SearchIcon>
            <Search/>
          </SearchIcon>
        </InputContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-background flex flex-col w-full min-h-screen items-center`}
`;

const Header = styled.header`
  ${tw`w-full flex flex-col place-items-center p-6`}
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

export default PhotoReview;
