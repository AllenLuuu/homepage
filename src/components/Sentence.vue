<script setup lang="ts">

const content = "年轻的人想着三十年前的月亮该是铜钱大的一个红黄的湿晕，像朵云轩信笺上落了一滴泪珠，陈旧而迷糊。老年人回忆中的三十年前的月亮是欢愉的，比眼前的月亮大、圆、白；然而隔着三十年的辛苦路望回看，再好的月色也不免带点凄凉。";
const source = "张爱玲《金锁记》";

</script>

<template>
  <div class="quote">“</div>
  <div class="content">{{content}}</div>
  <div class="content right" style="margin-top: 1.5rem;">——{{source}}</div>
  <div class="quote right">”</div>
</template>

<style>
.quote {
  width: auto;
  font-size: 5rem;
  font-weight: bold;
  font-family: Times, 'Times New Roman', serif;
  color: #ccc;
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
}
.right {
  text-align: right;
}
.content {
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Times, 'Times New Roman', serif;
  color: #ccc;
  padding-inline-start: 7rem;
  padding-inline-end: 7rem;
}
</style>
