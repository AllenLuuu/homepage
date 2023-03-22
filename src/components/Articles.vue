<script setup lang="ts">
import { reactive } from "vue";
import { useMedia } from "../store";

const media = useMedia();

const articles = reactive([
  {
    link: "https://mp.weixin.qq.com/s/sRp3DHts-sUqETb-shmxsA",
    cover: "https://www.allenluuu.com/static/gzh/zjg.jpg",
    title: "浙大表面·紫金港篇",
    content: "突兀、奇异、陌生——这里是紫金港",
  },
  {
    link: "https://mp.weixin.qq.com/s/tLWKHjsNdj1a0ztk_f7-Sg",
    cover: "https://www.allenluuu.com/static/gzh/default.png",
    title: "作为艺术的摄影",
    content: "摄影艺术的魅力正在这半明半昧之间。",
  },
  {
    link: "https://mp.weixin.qq.com/s/UxbiGm0xS6RPp6xbp54wjg",
    cover: "https://www.allenluuu.com/static/gzh/default.png",
    title: "什么是（纯）艺术？",
    content: "Art for Arts sake.",
  },
  {
    link: "https://mp.weixin.qq.com/s/2HGb--cWQ76Y50J9Khd3IA",
    cover: "https://www.allenluuu.com/static/gzh/randomness.jpg",
    title: "游逛者小札#3 人生的生趣来自过程的随机性",
    content: "人生的所谓“生趣”全在那些不相干的事。",
  },
]);
</script>

<template>
  <div id="articles">
    <div class="header">
      <h2 v-if="media.isMobile">最新文章</h2>
      <h1 v-else>最新文章</h1>
    </div>

    <div class="container">
      <a
        v-for="article in articles"
        :href="article.link"
        target="_blank"
        class="link"
      >
        <n-card
          :title="article.title"
          embedded
          hoverable
          :size="media.isMobile ? 'small' : 'medium'"
        >
          <template #cover>
            <img class="cover" :src="article.cover" />
          </template>
          {{ article.content }}
        </n-card>
      </a>
    </div>
  </div>
</template>

<style scoped>
#articles {
  margin-top: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 15px;
}
.link {
  text-decoration: none;
  color: inherit;
  flex: 0 1 49.5%;
}
.cover {
  object-fit: cover;
  aspect-ratio: 1;
}
</style>
