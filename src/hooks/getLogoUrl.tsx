import { BoothLogoUrl } from "../data/booth-categories";

// BoothLogoUrl에서 type에 맞는 url 찾기
export const getLogoUrl = (type: string) => {
  const logo = BoothLogoUrl.find((item) => item.id === type);
  return logo!.url; // 해당 type에 맞는 로고 URL 반환
};
