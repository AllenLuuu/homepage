<script setup lang="ts">
import { RefreshFilled } from "@vicons/material";
import { ref, onMounted } from "vue";

const pictures = ref<string[]>([
  "https://www.allenluuu.com/static/album/1.jpg",
  "https://www.allenluuu.com/static/album/2.jpg",
  "https://www.allenluuu.com/static/album/3.jpg",
  "https://www.allenluuu.com/static/album/4.jpg",
  "https://www.allenluuu.com/static/album/5.jpg",
  "https://www.allenluuu.com/static/album/6.jpg",
  "https://www.allenluuu.com/static/album/7.jpg",
  "https://www.allenluuu.com/static/album/8.jpg",
  "https://www.allenluuu.com/static/album/9.jpg",
]);

const containerWidth = ref(0);
const containerRef = ref<HTMLElement>();

onMounted(() => {
  containerWidth.value = containerRef.value?.clientWidth || 0;
  window.addEventListener("resize", () => {
    containerWidth.value = containerRef.value?.clientWidth || 0;
  });
});
</script>

<template>
  <div id="pictures">
    <div class="header">
      <h1>精选图片</h1>
      <NPopover placement="top" trigger="hover">
        <template #trigger>
          <div>
            <NButton disabled text :focusable="false">
              <template #icon>
                <n-icon>
                  <RefreshFilled />
                </n-icon>
              </template>
              换一批
            </NButton>
          </div>
        </template>
        <div>还没做😖</div>
      </NPopover>
    </div>

    <div ref="containerRef">
      <NImageGroup>
        <NSpace justify="space-between" :wrap="true" :size="[containerWidth * 0.0125, containerWidth * 0.00675]">
          <NImage
            v-for="picture in pictures"
            :key="picture"
            :src="picture"
            alt="image"
            :width="containerWidth * 0.325"
            :height="containerWidth * 0.325"
            object-fit="cover"
          />
        </NSpace>
      </NImageGroup>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
</style>
