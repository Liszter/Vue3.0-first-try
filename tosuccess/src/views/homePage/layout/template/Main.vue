<template>
  <div id="main-wrap">
      <router-view></router-view>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'mainPage',
  setup() {
    const { ctx } = getCurrentInstance()
    console.log(ctx);
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

  #main-wrap {
    position: fixed;
    top: 48px;
    left: $nav-width;
    bottom: 0;
    right: 0;
    border: 25px solid #eee;
    background-color: #fff;
  }

</style>