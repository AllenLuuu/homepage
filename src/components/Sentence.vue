<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { RefreshFilled } from "@vicons/material";
import { useMedia } from "../store/index";
import { MobileButtonOverrides } from "./common-themes";

interface Collection {
  content: string;
  author: string;
  book: string;
}

const media = useMedia();
const collection = ref<Collection | null>(null);

async function randSentence() {
  const response = await fetch(
    "https://collections.allenluuu.com/api/collection/starred/rand-one"
  );
  if (response.ok) {
    const res = await response.json();
    if (res.code === 0) {
      collection.value = res.data as Collection;
    }
  }
}

const source = computed(() => {
  let source = "";
  if (collection.value?.author) {
    source += collection.value.author;
  }
  if (collection.value?.book) {
    source += `《${collection.value.book}》`;
  }
  return source;
});

onMounted(() => {
  randSentence();
});
</script>

<template>
  <div id="sentence">
    <div class="header">
      <h2 v-if="media.isMobile">每日一句</h2>
      <h1 v-else>每日一句</h1>
      <NButton
        text
        :focusable="false"
        :theme-overrides="media.isMobile ? MobileButtonOverrides : {}"
        @click="randSentence"
      >
        <template #icon>
          <n-icon>
            <RefreshFilled />
          </n-icon>
        </template>
        换一句
      </NButton>
    </div>
    <div class="quote">“</div>
    <div class="content">{{ collection?.content }}</div>
    <div
      v-if="collection?.author || collection?.book"
      class="content right"
      style="margin-top: 1.5rem"
    >
      —— {{ source }}
    </div>
    <div class="quote right">”</div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.quote {
  width: auto;
  font-size: 5rem;
  font-weight: bold;
  font-family: Times, "Times New Roman", serif;
  color: rgba(150, 150, 150, 0.5);
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
}
.right {
  text-align: right;
}
.content {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: v-sans, v-mono, "Times New Roman", Times, serif;
  padding-inline-start: 7rem;
  padding-inline-end: 7rem;
  white-space: pre-line;
}

@media (max-width: 768px) {
  .quote {
    font-size: 3rem;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
  }
  .content {
    font-size: 1rem;
    padding-inline-start: 3rem;
    padding-inline-end: 3rem;
  }
}
</style>
