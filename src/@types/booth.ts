export type BoothInfo = {
  id: number;
  name: string;
  brand: string;
  x: number;
  y: number;
};

export type SpecificBoothInfo = {
  name: string;
  road: string;
  photoBoothBrand: string;
  x: number;
  y: number;
};

export type BoothModalReviewInfo = {
  name: string;
  features: string[];
  rating: number;
  imageCount: number;
  reviewCount: number;
  x: number;
  y: number;
};
