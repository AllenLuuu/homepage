<script setup lang="ts">
import { RefreshFilled } from "@vicons/material";
import { ref } from "vue";
import { useWindowWidth } from "../store/index";

const windowWidth = useWindowWidth();

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

    <NImageGroup>
      <NSpace vertical>
        <NSpace justify="center">
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[0]"
          />
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[1]"
          />
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[2]"
          />
        </NSpace>
        <NSpace justify="center">
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[3]"
          />
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[4]"
          />
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[5]"
          />
        </NSpace>
        <NSpace justify="center">
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[6]"
          />
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[7]"
          />
          <NImage
            :width="windowWidth.width * 0.18"
            :height="windowWidth.width * 0.18"
            object-fit="cover"
            :src="pictures[8]"
          />
        </NSpace>
      </NSpace>
    </NImageGroup>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.img-container {
  width: 17vw;
  height: 17vw;
}
</style>
