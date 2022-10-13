<script setup lang="ts">
import { DarkModeOutlined, LightModeOutlined } from "@vicons/material";
import { computed } from "@vue/reactivity";
import { MenuOption } from "naive-ui";
import { reactive, h } from "vue";
import { useMode } from "../store/index";

const mode = useMode();

const menuBorderColor = computed(() => {
  return mode.mode === "dark"
    ? "rgba(255, 255, 255, 0.09)"
    : "rgb(239, 239, 245)";
});

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
      },
      {
        label: "摘抄",
        key: "collection",
        href: "collection.allenluuu.com",
        disabled: true,
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
  if ("href" in option && !option.disabled) {
    return h(
      "a",
      { href: option.href, target: "_blank" },
      option.label as string
    );
  }
  return option.label as string;
}
</script>

<template>
  <div class="container" ref="containerRef">
    <NLayout style="height: 100vh">
      <NLayoutHeader style="height: 85px" bordered>
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
                  <NButton text> 公众号 </NButton>
                </template>
                <div>
                  <img src="gzh.bmp" alt="公众号" />
                </div>
              </n-popover>
            </NSpace>
          </NGi>
        </NGrid>
      </NLayoutHeader>
      <NLayout
        id="main-content"
        position="absolute"
        style="top: 85px"
        has-sider
        :native-scrollbar="false"
      >
        <NGrid x-gap="12" :cols="5" class="main">
          <NGi>
            <NLayoutSider width="18vw" class="menu-container" bordered>
              <NMenu
                class="menu"
                accordion
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
                  <NAvatar round :size="100"> Allen Lu </NAvatar>
                </div>
                <div>
                  <h1>你好</h1>
                  <p>你好</p>
                </div>
              </div>
              <div id="sentence">
                <h1>每日一句</h1>
                <Sentence />
              </div>
              <NCard id="pictures" title="精选图片">
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
              </NCard>
              <NCard id="articles" title="最新文章">
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
                <p>你好</p>
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
.side-anchor {
  position: fixed;
  padding: 32px;
}
.menu {
  width: 18vw;
}
.menu-container {
  position: fixed;
  height: 100%;
}
</style>
