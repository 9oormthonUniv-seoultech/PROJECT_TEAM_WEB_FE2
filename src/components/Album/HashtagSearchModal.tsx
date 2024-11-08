import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import CloseIcon from "../../assets/icons/close-icon";
import { Get } from "../../api";
import Search from "../../assets/images/search.svg?react";
import { useAuthStore } from "../../store/useAuthStore.ts";
import ImageCard from "./ImageCard.tsx";
import NoImage from "../../assets/images/no-images.svg?react";

type PhotoData = {
  photoUrl: string;
  hashtags: string[];
  year: number;
  month: number;
  date: number;
  memo: string;
  isLiked: boolean;
};

type BoothFilterProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HashtagSearchModal({ setIsModalOpen }: BoothFilterProps) {
  const [hashTag, setHashTag] = useState<string>("");
  const [imageList, setImageList] = useState<PhotoData[]>([]);
  const { accessToken } = useAuthStore();

  const handleSearchPhotos = async (hashTag: string, accessToken: string) => {
    if (hashTag.length === 0) {
      return;
    }

    try {
      const res = await Get(`/api/v1/album/hashtag/${hashTag}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 200) {
        setImageList(res.data.payload);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setHashTag("");
    }
  };

  return (
    <Overlay>
      <Container>
        <header className="relative w-full flex flex-col items-center mb-4">
          <div className="flex items-center h-[60px]">
            <span className="font-semibold text-gray700 text-[22px]">해시태그별 검색</span>
            <CloseButton onClick={() => setIsModalOpen(false)}>
              <CloseIcon color={"grey"} />
            </CloseButton>
          </div>
          <hr className="h-[1.5px] w-full bg-gray200 " />
        </header>
        <InputContainer>
          <SearchIcon onClick={() => handleSearchPhotos(hashTag, accessToken)}>
            <Search />
          </SearchIcon>
          <input
            className="w-full bg-gray100 pl-2 text-gray400"
            placeholder="해시태그를 검색해보세요!"
            value={hashTag}
            onChange={(e) => setHashTag(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchPhotos(hashTag, accessToken);
              }
            }}
          />
        </InputContainer>

        {imageList.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[80vh] mt-4">
            <NoImage />
            <p className="text-gray400 mt-4">해시태그로 검색!</p>
          </div>
        ) : (
          <>
            <div className="flex-col justify-start items-start gap-[5px] inline-flex w-full ml-8 mt-3">
              <div className="text-[#171d24] text-[18px] font-semibold font-['Pretendard']">
                {imageList.length}장의 추억
              </div>
            </div>
            <ImageContainer>
              <ImageDiv>
                {imageList.map((image: PhotoData, index) => (
                  <div key={index} className="rounded-lg bg-gray100">
                    <div className="pl-[11px] pr-[11px] pt-[10px]">
                      <ImageCard photoUrl={image.photoUrl} isLiked={image.isLiked} id={index} />
                    </div>
                    <div className="pb-[10px] pt-[12px] pr-[11px] pl-[11px]">
                      {image.hashtags
                        .filter((tag) => tag) // 빈 문자열을 제외
                        .map((tag, index) => (
                          <span key={index} className="text-[#5453ee] text-sm font-semibold font-['Pretendard'] ml-0.5">
                            #{tag}
                          </span>
                        ))}
                      <div className="text-[#676f7b] text-[10px] font-normal font-['Pretendard']">
                        {image.year}년 {image.month}월 {image.date}일
                      </div>
                      <div className="text-[#959ba3] text-[10px] font-normal font-['Pretendard'] leading-[15px]">
                        {image.memo}
                      </div>
                    </div>
                  </div>
                ))}
              </ImageDiv>
            </ImageContainer>
          </>
        )}
      </Container>
    </Overlay>
  );
}
const Container = styled.div`
  ${tw`bg-background flex flex-col items-center min-h-screen w-full max-w-[480px] m-auto`}
  overflow-x: hidden;
`;

const ImageContainer = styled.div`
  ${tw`flex flex-col w-full h-[80vh] mt-3`}
  overflow-y: auto;
  position: relative;
  z-index: 1; /* 다른 요소들보다 낮게 설정 */
`;

const ImageDiv = styled.div`
  ${tw`grid gap-4 w-full pr-[16px] pl-[16px]`}
  max-width: 480px;
  grid-template-columns: repeat(2, 1fr); /* 두 개의 열 */
  grid-auto-rows: auto;
  overflow-y: auto;
`;

const Overlay = styled.div`
  ${tw`
    w-full h-full bg-[black] bg-opacity-40
    fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
    flex justify-center items-center
    z-[30]
  `}
`;

const CloseButton = styled.button`
  ${tw`absolute right-[10px]`}
`;

const InputContainer = styled.div`
  ${tw`w-10/12 p-2.5 bg-[#e9eaee] rounded-lg flex justify-end items-center `}
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.button`
  ${tw`w-6 p-px flex justify-center items-center`}
`;
