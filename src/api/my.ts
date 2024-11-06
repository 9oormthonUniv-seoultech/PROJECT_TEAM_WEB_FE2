import { Get } from ".";
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
