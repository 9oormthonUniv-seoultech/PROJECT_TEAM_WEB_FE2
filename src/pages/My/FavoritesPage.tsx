import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ImageCard from "../../components/Album/ImageCard";
import { useQuery } from "@tanstack/react-query";
import { getPhotoLikes } from "../../api/my";
import { useAuthStore } from "../../store/useAuthStore";
import NoImage from "../../assets/images/no-images.svg?react";
function FavoritesPage() {
  const { accessToken } = useAuthStore();
  //찜한 부스 조회
  const { data: likedPhotoData } = useQuery({
    queryKey: ["getLikedPhotos"],
    queryFn: () => getPhotoLikes(accessToken!),
  });
  return (
    <>
      {likedPhotoData &&
        (likedPhotoData.length > 0 ? (
          <Container>
            {likedPhotoData.map((item, index) => (
              <ImageCard id={item.albumId} photoUrl={item.photoUrl} isLiked={item.like} key={index} />
            ))}
          </Container>
        ) : (
          <div className="flex flex-col items-center mx-auto mt-20">
            <NoImage />
            <p className="text-gray400 mt-4">즐겨찾기한 사진이 없어요</p>
          </div>
        ))}
    </>
  );
}

export default FavoritesPage;
const Container = styled.div`
  ${tw`w-full grid gap-[10px] mt-[10px] px-[16px]`}
  grid-template-columns: repeat(2, 1fr);
`;
