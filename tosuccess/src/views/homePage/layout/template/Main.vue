<template>
  <div id="main-wrap" ref="showPage">
    <router-view/>
    <div class="to-top" v-show="isShow" @click="toTop"></div>
  </div>
</template>

<script>
import { getCurrentInstance, ref } from "vue";
export default {
  name: "mainPage",
  setup() {
    // dom节点
    const showPage = ref(null);

    const { ctx } = getCurrentInstance();

    const toTop = () => {
      // showPage.value.scrollTop = showPage.value.scrollHeight;
      showPage.value.scrollTop = 0
    };
    let isShow = ref(false);

    
    const handleScroll = () => {
      // 视口高度
      let boxVh = showPage.value.offsetHeight
      // dom 总高度
      let allHeight = showPage.value.scrollHeight
      if (showPage.value.scrollTop > 0) {
        isShow.value = true
      } else {
        isShow.value = false
      }
    };

    const handleScrollSetTime = () => {
      setTimeout(handleScroll, 1000)
    }


    window.addEventListener("scroll", handleScrollSetTime, true); // 监听（绑定）滚轮滚动事件

    return {
      showPage,
      toTop,
      isShow,
      handleScroll,
      handleScrollSetTime
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

#main-wrap {
  position: fixed;
  overflow: auto;
  top: 48px;
  left: $nav-width;
  bottom: 0;
  right: 0;
  border-top: 25px solid #eee;
  border-left: 25px solid #eee;
  border-bottom: 25px solid #eee;
  background-color: #fff;
}
.to-top {
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-top: solid 10px transparent;
  border-left: solid 10px transparent;
  border-right: solid 10px transparent;
  border-bottom: solid 20px #008cff;
}
</style>