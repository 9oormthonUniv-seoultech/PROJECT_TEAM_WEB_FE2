import { create } from "zustand";

type AlertState = {
  message: string;
  isOpen: boolean;
  openAlert: (message: string) => Promise<void>;
  closeAlert: (callback?: () => void) => void;
};

export const useAlertStore = create<AlertState>((set) => ({
  message: "",
  isOpen: false,
  openAlert: (message) => {
    return new Promise((resolve) => {
      set({
        message,
        isOpen: true,
        closeAlert: (callback) => {
          // 상태 업데이트
          set({ isOpen: false, message: "" });
          // 추가 작업 수행
          if (callback) callback();
          resolve();
        },
      });
    });
  },
  closeAlert: (callback) => {
    set({ isOpen: false, message: "" });
    if (callback) callback(); // 추가 작업 실행
  },
}));
