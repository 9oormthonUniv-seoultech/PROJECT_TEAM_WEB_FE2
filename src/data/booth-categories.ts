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
  id?: string;
  label: string;
  imageUrl: string;
};

export const BoothCategories: Category[] = [
  { id: "LIFE4CUT", label: "인생네컷", imageUrl: InsaengUrl },
  { id: "HARUFLIM", label: "하루필름", imageUrl: HaruUrl },
  { id: "PHOTOISM", label: "포토이즘", imageUrl: PhotoIsmUrl },
  { id: "PHOTOMATIC", label: "포토매틱", imageUrl: PhotoMaticUrl },
  { id: "PHOTOSIGNATURE", label: "포토시그니처", imageUrl: SignatureUrl },
  { id: "DONTLXXKUP", label: "돈룩업", imageUrl: LookUpUrl },
  { id: "OLDMOON", label: "그믐달", imageUrl: OldMoonUrl },
  { id: "MONOMANSION", label: "모노맨션", imageUrl: MonoUrl },
  { id: "PHOTOGRAY", label: "포토그레이", imageUrl: GrayUrl },
  { id: "PLANBSTUDIO", label: "플랜비스튜디오", imageUrl: PlanBUrl },
];
