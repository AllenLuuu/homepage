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
    toggle() {
      this.dark = !this.dark;
    },
    setMode(mode: string) {
        this.dark = mode === "dark";
    }
  },
});
