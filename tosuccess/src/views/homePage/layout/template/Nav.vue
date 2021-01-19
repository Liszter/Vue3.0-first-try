<template>
  <div id="nav-wrap">
    <div class="logo"></div>
    <ul>
        <li>组件1</li>
        <li>组件1</li>
        <li>组件1</li>
        <li>组件1</li>
        <li>组件1</li>
    </ul>
    <!-- menu-tree -->
  </div>
</template>
<script>
import { computed, getCurrentInstance } from "vue";
import { ref, reactive, unref } from "vue"; //ref接收一个参数 返回一个响应式对象  //computed是一个函数接收一个参数是函数

export default {
  setup() {
    const menuList = reactive([
      {
        id: '001',
        label: 'base1',
        name: '基础组件',
        children: []
      },
         {
        id: '002',
        label: 'base2',
        name: '基础组件',
        children: []
      },
         {
        id: '003',
        label: 'base3',
        name: '基础组件',
        children: []
      },
         {
        id: '004',
        label: 'base4',
        name: '基础组件',
        children: []
      }


    ])
    return {
    }
  }
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