<script setup lang="ts">
import { onMounted } from "vue";
import { darkTheme, GlobalThemeOverrides } from "naive-ui";
import Main from "./components/Main.vue";
import { useMode } from "./store/index";

const mode = useMode();

const themeOverrides: GlobalThemeOverrides = {
  common: {
    "primaryColor": "#C26EFFFF",
    "primaryColorHover": "#D280FFFF",
    "primaryColorPressed": "#AB37E0FF",
    "primaryColorSuppl": "#D280FFFF"
  },
};

onMounted(() => {
  let media = window.matchMedia("(prefers-color-scheme: dark)");
  if (media.matches) {
    mode.setMode("dark");
  } else {
    mode.setMode("light");
  }
  media.addEventListener("change", (e) => {
    if (e.matches) {
      mode.setMode("dark");
    } else {
      mode.setMode("light");
    }
  });
});
</script>

<template>
  <n-config-provider :theme="mode.mode === 'dark' ? darkTheme : null" :theme-overrides="themeOverrides">
    <Main />
  </n-config-provider>
</template>

<style>
.container {
  height: 100%;
  width: 100%;
}
</style>
