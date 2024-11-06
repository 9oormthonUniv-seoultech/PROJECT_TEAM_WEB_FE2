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

const errorCodes = ["SEC4001", "SEC4011", "SEC4012"];

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<CommonError>) => {
    if (error.config && error.response && error.response.data.errorCode in errorCodes) {
      // 토큰 재발급 수행
      const accessToken = useAuthStore((state) => state.accessToken);

      try {
        const res = await reissueToken(accessToken!);
        if (res) {
          useAuthStore.setState({
            isLoggedIn: true,
            accessToken: res.accessToken,
          });

          // 새로 발급 받은 accessToken을 에러가 발생한 요청의 헤더에 설정
          error.config.headers.Authorization = `Bearer ${res.accessToken}`;
          //로직 재수행
          return await axiosInstance(error.config);
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
