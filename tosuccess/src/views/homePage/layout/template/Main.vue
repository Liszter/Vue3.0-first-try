<template>
  <div id="main-wrap">

    <h1 id="ccc">1123123</h1>

    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
     <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1>1123123</h1>
    <h1 id="ddd">1123123</h1>
    <a href="#ccc">111111111</a>
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

</style>