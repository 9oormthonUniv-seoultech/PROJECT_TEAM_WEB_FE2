import { Delete, Get, Post } from ".";
import { MyLikedBooth } from "../@types/my";
import { MyReview } from "../@types/review";

export const getMyReviews = async (accessToken: string) => {
  try {
    const res = await Get<{
      reviewCount: number;
      reviewMypageDetailDtoList: MyReview[];
    }>("/api/v1/review/mypage", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.payload;
  } catch (error) {}
};

export const getVisitedBooths = async (accessToken: string) => {
  try {
    const res = await Get("/api/v1/photobooth/visited", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.payload;
  } catch (error) {}
};

export const getLikedBooths = async (accessToken: string) => {
  try {
    const res = await Get<MyLikedBooth[]>("/api/v1/photobooth/like", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.payload;
  } catch (error) {}
};

export const postboothLike = async (accessToken: string, boothId: string) => {
  try {
    const res = await Post(
      `/api/v1/photobooth/like/${boothId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data.payload;
  } catch (error) {}
};

export const deleteboothLike = async (accessToken: string, boothId: string) => {
  try {
    const res = await Delete(`/api/v1/photobooth/like/${boothId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.payload;
  } catch (error) {}
};

export const checkBoothLike = async (accessToken: string, boothId: string) => {
  try {
    const res = await Get<boolean>(
      `/api/v1/photobooth/like/check/${boothId}`,

      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data.payload;
  } catch (error) {}
};

export const getPhotoLikes = async (accessToken: string) => {
  try {
    const res = await Get<{ albumId: number; photoUrl: string; like: boolean }[]>("/api/v1/album/favorite", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.payload;
  } catch (error) {}
};
