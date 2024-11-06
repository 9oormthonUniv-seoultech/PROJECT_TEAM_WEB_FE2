import { Get } from ".";
import { UserData } from "../@types/user";

export const getUserInfo = async (accessToken: string) => {
  try {
    const res = await Get<UserData>("/v1/api/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};

export const reissueToken = async (accessToken: string) => {
  try {
    const res = await Get<{
      accessToken: string;
    }>("/v1/api/user/reissue", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data.payload;
  } catch (error) {}
};
