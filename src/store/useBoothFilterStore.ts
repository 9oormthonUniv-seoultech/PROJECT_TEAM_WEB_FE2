import { create } from "zustand";
import { devtools } from "zustand/middleware";
type BoothFilterState = {
  lat: number;
  lng: number;
  selectedBrands: string[] | null;
  setLat: (lat: number) => void;
  setLng: (lng: number) => void;
  setSelectedBrands: (brands: string[]) => void;
};

const useBoothFilterStore = create<BoothFilterState>()(
  devtools((set, get) => ({
    lat: 0,
    lng: 0,
    selectedBrands: [],
    setLat: (lat) => set({ lat }),
    setLng: (lng) => set({ lng }),
    setSelectedBrands: (brands) => set({ selectedBrands: brands }),
  }))
);

export default useBoothFilterStore;
