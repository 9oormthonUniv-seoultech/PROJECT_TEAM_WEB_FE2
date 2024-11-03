export type Review = {
  photoboothId?: number;
  name: string;
  year: number;
  month: string;
  date: string;
  contents: string;
  features: string[];
  imageUrl: string;
  imageCount: number;
};

export type Feature = {
  id: number;
  featureName: string;
};

export type TagCnt = {
  featureName: string;
  count: number;
};
