import { Category } from "./booth-categories";
import CleanTool from "../assets/images/review_tags/tool.svg?url";
import Sunglass from "../assets/images/review_tags/odd.svg?url";
import Flower from "../assets/images/review_tags/selfie.svg?url";
import MultipleBg from "../assets/images/review_tags/multiple_bg.svg?url";
import LargeBooth from "../assets/images/review_tags/large_booth.svg?url";
import LargeWait from "../assets/images/review_tags/large_wait.svg?url";
import CleanBooth from "../assets/images/review_tags/clean_booth.svg?url";
import MultipleFrame from "../assets/images/review_tags/multiple_frame.svg?url";
import Powder from "../assets/images/review_tags/powder.svg?url";
import CleanPhoto from "../assets/images/review_tags/clean-photo.svg?url";
import Dark from "../assets/images/review_tags/dark-photo.svg?url";
import Natural from "../assets/images/review_tags/natural.svg?url";
import LightPhoto from "../assets/images/review_tags/light-photo.svg?url";
import NoLight from "../assets/images/review_tags/no-light.svg?url";
export const BoothTagCategories: Category[] = [
  {
    label: "깔끔한 소품",
    imageUrl: CleanTool,
  },
  {
    label: "홀수 출력 가능",
    imageUrl: Sunglass,
  },
  {
    label: "예쁜 셀카존",
    imageUrl: Flower,
  },
  {
    label: "다양한 배경색",
    imageUrl: MultipleBg,
  },
  {
    label: "넓은 대기 공간",
    imageUrl: LargeWait,
  },
  {
    label: "넓은 부스 공간",
    imageUrl: LargeBooth,
  },
  {
    label: "청결한 부스",
    imageUrl: CleanBooth,
  },
  {
    label: "다양한 프레임",
    imageUrl: MultipleFrame,
  },
  {
    label: "좋은 파우더룸",
    imageUrl: Powder,
  },
];

export const PhotoTagCategories: Category[] = [
  {
    label: "선명한 화질",
    imageUrl: CleanPhoto,
  },
  {
    label: "생각보다 어두움",
    imageUrl: Dark,
  },
  {
    label: "자연스러운 보정",
    imageUrl: Natural,
  },

  {
    label: "생각보다 밝음",
    imageUrl: LightPhoto,
  },
  {
    label: "빛번짐 없음",
    imageUrl: NoLight,
  },
  {
    label: "쿨톤 필터 가능",
    imageUrl: CleanPhoto,
  },
];
