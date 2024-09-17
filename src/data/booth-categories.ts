export type Category = {
  id: string;
  label: string;
};

//포토부스 브랜드 카테고리 데이터 세팅 -> 기획 확정 후 수정 필요
export const BoothCategories: Category[] = [
  { id: "INSAENGNECUT", label: "인생네컷" },
  { id: "HARUFILM", label: "하루필름" },
  { id: "PHOTOISM", label: "포토이즘박스" },
  { id: "PHOTOMATIC", label: "포토매틱" },
  { id: "PHOTOSIGNATURE", label: "포토시그니처" },
  { id: "SELFIX", label: "셀픽스" },
  { id: "DONT_LOOK_UP", label: "돈룩업" },
  { id: "GEUMEUMDAL", label: "그믐달" },
  { id: "MONOMANSION", label: "모노맨션" },
  { id: "SWITCH", label: "스위치" },
  { id: "PHOTOGRAY", label: "포토그레이" },
  { id: "PHOTODRINK", label: "포토드링크" },
  { id: "PLANB_STUDIO", label: "플랜비스튜디오" },
  { id: "PICDOT", label: "픽닷" },
];
