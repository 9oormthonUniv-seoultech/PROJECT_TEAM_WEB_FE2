import axios from "axios";
import { Post } from ".";

export const getPresignedUrl = async (prefix: string, fileName: string, accessToken: string) => {
  try {
    const res = await Post<{
      url: string;
      filePath: string;
    }>(
      "/api/v1/file",
      {
        prefix: prefix,
        fileName: fileName,
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

export const uploadToS3 = async (presignedUrl: string, file: File) => {
  try {
    await axios.put(presignedUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
