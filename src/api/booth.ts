import { Get } from ".";
import { BoothInfo, SpecificBoothInfo } from "../@types/booth";

export const getBoothLatLng = async (lat: number, lng: number, brands: string[]) => {
  let queryParams;
  if (brands?.length > 0) {
    queryParams = brands.map((brand) => `lat=${lat}&lon=${lng}&brand=${brand}`).join("&");
  } else {
    queryParams = `lat=${lat}&lon=${lng}`;
  }

  try {
    const res = await Get<BoothInfo[]>(`/v1/photobooth?${queryParams}`);
    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};

export const getBoothInfo = async (id: string) => {
  try {
    const res = await Get<SpecificBoothInfo>(`/v1/photobooth/${id}`);
    return res.data.payload;
  } catch (error) {
    console.log(error);
  }
};