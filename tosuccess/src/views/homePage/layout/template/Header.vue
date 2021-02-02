<template>
  <!-- 头部盒子 -->
  <div id="header-wrap" :style="activeStyle">
    <!-- 左边 -->
    <div class="wrap-left">
      <!-- 折叠按钮 控制左菜单的 isShow -->
      <div>折叠 </div>
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
      <ul>
        <li>
          <i class="fullScrean iconfont" :class="[state.isFullscreen === false ? 'iconfont icon-icon-': 'icon-tuichuquanping']" @click="toggleScreen"></i>
        </li>
      
         <li>
           <color-picker
            title="更改主题"
            v-model="color"
            size="20"
            @change="hanleInput"
            ></color-picker>
        </li>
        <li>
          <font-picker></font-picker>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/form/input/color-pick'
import FontPicker from '@/components/form/input/font-pick'
import { useStore } from "vuex";
import $global from "@/utils/global";
import { computed, onMounted, reactive, ref, watchEffect } from "vue";
import screenfull from "screenfull";

export default {
  name: "header-warp",
  components: {
    ColorPicker,
    FontPicker
  },
  setup() {
    const store = useStore();
    // 背景色
    const theme = $global.getStorage("theme") || store.state.settings.theme;
    let color = ref(theme);
    const changeTheme = () => {
      store.dispatch("settings/changeSetting", {
        key: "theme",
        value: color.value,
      });
    };
    // const color11
    let hanleInput = function(val) {
     color.value = val
    }

    const activeStyle = reactive({ background: "" });
    watchEffect(() => {
      activeStyle.background = color.value;
      $global.setStorage("theme", color.value);
      changeTheme();
    });

    /**
     *  开关全屏功能
     **/
    // 默认不开启全屏  是否全屏
    const isFullscreen = ref(false)
    const state = reactive({
      isFullscreen
    })


    const change = () => {
      state.isFullscreen = !state.isFullscreen
    };
    
    if (screenfull.isEnabled) {
      screenfull.on("change", change);
    }
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
      state,
      hanleInput
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
  li {
    margin: 0 15px;
    height: 100%;
    display: flex;
    align-items: center;
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
  // width: 200px;
  list-style-type: none;
  ul>li {
    float: left;
    padding: 0 10px;
  }
  ul::after {
    content: '';
    display: none;
    clear: both;
  }
  .fullScrean {
    font-size: 18px;
    cursor: pointer;
  }
}
</style>