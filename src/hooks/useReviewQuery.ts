import { useMemo } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { pagingReviewImages, pagingReviews } from "../api/review";

export const useReviewsInfiniteQuery = (boothId: string, accessToken: string) => {
  return useInfiniteQuery({
    queryKey: ["pagingReviews"],
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) => {
      const res = await pagingReviews(boothId, pageParam, accessToken);
      return {
        data: res?.reviews,
        reviewCount: res?.reviewCount,
        nextPage: res && res.reviews.length < 10 ? undefined : pageParam + 1,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export const useReviewImageInfiniteQuery = (boothId: string, accessToken: string) => {
  return useInfiniteQuery({
    queryKey: ["pagingReviewImages"],
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) => {
      const res = await pagingReviewImages(boothId, pageParam, accessToken);
      return {
        data: res,
        // 다음 페이지가 없을 경우 nextPage를 undefined로 설정하여 중단
        nextPage: res && res.length < 10 ? undefined : pageParam + 1,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
