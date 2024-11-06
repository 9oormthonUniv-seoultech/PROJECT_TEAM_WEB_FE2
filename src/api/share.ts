import { Post } from ".";

export const createLink = async (albumId: string, accessToken: string) => {
  try {
    const res = await Post<string>(
      `/api/v1/album/share?albumId=${albumId}`,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return res.data.payload;
  } catch (error) {}
};

export const saveShare = async (accessToken: string, shareId: string) => {
  try {
    const res = await Post(
      `/api/v1/album/${shareId}/saveShare`,
      {},
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return res.data.payload;
  } catch (error) {}
};
