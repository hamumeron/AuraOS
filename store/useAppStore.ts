import create from "zustand";

type AppState = {
  apps: Record<string, boolean>;
  openApp: (name: string) => void;
  closeApp: (name: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  apps: {},
  openApp: (name) => set((state) => ({ apps: { ...state.apps, [name]: true } })),
  closeApp: (name) =>
    set((state) => {
      const copy = { ...state.apps };
      delete copy[name];
      return { apps: copy };
    }),
}));
