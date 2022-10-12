<script setup lang="ts">
import { DarkModeOutlined, LightModeOutlined } from "@vicons/material";
import { useMode } from "../store/index";

const mode = useMode();

function changeMode() {
  if (mode.mode === "dark") {
    mode.setMode("light");
  } else {
    mode.setMode("dark");
  }
};
</script>

<template>
  <div class="container">
    <NLayout embedded>
      <NLayoutHeader>
        <NGrid :cols="2">
          <NGi>
            <h1>Header</h1>
          </NGi>
          <NGi class="left">
            <NSpace size="large">
              <NButton text :focusable="false" @click="changeMode">
                <template #icon>
                  <NIcon size="20">
                    <LightModeOutlined v-if="mode.mode === 'dark'" />
                    <DarkModeOutlined v-else />
                  </NIcon>
                </template>
              </NButton>
              <NButton text :focusable="false"> GitHub </NButton>
              <NButton text :focusable="false"> 公众号 </NButton>
            </NSpace>
          </NGi>
        </NGrid>
      </NLayoutHeader>
      <NLayoutContent>
        <NGrid x-gap="12" :cols="5" class="main">
          <NGi></NGi>
          <NGi :span="3">
            <NSpace vertical>
              <NAvatar round size="large"> ? </NAvatar>
              <NCard title="每日一句">
                <p>你好</p>
              </NCard>
              <NCard title="精选图片">
                <p>你好</p>
              </NCard>
              <NSpace justify="center">
                <div style="width: 300px; margin: 0 auto; padding: 5px 0">
                  <a
                    target="_blank"
                    href="https://beian.miit.gov.cn/"
                    style="
                      display: inline-block;
                      text-decoration: none;
                      height: 20px;
                      line-height: 20px;
                    "
                  >
                    <p
                      style="
                        float: left;
                        height: 20px;
                        line-height: 20px;
                        margin: 0px 0px 0px 5px;
                        color: #939393;
                      "
                    >
                      苏ICP备2022036267号-1
                    </p>
                  </a>
                </div>

                <div style="width: 300px; margin: 0 auto; padding: 5px 0">
                  <a
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32050802011592"
                    style="
                      display: inline-block;
                      text-decoration: none;
                      height: 20px;
                      line-height: 20px;
                    "
                  >
                    <img src="beian-icon.png" style="float: left" />
                    <p
                      style="
                        float: left;
                        height: 20px;
                        line-height: 20px;
                        margin: 0px 0px 0px 5px;
                        color: #939393;
                      "
                    >
                      苏公网安备 32050802011592号
                    </p>
                  </a>
                </div>
              </NSpace>
            </NSpace>
          </NGi>
          <NGi></NGi>
        </NGrid>
      </NLayoutContent>
    </NLayout>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}
</style>
