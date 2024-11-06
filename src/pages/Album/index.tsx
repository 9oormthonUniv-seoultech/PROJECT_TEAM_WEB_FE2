import { useState, useEffect } from "react";
import NavBar from "../../components/Common/NavBar";
import Search from "../../assets/images/search.svg?react";
import NoImage from "../../assets/images/no-images.svg?react";
import More from "../../assets/images/more.svg?react";
import styled from "styled-components";
import tw from "twin.macro";
import ImageCard from "../../components/Album/ImageCard.tsx";
import DateModal from "../../components/Album/DateModal.tsx";
import Footer from "../../components/Album/Footer.tsx";
import ConfirmModal from "../../components/Album/ConfirmModal.tsx";
import BoothFilterModal from "../../components/Album/BoothFilterModal.tsx";

type Images = {
  url: string;
  title: string;
}

function Album() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('날짜별');
  const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false);
  const [imageList, setImageList] = useState<Images[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]); // 선택된 이미지 상태
  const [footerStatus, setFooterStatus] = useState('initial');
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false); // 확인 모달 상태
  const [photoBooth,setPhotoBooth] = useState<string>('하루필름');
  const [isBoothFilterModalOpen, setIsBoothFilterModalOpen] = useState<boolean>(false);
  const [date, setDate] = useState<string>('2024년 9월');
  
  useEffect(() => {
    setImageList([
      {
        url: "https://example.com/image1.jpg",
        title: "Sample Image 1",
      },
      {
        url: "https://example.com/image2.jpg",
        title: "Sample Image 2",
      },
      {
        url: "https://example.com/image3.jpg",
        title: "Sample Image 3",
      },
      {
        url: "https://example.com/image4.jpg",
        title: "Sample Image 4",
      },
      {
        url: "https://example.com/image5.jpg",
        title: "Sample Image 5",
      },
      {
        url: "https://example.com/image6.jpg",
        title: "Sample Image 6",
      },
      {
        url: "https://example.com/image7.jpg",
        title: "Sample Image 7",
      },
      {
        url: "https://example.com/image8.jpg",
        title: "Sample Image 8",
      },
    ]);
  }, []);
  
  // "선택" 버튼 클릭 핸들러
  const handleSelectClick = () => {
    setIsEditing(true);
  };
  
  const handleCancelClick = () => {
    setSelectedImages([]);
    setIsEditing(false);
  };
  
  const handleAddClick = () => {
  
  }
  
  // 이미지 카드 클릭 핸들러
  const handleImageClick = (index: number) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };
  
  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handleCloseModal = () => {
    setIsDateModalOpen(false);
  }
  
  const handleConfirm = () => {
    setIsConfirmModalOpen(false);
  }
  
  return (
    <Layout>
      <Content>
        <HeaderSection>
          <div className="w-[341px] h-11 p-2.5 bg-[#e9eaee] rounded-lg flex-col justify-center items-end gap-2.5 inline-flex">
            <div className="w-16 p-px justify-center items-center gap-2.5 inline-flex">
              <div className="w-[20.78px] h-[21.38px] relative"></div>
              <Search />
            </div>
          </div>
        </HeaderSection>

        <ButtonGroup>
          {selectedCategory === "날짜별" && <Subtitle onClick={() => setIsDateModalOpen(true)}>{date}</Subtitle>}
          {selectedCategory === "포토부스별" &&
              <Subtitle onClick={() => setIsBoothFilterModalOpen(true)}>
                {photoBooth}
                <More className ="ml-3"/>
              </Subtitle>}
          <PositionedDiv>
            {selectedCategory === "날짜별" && (
              <svg width="246" height="34" viewBox="0 0 246 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.9085 1.09121C23.7089 0.03951 25.2911 0.0395091 26.0915 1.0912L34.6135 12.2888C35.6155 13.6054 34.6765 15.5 33.0219 15.5H15.9781C14.3235 15.5 13.3845 13.6054 14.3865 12.2888L22.9085 1.09121Z"
                  fill="gray"
                />
                <rect y="8" width="200" height="26" rx="13" fill="gray" />
                <text
                  x="42%"
                  y="62%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontFamily="Pretendard"
                  fontWeight="normal"
                >
                  날짜를 선택해 변경해보세요
                </text>
              </svg>
            )}
          </PositionedDiv>
          <div className="flex gap-2 items-center">
            {isEditing ? (
              <ActionButton onClick={handleCancelClick}>취소</ActionButton>
            ) : (
              <>
                <ActionButton onClick={handleSelectClick}>선택</ActionButton>
                <ActionButton onClick={handleAddClick}>추가</ActionButton>
              </>
            )}
          </div>
        </ButtonGroup>
        {isDateModalOpen && <DateModal closeModal={handleCloseModal} setDate={setDate}/>}
        <ImageContainer>
          {imageList.length === 0 ? (
            <>
              <NoImage/>
              <p className="text-gray400 mt-4">사진을 채워보세요</p>
            </>
          ) : (
            <ImageDiv>
              {imageList.map((image, index) => (
                <ImageCard
                  key={index}
                  isEditing={isEditing}
                  isSelected={selectedImages.includes(index)} // 선택 상태 전달
                  onClick={() => handleImageClick(index)} // 클릭 핸들러 전달
                />
              ))}
            </ImageDiv>
          )}
        </ImageContainer>
        
        {!isEditing && (
          <CategoryMenu>
            <CategoryItem selected={selectedCategory === "날짜별"} onClick={() => handleCategoryClick("날짜별")}>
              날짜별
            </CategoryItem>
            <CategoryItem selected={selectedCategory === "포토부스별"} onClick={() => handleCategoryClick("포토부스별")}>
              포토부스별
            </CategoryItem>
            <CategoryItem selected={selectedCategory === "위치별"} onClick={() => handleCategoryClick("위치별")}>
              위치별
            </CategoryItem>
          </CategoryMenu>
        )}
      </Content>
      {isEditing ? (
        <Footer
          footerStatus={footerStatus}
          setFooterStatus={setFooterStatus}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
        />
      ) : (
        <NavBar />
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          title={footerStatus === 'liking' ? "좋아요를 누르시겠습니까?" : "정말 삭제하시겠습니까?"}
          option={["취소", "확인"]}
          onClick={() => setIsConfirmModalOpen(false)}
          onLeftOptionClick={() => setIsConfirmModalOpen(false)}
          onRightOptionClick={handleConfirm}
        />
      )}
      {isBoothFilterModalOpen && (
        <BoothFilterModal
          photoBooth={photoBooth}
          setPhotoBooth={setPhotoBooth}
          setIsBoothFilterModalOpen={setIsBoothFilterModalOpen}
        />
      )}
    </Layout>
  );
}

// Styled Components

const Layout = styled.div`
  ${tw`flex flex-col w-full h-screen items-center bg-[#FFFFFF]`}
  max-width: 480px;
`;

const ImageContainer = styled.div`
    ${tw`flex flex-col justify-center items-center w-full`}
    height: 100vh; /* 높이를 조정하여 다른 UI 요소가 가리지 않도록 */
    overflow-y: auto;
    position: relative;
    z-index: 1; /* 다른 요소들보다 낮게 설정 */
`;

const ImageDiv = styled.div`
    ${tw`grid gap-4 w-full`}
    grid-template-columns: repeat(2, 1fr); /* 두 개의 열 */
    grid-auto-rows: auto;
    max-height: 100%; /* 부모 컨테이너 안에서 최대 높이 제한 */
    overflow-y: auto;
`;

const Content = styled.div`
  ${tw`flex flex-col w-full px-4 py-6 gap-4`}
  height: calc(100vh - 60px);
`;

const HeaderSection = styled.div`
    ${tw`flex flex-col items-center`}
    position: relative;
    z-index: 10;
`;

const Subtitle = styled.div`
    ${tw`h-[33px] px-4 py-1.5 bg-[#5453ee] inline-flex items-center rounded-full shadow text-background text-base font-semibold`}
    font-family: 'Pretendard', sans-serif;
    flex-shrink: 0;
`;

const ButtonGroup = styled.div`
    ${tw`flex gap-2 justify-between fixed`} // fixed로 위치 고정
    top: 100px; // 원하는 위치로 조정
    left: 50%;
    transform: translateX(-70%);
    z-index: 20; // ImageContainer보다 높은 z-index 설정
`;

const PositionedDiv = styled.div`
    ${tw`absolute mt-2`}
    top: 100%;
    left: 50%;
    transform: translateX(-75%);
    margin-top: 1px;
`;

const ActionButton = styled.div`
    ${tw`px-4 py-1.5 rounded-full text-[#4b515a] bg-[#c7c9ce] shadow text-center text-sm font-semibold cursor-pointer`}
    font-family: 'Pretendard', sans-serif;
    white-space: nowrap;
`;


const CategoryMenu = styled.div`
    ${tw`flex bg-[#c7c9ce]/80 rounded-full shadow`}
    width: 248.1px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 70px;
    z-index: 10;
`;

const CategoryItem = styled.div<{ selected?: boolean }>`
    ${tw`text-base font-semibold cursor-pointer flex items-center justify-center`}
    height: 38px;
    padding: 0 16px;
    border-radius: 30px;
    color: ${({ selected }) => (selected ? '#fff' : '#676f7b')};
    background-color: ${({ selected }) => (selected ? '#676f7b' : 'transparent')};
    font-family: 'Pretendard', sans-serif;
    white-space: nowrap;
    transition: background-color 0.3s ease, color 0.3s ease;
`;

export default Album;
