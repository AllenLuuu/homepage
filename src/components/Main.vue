<script setup lang="ts">
import {
  DarkModeOutlined,
  LightModeOutlined,
  CameraOutlined,
  BookOutlined,
} from "@vicons/material";
import { NPopover } from "naive-ui";
import { MenuOption } from "naive-ui";
import { reactive, h } from "vue";
import { useMode } from "../store/index";
import { PlanetOutline } from "@vicons/ionicons5";
import Hexagram from "../assets/hexagram.vue";
import Tags from "./Tags.vue";
import gzhQrCode from "/gzh.jpg";
import beianIcon from "/beian-icon.png";

const mode = useMode();

function changeMode() {
  if (mode.mode === "dark") {
    mode.setMode("light");
  } else {
    mode.setMode("dark");
  }
}

const menuOptions = reactive<MenuOption[]>([
  {
    type: "group",
    label: "生活",
    key: "life",
    children: [
      {
        label: "影集",
        key: "album",
        href: "photo.allenluuu.com",
        disabled: true,
        icon: () => h(CameraOutlined),
      },
      {
        label: "摘抄",
        key: "collection",
        href: "https://collections.allenluuu.com",
        icon: () => h(BookOutlined),
      },
    ],
  },
  {
    type: "group",
    label: "项目",
    key: "projects",
    children: [
      {
        label: "随机塔罗抽牌器",
        key: "random-tarot",
        href: "https://www.allenluuu.com/random-tarot",
        icon: () => h(Hexagram),
      },
      {
        label: "敬请期待...",
        key: "coming-soon",
        disabled: true,
      },
    ],
  },
]);

function renderMenuLabel(option: MenuOption) {
  if (option.disabled && option.label !== "敬请期待...") {
    return h(
      NPopover,
      { placement: "top", trigger: "hover" },
      {
        trigger: () => h("span", option.label as string),
        default: () => h("span", "还没做😖"),
      }
    );
  } else if ("href" in option) {
    return h(
      "a",
      { href: option.href, target: "_blank" },
      option.label as string
    );
  } else {
    return option.label as string;
  }
}
</script>

<template>
  <div class="container" ref="containerRef">
    <NLayout style="height: 100vh">
      <NLayoutHeader style="height: 82.3px" bordered>
        <NGrid :cols="2">
          <NGi class="left">
            <div class="inline">
              <NIcon :size="40">
                <PlanetOutline />
              </NIcon>
              <h1 style="overflow: hidden; white-space: nowrap;">游逛者小站</h1>
            </div>
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
                  <NButton text :focusable="false"> GitHub </NButton>
              </a>
              <n-popover placement="bottom-end" trigger="click">
                <template #trigger>
                  <NButton text> 公众号 </NButton>
                </template>
                <div>
                  <img :src="gzhQrCode" alt="公众号" />
                </div>
              </n-popover>
            </NSpace>
          </NGi>
        </NGrid>
      </NLayoutHeader>
      <NLayout
        id="main-content"
        position="absolute"
        style="top: 82.3px"
        has-sider
        :native-scrollbar="false"
      >
        <NGrid x-gap="12" :cols="5" class="main">
          <NGi>
            <NLayoutSider width="18vw" class="menu-container" bordered>
              <n-menu
                :value="null"
                :options="menuOptions"
                :render-label="renderMenuLabel"
              />
            </NLayoutSider>
          </NGi>
          <NGi :span="3">
            <NSpace vertical>
              <div id="intro">
                <div class="avatar">
                  <NAvatar
                    round
                    :size="100"
                    src="saturn.svg"
                    style="background: transparent"
                  />
                  <h2>Allen Lu</h2>
                </div>
                <NGrid :cols="5">
                  <NGi :offset="1" :span="3">
                    <Tags />
                  </NGi>
                </NGrid>
              </div>
              <Sentence />
              <Pictures />
              <Articles />
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
                    <img :src="beianIcon" style="float: left" />
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
          <NGi>
            <div class="side-anchor">
              <n-anchor :show-rail="true" offset-target="#main-content">
                <n-anchor-link title="个人介绍" href="#intro" />
                <n-anchor-link title="每日一句" href="#sentence" />
                <n-anchor-link title="精选图片" href="#pictures" />
                <n-anchor-link title="最新文章" href="#articles" />
              </n-anchor>
            </div>
          </NGi>
        </NGrid>
      </NLayout>
    </NLayout>
  </div>
</template>

<style scoped>
.avatar {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
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
.inline {
  display: inline-flex;
  align-items: center;
  gap: 15px;
}
.link {
  text-decoration: none;
  color: inherit;
}
.side-anchor {
  position: fixed;
  padding: 32px;
}
.menu-container {
  position: fixed;
  height: 100%;
}
</style>
