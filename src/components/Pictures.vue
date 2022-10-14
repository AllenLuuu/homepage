<script setup lang="ts">
import { RefreshFilled } from "@vicons/material";
import { onMounted, ref } from "vue";

const clientWidth = ref(0);
onMounted(() => {
  clientWidth.value = document.body.clientWidth;
  window.onresize = () => {
    clientWidth.value = document.body.clientWidth;
  };
});

const pictures = ref<string[]>([
  "https://www.allenluuu.com/static/random-tarot/cards/Major/Fool.jpg",
  "https://www.allenluuu.com/static/random-tarot/cards/Major/Magician.jpg",
  "https://www.allenluuu.com/static/random-tarot/cards/Major/High_Priestess.jpg",
  "https://www.allenluuu.com/static/random-tarot/cards/Major/Empress.jpg",
  "https://www.allenluuu.com/static/random-tarot/cards/Major/Emperor.jpg",
  "https://www.allenluuu.com/static/random-tarot/cards/Major/Hierophant.jpg",
  "https://www.allenluuu.com/static/random-tarot/cards/Major/Lovers.jpg",
  "https://www.allenluuu.com/static/random-tarot/cards/Major/Chariot.jpg",
  "https://www.allenluuu.com/static/random-tarot/cards/Major/Strength.jpg",
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
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
            object-fit="cover"
            :src="pictures[0]"
          />
          <NImage
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
            object-fit="cover"
            :src="pictures[1]"
          />
          <NImage
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
            object-fit="cover"
            :src="pictures[2]"
          />
        </NSpace>
        <NSpace justify="center">
          <NImage
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
            object-fit="cover"
            :src="pictures[3]"
          />
          <NImage
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
            object-fit="cover"
            :src="pictures[4]"
          />
          <NImage
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
            object-fit="cover"
            :src="pictures[5]"
          />
        </NSpace>
        <NSpace justify="center">
          <NImage
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
            object-fit="cover"
            :src="pictures[6]"
          />
          <NImage
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
            object-fit="cover"
            :src="pictures[7]"
          />
          <NImage
            :width="clientWidth * 0.18"
            :height="clientWidth * 0.18"
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
