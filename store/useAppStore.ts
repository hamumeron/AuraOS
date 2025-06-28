import create from "zustand";

type AppStore = {
  openApp: (appId: string) => void;
  // 他に状態やメソッドがあればここに追加
  activeAppId: string | null;
  setActiveAppId: (id: string | null) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  activeAppId: null,
  openApp: (appId: string) => set({ activeAppId: appId }),
  setActiveAppId: (id) => set({ activeAppId: id }),
}));
