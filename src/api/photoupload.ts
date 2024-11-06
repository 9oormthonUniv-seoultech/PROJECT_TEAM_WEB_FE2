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
    const res = await Post<{
      photoboothId: string;
      year: number;
      month: number;
      date: number;
      hashtag: string[];
      memo: string;
      filePath: string;
    }>(
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
    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};
