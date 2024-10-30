import { useState } from "react";
import NavBar from "../../components/Common/NavBar";
import styled from "styled-components";
import tw from "twin.macro";

function Album() {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("날짜별");
  
  // "선택" 버튼 클릭 핸들러
  const handleSelectClick = () => {
    setIsSelected(!isSelected);
  };
  
  // "추가" 버튼 클릭 핸들러
  const handleAddClick = () => {
    setIsAdded(!isAdded);
  };
  
  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  
  return (
    <Layout>
      <Content>
        <HeaderSection>
          <Title>앨범</Title>
          <Subtitle>2024년 8월</Subtitle>
        </HeaderSection>
        
        <ButtonGroup>
          <ActionButton selected={isSelected} onClick={handleSelectClick}>
            선택
          </ActionButton>
          <ActionButton selected={isAdded} onClick={handleAddClick}>
            추가
          </ActionButton>
        </ButtonGroup>
        
        <CategoryMenu>
          <CategoryItem
            selected={selectedCategory === "날짜별"}
            onClick={() => handleCategoryClick("날짜별")}
          >
            날짜별
          </CategoryItem>
          <CategoryItem
            selected={selectedCategory === "포토부스별"}
            onClick={() => handleCategoryClick("포토부스별")}
          >
            포토부스별
          </CategoryItem>
          <CategoryItem
            selected={selectedCategory === "위치별"}
            onClick={() => handleCategoryClick("위치별")}
          >
            위치별
          </CategoryItem>
        </CategoryMenu>
      </Content>
      <NavBar />
    </Layout>
  );
}

// Styled Components

const Layout = styled.div`
    ${tw`flex flex-col w-full h-screen items-center bg-background`}
    max-width: 480px;
`;

const Content = styled.div`
    ${tw`flex flex-col w-full px-4 py-6 gap-4 border-b border-gray400`}
    height: calc(100vh - 60px); /* NavBar의 높이가 60px이라고 가정 */
`;

const HeaderSection = styled.div`
    ${tw`flex flex-col items-center`}
`;

const Title = styled.span`
    ${tw`text-gray700 text-lg font-bold`}
`;

const Subtitle = styled.div`
    ${tw`h-[33px] px-4 py-1.5 bg-[#5453ee] rounded-full shadow text-center text-background text-base font-semibold`}
    font-family: 'Pretendard', sans-serif;
`;

const ButtonGroup = styled.div`
    ${tw`flex gap-2 justify-center`}
`;

const ActionButton = styled.div<{ selected?: boolean }>`
    ${tw`h-[33px] px-4 py-1.5 rounded-full shadow text-center text-sm font-semibold cursor-pointer`}
    background-color: ${({ selected }) => (selected ? '#5453ee' : '#c7c9ce')};
    color: ${({ selected }) => (selected ? '#fff' : '#4b515a')};
    font-family: 'Pretendard', sans-serif;
`;

const CategoryMenu = styled.div`
    ${tw`flex justify-between w-72 h-[42px] px-5 py-2.5 bg-[#c7c9ce]/80 rounded-full shadow gap-9`}
`;

const CategoryItem = styled.div<{ selected?: boolean }>`
    ${tw`text-base font-semibold cursor-pointer`}
    color: ${({ selected }) => (selected ? '#000' : '#676f7b')};
    font-family: 'Pretendard', sans-serif;
`;

const BottomBorder = styled.div`
    ${tw`w-full border-b border-gray400 mt-4`}
`;

export default Album;
