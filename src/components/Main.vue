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
}

function showQRCode() {}
</script>

<template>
  <div class="container">
    <NLayout embedded>
      <NLayoutHeader>
        <NGrid :cols="2">
          <NGi class="left">
            <h1>游逛者小站</h1>
          </NGi>
          <NGi class="right">
            <NSpace size="large">
              <NButton text :focusable="false" @click="changeMode">
                <template #icon>
                  <NIcon size="20">
                    <LightModeOutlined v-if="mode.mode === 'dark'" />
                    <DarkModeOutlined v-else />
                  </NIcon>
                </template>
              </NButton>

              <a
                class="link"
                href="https://github.com/AllenLuuu"
                target="_blank"
              >
                GitHub
              </a>
              <n-popover placement="bottom-end" trigger="click">
                <template #trigger>
                  <NButton text>
                    公众号
                  </NButton>
                </template>
                <div>
                  <img
                    src="gzh.bmp"
                    alt="公众号"
                  />
                </div>
              </n-popover>
            </NSpace>
          </NGi>
        </NGrid>
      </NLayoutHeader>
      <NLayoutContent>
        <NGrid x-gap="12" :cols="5" class="main">
          <NGi></NGi>
          <NGi :span="3">
            <NSpace vertical>
              <div class="avatar">
                <NAvatar round :size="100"> Allen Lu </NAvatar>
              </div>
              <div>
                <h1>Allen Lu</h1>
                <p>游逛者</p>
              </div>
              <NCard title="每日一句">
                <p>你好</p>
              </NCard>
              <NCard title="精选图片">
                <p>你好</p>
              </NCard>
              <NCard title="最新文章">
                <p>你好</p>
                <p>你好</p>
              </NCard>
              <NSpace justify="center" :size="50" style="margin-top: 20px">
                <div style="margin: 0 auto; padding: 5px 0">
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

                <div style="margin: 0 auto; padding: 5px 0">
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
.avatar {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  padding-left: 50px;
}
.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}
.link {
  text-decoration: none;
  color: inherit;
}
.link:hover {
  color: #5acea7;
}
</style>
