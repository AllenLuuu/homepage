<script setup lang="ts">
import { onMounted } from "vue";
import { darkTheme } from "naive-ui";
import Main from "./components/Main.vue";
import { useMode, useWindowWidth } from "./store/index";

const mode = useMode();
const windowWidth = useWindowWidth();

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
  
  windowWidth.setWidth(document.body.clientWidth);
  console.log(document);
  window.onresize = () => {
    windowWidth.setWidth(document.body.clientWidth);
  };
});
</script>

<template>
  <n-config-provider :theme="mode.mode === 'dark' ? darkTheme : null">
    <Main />
  </n-config-provider>
</template>

<style>
.container {
  height: 100%;
  width: 100%;
}
</style>
