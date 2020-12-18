<template>
  <!-- 头部盒子 -->
  <div id="header-wrap" :style="activeStyle">
    <!-- 左边 -->
    <div class="wrap-left">
      <!-- 折叠按钮 控制左菜单的 isShow -->
      <div>折叠</div>
      <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb> -->
      <!-- 面包屑 -->
      <!-- <div>面包屑</div> -->
    </div>
    <!-- 右边 -->
    <div class="wrap-right">
      <div @click="toggleScreen">全屏</div>
      <div>
        <label>背景<input v-model="color" type="color" /></label>
      </div>
      <div>字体</div>
      <div>用户头像</div>
    </div>
    <!-- <div class="wrap">
      <input v-model="color" type="color" />
    </div> -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import $global from '@/utils/global'
import { computed, onMounted, reactive, ref, watch } from "vue";
import screenfull from "screenfull";

export default {
  name: "header-warp",
  setup() {
    const store = useStore();
    let isFullscreen = ref(false);

    const change = () => {
      isFullscreen = !isFullscreen;
    };

    if (screenfull.isEnabled) {
      screenfull.on("change", change);
    }
    const theme = $global.getStorage('theme') || store.state.settings.theme;
    const color = ref(theme);
    const changeTheme = () => {
      store.dispatch("settings/changeSetting", {
        key: "theme",
        value: color.value,
      });
    };

    const activeStyle = reactive({ background: "" });
    watch(() => {
      activeStyle.background = color.value;
      $global.setStorage("theme", color.value);
      changeTheme();
    });

    const toggleScreen = () => {
      if (!screenfull.isEnabled) {
        alert("你的浏览器不支持全屏");
        return false;
      } else {
        screenfull.toggle();
      }
    };

    onMounted(() => {});
    return {
      changeTheme,
      color,
      theme,
      activeStyle,
      toggleScreen,
      isFullscreen
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
#header-wrap {
  position: fixed;
  top: 0;
  left: $nav-width;
  right: 0;
  height: 48px;
  color: #fff;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrap-left,
.wrap-right {
  div {
    padding: 0 15px;
  }
  line-height: 2;
  input {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    padding: none;
    outline: none;
  }
  display: flex;
}
.wrap-left {
  justify-content: flex-start;
}
.wrap-right {
  justify-content: flex-end;
}
</style>