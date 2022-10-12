<script setup lang="ts">
import { onMounted, ref } from "vue";
import { darkTheme, NConfigProvider } from "naive-ui";
import Main from "./components/Main.vue";
const isDark = ref(false);

onMounted(() => {
  let media = window.matchMedia("(prefers-color-scheme: dark)");
  isDark.value = media.matches;
  console.log("isDark", isDark.value);
  media.addEventListener("change", (e) => {
    isDark.value = e.matches;
  });
});
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <Main />
  </n-config-provider>
</template>

<style>
.container {
  height: 100%;
  width: 100%;
}
</style>
