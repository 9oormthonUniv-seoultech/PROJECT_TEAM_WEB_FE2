import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;

  accessToken: string | null;

  setAccessToken: (accessToken: string) => void;
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
        }),
      accessToken: "",
      setAccessToken: (accessToken) => set({ accessToken }),
    }),
    {
      name: "user-storage",
    }
  )
);
