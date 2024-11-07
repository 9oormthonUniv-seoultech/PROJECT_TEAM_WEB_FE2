import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { CommonError, CommonResponse } from "../@types/api";
import { useAuthStore } from "../store/useAuthStore";
import { reissueToken } from "./user";

export const axiosInstance = axios.create({
  baseURL: "https://pocket4cut.link",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const errorCodes = ["SEC4001", "SEC4011", "SEC4012", "SEC4010"];

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<CommonError>) => {
    console.log(error.response);
    if (error.config && error.response?.status && errorCodes.includes(error.response!.data.statusCode)) {
      console.log("진입");
      // 토큰 재발급 수행
      const { accessToken } = useAuthStore();
      console.log(accessToken);

      if (!accessToken) {
        throw new Error("AccessToken is undefined or null");
      }

      try {
        const res = await reissueToken(accessToken!);

        if (res) {
          useAuthStore.setState({
            accessToken: res.accessToken,
          });

          // 새로 발급 받은 accessToken을 에러가 발생한 요청의 헤더에 설정
          error.config.headers.Authorization = `Bearer ${res.accessToken}`;
          //로직 재수행
          return await axiosInstance(error.config);
        } else {
          throw new Error("AccessToken not received");
        }
      } catch (error) {
        console.error("Error in reissuing token:", error);
        useAuthStore.getState().logout();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export const Get = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.get(url, config);
  return response;
};

export const Post = async <T>(
  url: string,
  body: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.post(url, body, config);
  return response;
};

export const Delete = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await axiosInstance.delete(url, config);
  return response;
};
