<script setup lang="ts">
import { reactive } from "vue";

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
      <h1>最新文章</h1>
    </div>

    <NImageGroup>
      <NSpace vertical size="large">
        <NSpace justify="center">
          <a :href="articles[0].link" target="_blank" class="link">
            <n-card :title="articles[0].title" embedded hoverable>
              <template #cover>
                <img class="cover" :src="articles[0].cover" />
              </template>
              {{ articles[0].content }}
            </n-card>
          </a>
          <a :href="articles[1].link" target="_blank" class="link">
            <n-card :title="articles[1].title" embedded hoverable>
              <template #cover>
                <img class="cover" :src="articles[1].cover" />
              </template>
              {{ articles[1].content }}
            </n-card>
          </a>
        </NSpace>
        <NSpace justify="center">
          <a :href="articles[2].link" target="_blank" class="link">
            <n-card :title="articles[2].title" embedded hoverable>
              <template #cover>
                <img class="cover" :src="articles[2].cover" />
              </template>
              {{ articles[2].content }}
            </n-card>
          </a>
          <a :href="articles[3].link" target="_blank" class="link">
            <n-card :title="articles[3].title" embedded hoverable>
              <template #cover>
                <img class="cover" :src="articles[3].cover" />
              </template>
              {{ articles[3].content }}
            </n-card>
          </a>
        </NSpace>
      </NSpace>
    </NImageGroup>
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
.link {
  text-decoration: none;
  color: inherit;
}
.cover {
  width: 28vw !important;
  height: 28vw !important;
  object-fit: cover;
}
.n-card {
  max-width: 28vw;
}
</style>
