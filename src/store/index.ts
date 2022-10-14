import { defineStore } from "pinia";

export const useMode = defineStore("mode", {
  state: () => ({
    dark: false,
  }),
  getters: {
    mode(): string {
      return this.dark ? "dark" : "light";
    },
  },
  actions: {
    setMode(mode: string) {
        this.dark = mode === "dark";
    }
  },
});

export const useWindowWidth = defineStore("windowWidth", {
  state: () => ({
    w: 0,
  }),
  getters: {
    isMobile(): boolean {
      return this.w < 768;
    },
    width(): number {
      return this.w;
    }
  },
  actions: {
    setWidth(width: number) {
      this.w = width;
    }
  },
});
