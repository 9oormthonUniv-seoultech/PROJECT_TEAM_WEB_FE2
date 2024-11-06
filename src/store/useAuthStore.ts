import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;

  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () =>
        set({
          isLoggedIn: false,
          accessToken: null,
          refreshToken: null,
        }),
      accessToken: "",
      setAccessToken: (accessToken) => set({ accessToken }),
      refreshToken: "",
      setRefreshToken: (refreshToken) => set({ refreshToken }),
    }),
    {
      name: "user-storage",
    }
  )
);
