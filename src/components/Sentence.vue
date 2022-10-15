<script setup lang="ts">
import { RefreshFilled } from "@vicons/material";
const content =
  "我在土星照临下来到这个世界——土星运行最慢，是一颗充满迂回曲折、耽搁停留的行星……";
const source = "瓦尔特·本雅明";
</script>

<template>
  <div id="sentence">
    <div class="header">
      <h1>每日一句</h1>
      <NPopover placement="top" trigger="hover">
        <template #trigger>
          <div>
            <NButton disabled text :focusable="false">
              <template #icon>
                <n-icon>
                  <RefreshFilled />
                </n-icon>
              </template>
              换一句
            </NButton>
          </div>
        </template>
        <div>还没做😖</div>
      </NPopover>
    </div>
    <div class="quote">“</div>
    <div class="content">{{ content }}</div>
    <div class="content right" style="margin-top: 1.5rem">——{{ source }}</div>
    <div class="quote right">”</div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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
}
</style>
