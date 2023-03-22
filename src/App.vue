<script setup lang="ts">
import { onMounted } from "vue";
import { darkTheme, GlobalThemeOverrides } from "naive-ui";
import Main from "./components/Main.vue";
import Mobile from "./components/Mobile.vue";
import { useMode, useMedia } from "./store/index";

const mode = useMode();
const media = useMedia();

const themeOverrides: GlobalThemeOverrides = {
  common: {
    "primaryColor": "#C26EFFFF",
    "primaryColorHover": "#D280FFFF",
    "primaryColorPressed": "#AB37E0FF",
    "primaryColorSuppl": "#D280FFFF"
  },
};

onMounted(() => {
  let query = window.matchMedia("(prefers-color-scheme: dark)");
  if (query.matches) {
    mode.setMode("dark");
  } else {
    mode.setMode("light");
  }
  query.addEventListener("change", (e) => {
    if (e.matches) {
      mode.setMode("dark");
    } else {
      mode.setMode("light");
    }
  });

  let windowWidth = document.body.clientWidth;
  if (windowWidth < 768) {
    media.setMedia("mobile");
  } else {
    media.setMedia("desktop");
  }
  window.addEventListener("resize", () => {
    let windowWidth = document.body.clientWidth;
    if (windowWidth < 768) {
      media.setMedia("mobile");
    } else {
      media.setMedia("desktop");
    }
  });
});
</script>

<template>
  <n-config-provider :theme="mode.mode === 'dark' ? darkTheme : null" :theme-overrides="themeOverrides">
    <Mobile v-if="media.isMobile" />
    <Main v-else />
  </n-config-provider>
</template>

<style>
.container {
  height: 100%;
  width: 100%;
}
</style>
