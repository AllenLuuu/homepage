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
    },
  },
});

export const useMedia = defineStore("media", {
  state: () => ({
    isMobile: false,
  }),
  getters: {
    isPhone(): boolean {
      return this.isMobile;
    },
  },
  actions: {
    setMedia(media: "mobile" | "desktop") {
      this.isMobile = media === "mobile";
    },
  },
});
