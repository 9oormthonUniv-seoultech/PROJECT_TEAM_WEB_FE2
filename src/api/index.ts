import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { CommonResponse } from "../@types/api";

export const axiosInstance = axios.create({
  baseURL: "https://pocket4cut.link",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

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
