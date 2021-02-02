<template>
  <!-- <div id="nav-wrap" :style="{ background: theme }"> -->
  <div id="nav-wrap">
    <div class="logo"></div>
    <ul>
      <template v-for="(firstMenu, index) in navList">
        <li
          :key="index"
          v-if="!firstMenu.isHidden"
          @click="changeActive(index)"
          :class="isActive == index ? 'is-active' : ''"
        >
          {{ firstMenu.name }}
        </li>
      </template>
    </ul>
    <!-- menu-tree -->
  </div>
</template>
<script>
import { computed, getCurrentInstance } from "vue";
import { ref, reactive, unref } from "vue"; //ref接收一个参数 返回一个响应式对象  //computed是一个函数接收一个参数是函数
import { useStore } from "vuex";

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    // 菜单数组
    const navList = reactive(ctx.$router.options.routes);
    const route = unref(ctx.$router.currentRoute);
    const ccc = route.matched.filter((item) => item.name);
    const isActive = ref("2");
    const store = useStore();


    const theme = computed(() => store.state.settings.theme);

    // 记录当前的菜单index
    const olderClickIndex = ref("");
    // 点击菜单时，样式变换，且 只能点击一次，多次点击同一个无效
    const changeActive = (index) => {
      if (olderClickIndex.value !== index) {
        olderClickIndex.value = index;
      } else {
        return;
      }
      isActive.value = index;
    };
    return {
      navList,
      isActive,
      theme,
      changeActive,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $nav-width;
  height: 100vh;
}
.is-active {
  color: #42b983;
  background-color: rgba(0, 0, 0, 0.1);
  &::selection {
    background-color: transparent;
  }
}
</style>