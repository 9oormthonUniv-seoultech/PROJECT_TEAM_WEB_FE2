import { Get, Post } from ".";
import { Feature, Review, TagCnt } from "../@types/review";

export const submitReviewData = async (
  accessToken: string,
  photoboothId: string,
  rating: number,
  boothFeatures: number[],
  photoFeatures: number[],
  filePaths: string[],
  content: string
) => {
  const contentText = content === "" ? null : content;

  try {
    const res = await Post(
      "/api/v1/review",
      {
        photoboothId: photoboothId,
        rating: rating,
        boothFeatures: boothFeatures,
        photoFeatures: photoFeatures,
        filePaths: filePaths,
        content: contentText,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const getRating = async (boothId: string, accessToken: string) => {
  try {
    const res = await Get<number>(`/api/v1/photobooth/rating/${boothId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};

export const getRecentImages = async (boothId: string, accessToken: string) => {
  try {
    const res = await Get<{
      filePaths: string[];
      totalImageCount: number;
    }>(`/api/v1/review/images/${boothId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};

export const getRecentReviews = async (boothId: string, accessToken: string) => {
  try {
    const res = await Get<{
      reviewCount: number;
      reviews: Review[];
    }>(`/api/v1/review/reviews/${boothId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};

export const getBoothTags = async (boothId: string, accessToken: string) => {
  try {
    const res = await Get<TagCnt[]>(`/api/v1/review/boothfeatures/${boothId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};

export const getPhotoTags = async (boothId: string, accessToken: string) => {
  try {
    const res = await Get<TagCnt[]>(`/api/v1/review/photofeatures/${boothId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};

export const searchPhotoFeatures = async (accessToken: string) => {
  try {
    const res = await Get<Feature[]>(`/api/v1/review/allphotofeature`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};

export const searchBoothFeatures = async (accessToken: string) => {
  try {
    const res = await Get<Feature[]>(`/api/v1/review/allboothfeature`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};
export const getSixImages = async (boothId: string) => {
  try {
    const res = await Get(`/api/v1/review/images/${boothId}`);

    return res.data.payload;
  } catch (error) {}
};

export const pagingReviews = async (boothId: string, page: number, accessToken: string) => {
  try {
    const res = await Get<{
      reviewCount: number;
      reviews: Review[];
    }>(`/api/v1/review/allreviews/${boothId}?page=${page}&size=10`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data.payload;
  } catch (error) {}
};
