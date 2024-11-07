import { BoothCategories } from "../data/booth-categories";
import { BoothTagCategories, PhotoTagCategories } from "../data/review-tag-categories";
import MonoUrl from "../assets/images/mono-logo.png";
// BoothLogoUrl에서 type에 맞는 url 찾기
export const getLogoUrl = (type: string) => {
  const logo = BoothCategories.find((item) => item.id === type);

  return logo ? logo!.imageUrl : MonoUrl; // 해당 type에 맞는 로고 URL 반환
};

export const searchLogoUrlByName = (name: string) => {
  const logo = BoothCategories.find((item) => name.includes(item.label));

  return logo ? logo!.imageUrl : MonoUrl; // 해당 type에 맞는 로고 URL 반환
};

export const getReviewBoothTagImgUrl = (name: string) => {
  const tag = BoothTagCategories.find((item) => item.label === name);

  return tag!.imageUrl; // 해당 type에 맞는 로고 URL 반환
};

export const getReviewPhotoTagImgUrl = (name: string) => {
  const tag = PhotoTagCategories.find((item) => item.label === name);

  return tag!.imageUrl; // 해당 type에 맞는 로고 URL 반환
};
