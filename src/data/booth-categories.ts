import HaruUrl from "../assets/images/haru-logo.png";
import InsaengUrl from "../assets/images/insaeng-logo.png";
import PhotoIsmUrl from "../assets/images/photoism-logo.png";
import PhotoMaticUrl from "../assets/images/photomatic-logo.jpg";
import SignatureUrl from "../assets/images/signature-logo.jpg";
import LookUpUrl from "../assets/images/lookup-logo.png";
import OldMoonUrl from "../assets/images/oldmoon-logo.jpg";
import MonoUrl from "../assets/images/mono-logo.png";
import GrayUrl from "../assets/images/gray-logo.jpeg";
import PlanBUrl from "../assets/images/planb-logo.png";
export type Category = {
  id: string;
  label: string;
};

export type UrlCategory = {
  id: string;
  url: string;
};

//포토부스 브랜드 카테고리 데이터 세팅 -> 기획 확정 후 수정 필요
export const BoothCategories: Category[] = [
  { id: "INSAENGNECUT", label: "인생네컷" },
  { id: "HARUFILM", label: "하루필름" },
  { id: "PHOTOISM", label: "포토이즘" },
  { id: "PHOTOMATIC", label: "포토매틱" },
  { id: "PHOTOSIGNATURE", label: "포토시그니처" },
  { id: "DONT_LOOK_UP", label: "돈룩업" },
  { id: "GEUMEUMDAL", label: "그믐달" },
  { id: "MONOMANSION", label: "모노맨션" },
  { id: "PHOTOGRAY", label: "포토그레이" },
  { id: "PLANB_STUDIO", label: "플랜비스튜디오" },
];

export const BoothLogoUrl: UrlCategory[] = [
  { id: "INSAENGNECUT", url: InsaengUrl },
  { id: "HARUFILM", url: HaruUrl },
  { id: "PHOTOISM", url: PhotoIsmUrl },
  { id: "PHOTOMATIC", url: PhotoMaticUrl },
  { id: "PHOTOSIGNATURE", url: SignatureUrl },
  { id: "DONT_LOOK_UP", url: LookUpUrl },
  { id: "GEUMEUMDAL", url: OldMoonUrl },
  { id: "MONOMANSION", url: MonoUrl },
  { id: "PHOTOGRAY", url: GrayUrl },
  { id: "PLANB_STUDIO", url: PlanBUrl },
];
