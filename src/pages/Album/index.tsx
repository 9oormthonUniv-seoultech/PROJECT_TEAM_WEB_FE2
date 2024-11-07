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
import { Delete, Get, Post } from "../../api";
import { useAuthStore } from "../../store/useAuthStore.ts";
import { useNavigate } from "react-router-dom";
import HashtagSearchModal from "../../components/Album/HashtagSearchModal.tsx";
import { getCurrentLocation } from "../../hooks/getLocation.tsx";
import AlbumMap from "../../components/Album/AlbumMap.tsx";
import Modal from "../../components/Common/Modal.tsx";
import { searchPhotoBoothName } from "../../api/booth.ts";
type Image = {
  albumId: number;
  photoUrl: string;
  like: boolean;
};

type ImageForLocation = {
  photoUrl: string;
  x: number;
  y: number;
};

function Album() {
  const [searchCategory, setSearchCategory] = useState<string | null>("날짜별");
  const [isDateModalOpen, setIsDateModalOpen] = useState<boolean>(false);
  const [imageList, setImageList] = useState<Image[]>([]);
  const [imageListForLocation, setImageListForLocation] = useState<ImageForLocation[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]); // 선택된 이미지 상태
  const [footerStatus, setFooterStatus] = useState("initial");
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false); // 확인 모달 상태
  const [photoBooth, setPhotoBooth] = useState<string>("인생네컷");
  const [isBoothFilterModalOpen, setIsBoothFilterModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isHashtagSearchModalOpen, setIsHashtagSearchModalOpen] = useState<boolean>(false);
  const today = new Date();
  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth() + 1);
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();

  //리뷰 작성 할 부스 아이디 있는지 확인하는 상태변수
  const [boothInfoForReview, setBoothInfoForReview] = useState<{ id: string; name: string } | null>(null);
  //방금 앨범 등록한 앨번 id가 있는지 확인하는 useEffect함수 -> albumId가 있다면 바로 리뷰를 작성하도록 유도
  useEffect(() => {
    const checkForReview = async () => {
      const boothId = localStorage.getItem("boothId");
      if (boothId && boothId != undefined) {
        const boothName = await searchPhotoBoothName(boothId);
        if (boothName) {
          setBoothInfoForReview({ id: boothId, name: boothName });
          localStorage.removeItem("boothId");
        }
      }
    };
    checkForReview();
  }, [localStorage.getItem("boothId")]);

  const getPhotoByDate = async (year: number, month: number, accessToken: string) => {
    try {
      setIsLoading(true);
      const res = await Get(`/api/v1/album/date/${year}/${month}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200) {
        console.log(res.data.payload);
        setImageList(res.data.payload);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // 요청 완료 후 로딩 상태 비활성화
    }
  };

  const getPhotoByBooth = async (photoBooth: string, accessToken: string) => {
    try {
      setIsLoading(true);
      const res = await Get(`/api/v1/album/photobooth/${photoBooth}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200) {
        console.log(res.data.payload);
        setImageList(res.data.payload);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // 요청 완료 후 로딩 상태 비활성화
    }
  };

  const getPhotoByLocation = async (x: number, y: number, accessToken: string) => {
    try {
      setIsLoading(true);
      const res = await Get(`/api/v1/album/location?${x}&${y}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200) {
        console.log(res.data.payload);
        setImageListForLocation(res.data.payload);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // 요청 완료 후 로딩 상태 비활성화
    }
  };

  useEffect(() => {
    if (searchCategory === "날짜별") {
      getPhotoByDate(year, month, accessToken!);
    }
    if (searchCategory === "포토부스별") {
      getPhotoByBooth(photoBooth, accessToken!);
    }
  }, [year, month, photoBooth, searchCategory]);

  // "선택" 버튼 클릭 핸들러
  const handleSelectClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setSelectedImages([]);
    setIsEditing(false);
  };

  const handleAddClick = () => {
    navigate("/photo-upload");
  };

  useEffect(() => {
    if (searchCategory === "위치별") {
      //현 위치 받아오기
      const fetchLocation = async () => {
        const res = await getCurrentLocation();
        if (res) {
          getPhotoByLocation(res.lat, res.lng, accessToken!);
        }
      };
      fetchLocation();
    }
  }, [searchCategory]);

  const deletePhotos = async (albumId: number, accessToken: string) => {
    try {
      const res = await Delete(`/api/v1/album/${albumId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200) {
        console.log(res.data.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const likePhotos = async (albumId: number, accessToken: string) => {
    try {
      const res = await Post(
        `/api/v1/album/like/${albumId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (res.status === 200) {
        console.log(res.data.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 이미지 카드 클릭 핸들러
  const handleImageClick = (albumId: number) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(albumId) ? prevSelected.filter((i) => i !== albumId) : [...prevSelected, albumId]
    );
  };

  // 카테고리 버튼 클릭 핸들러
  const handleCategoryClick = (category: string) => {
    setSearchCategory(category);
  };

  const handleCloseModal = () => {
    setIsDateModalOpen(false);
  };

  const handleConfirm = async () => {
    try {
      if (footerStatus === "liking") {
        await Promise.all(selectedImages.map((albumId) => likePhotos(albumId, accessToken)));
      } else if (footerStatus === "deleting") {
        await Promise.all(selectedImages.map((albumId) => deletePhotos(albumId, accessToken)));
      }
    } catch (error) {
      console.error("Error handling confirmation:", error);
    } finally {
      setSelectedImages([]); // 선택한 이미지 초기화
      setIsConfirmModalOpen(false); // 모달 닫기
      setFooterStatus("initial");
      setIsEditing(false);
      if (searchCategory === "날짜별") {
        getPhotoByDate(year, month, accessToken);
      }
      if (searchCategory === "포토부스별") {
        getPhotoByBooth(photoBooth, accessToken);
      }
    }
  };

  return (
    <Layout>
      {boothInfoForReview != null && (
        <Modal
          title="지금 바로 리뷰를 작성해보세요!"
          sub={boothInfoForReview.name}
          option={["작성할래요", "괜찮아요"]}
          onLeftOptionClick={() => navigate(`/write-review/${boothInfoForReview.id}/step/1`)}
          onRightOptionClick={() => setBoothInfoForReview(null)}
        />
      )}
      <Content>
        {searchCategory != "위치별" && (
          <HeaderSection>
            <HashtagSearchButton onClick={() => setIsHashtagSearchModalOpen(true)}>
              <SearchIcon>
                <Search />
              </SearchIcon>
              <span className="w-full bg-gray100 pl-2 text-gray400">해시태그로 사진 검색!</span>
            </HashtagSearchButton>
          </HeaderSection>
        )}

        <ButtonGroup>
          {searchCategory === "날짜별" && (
            <Subtitle onClick={() => setIsDateModalOpen(true)}>
              {year}년 {month}월
            </Subtitle>
          )}
          {searchCategory === "포토부스별" && (
            <Subtitle onClick={() => setIsBoothFilterModalOpen(true)}>
              {photoBooth}
              <More className="ml-3" />
            </Subtitle>
          )}
          <PositionedDiv>
            {searchCategory === "날짜별" && (
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
          <div className="flex gap-2 items-center mr-8">
            {isEditing ? (
              <ActionButton onClick={handleCancelClick}>취소</ActionButton>
            ) : (
              <>
                {searchCategory != "위치별" && (
                  <>
                    <ActionButton onClick={handleSelectClick}>선택</ActionButton>
                    <ActionButton onClick={handleAddClick}>추가</ActionButton>
                  </>
                )}
              </>
            )}
          </div>
        </ButtonGroup>
        {isDateModalOpen && (
          <DateModal closeModal={handleCloseModal} year={year} month={month} setYear={setYear} setMonth={setMonth} />
        )}

        {searchCategory === "위치별" ? (
          <></>
        ) : (
          <>
            {isLoading ? (
              <></>
            ) : (
              <>
                {imageList.length === 0 ? (
                  <div className="flex flex-col justify-center items-center h-full mt-4">
                    <NoImage />
                    <p className="text-gray400 mt-4">사진을 채워보세요</p>
                  </div>
                ) : (
                  <ImageContainer>
                    <ImageDiv>
                      {imageList.map((image) => (
                        <ImageCard
                          key={image.albumId}
                          photoUrl={image.photoUrl}
                          isEditing={isEditing}
                          isSelected={selectedImages.includes(image.albumId)} // 선택 상태 전달
                          onClick={() => handleImageClick(image.albumId)} // 클릭 핸들러 전달
                          isLiked={image.like}
                          id={image.albumId}
                        />
                      ))}
                    </ImageDiv>
                  </ImageContainer>
                )}
              </>
            )}
          </>
        )}

        {!isEditing && (
          <CategoryMenu>
            <CategoryItem selected={searchCategory === "날짜별"} onClick={() => handleCategoryClick("날짜별")}>
              날짜별
            </CategoryItem>
            <CategoryItem selected={searchCategory === "포토부스별"} onClick={() => handleCategoryClick("포토부스별")}>
              포토부스별
            </CategoryItem>
            <CategoryItem selected={searchCategory === "위치별"} onClick={() => handleCategoryClick("위치별")}>
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
          title={footerStatus === "liking" ? "좋아요를 누르시겠습니까?" : "정말 삭제하시겠습니까?"}
          option={["확인", "취소"]}
          onClick={() => setIsConfirmModalOpen(false)}
          onLeftOptionClick={handleConfirm}
          onRightOptionClick={() => setIsConfirmModalOpen(false)}
        />
      )}
      {isBoothFilterModalOpen && (
        <BoothFilterModal
          photoBooth={photoBooth}
          setPhotoBooth={setPhotoBooth}
          setIsBoothFilterModalOpen={setIsBoothFilterModalOpen}
        />
      )}
      {isHashtagSearchModalOpen && <HashtagSearchModal setIsModalOpen={setIsHashtagSearchModalOpen} />}
      {searchCategory === "위치별" && <AlbumMap />}
    </Layout>
  );
}

// Styled Components

const Layout = styled.div`
  ${tw`flex flex-col w-full h-screen items-center bg-[#FFFFFF]`}
  max-width: 480px;
`;

const ImageContainer = styled.div`
  ${tw`flex flex-col w-full`}
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

const ButtonGroup = styled.div`
  ${tw`flex w-full gap-2 justify-between fixed`} // fixed로 위치 고정
    max-width: 480px;
  top: 100px; // 원하는 위치로 조정
  z-index: 20; // ImageContainer보다 높은 z-index 설정
`;

const Subtitle = styled.div`
  ${tw`h-[33px] px-4 py-1.5 bg-[#5453ee] inline-flex items-center rounded-full shadow text-background text-base font-semibold`}
  font-family: 'Pretendard', sans-serif;
  flex-shrink: 0;
`;

const PositionedDiv = styled.div`
  ${tw`absolute mt-2`}
  top: 100%;
  left: 50%;
  transform: translateX(-90%);
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
  color: ${({ selected }) => (selected ? "#fff" : "#676f7b")};
  background-color: ${({ selected }) => (selected ? "#676f7b" : "transparent")};
  font-family: "Pretendard", sans-serif;
  white-space: nowrap;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

const HashtagSearchButton = styled.button`
  ${tw`w-2/3 p-2.5 bg-[#e9eaee] rounded-lg flex justify-end items-center mb-4`}
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  ${tw`w-6 p-px flex justify-center items-center`}
`;

export default Album;
