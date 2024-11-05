import { Post } from "./index.ts";

export const uploadPhoto = async (
  accessToken: string,
  photoboothId: number,
  year: string,
  month: string,
  date: string,
  hashtag: string[],
  memo: string,
  filePath: string
) => {
  try {
    const res = await Post(
      "/api/v1/album",
      {
        photoboothId: photoboothId,
        year: year,
        month: month,
        date: date,
        hashtag: hashtag,
        memo: memo,
        filePath: filePath,
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
