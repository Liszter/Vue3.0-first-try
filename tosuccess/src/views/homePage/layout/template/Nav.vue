<template>
  <div id="nav-wrap">
    <ul>
      <template v-for="(firstMenu, index) in navList">
        <li :key="index" v-if="!firstMenu.isHidden" @click="changeActive(index)" :class="isActive == index ?'is-active':''">
          {{firstMenu.name}}
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
  import { ref, computed, reactive, toRefs, onMounted, watch } from 'vue' //ref接收一个参数 返回一个响应式对象  //computed是一个函数接收一个参数是函数

export default {
  setup( props, context ) {
    const { ctx } = getCurrentInstance()
    console.log(ctx.$router.options.routes);
    // 菜单数组
    const navList = reactive(ctx.$router.options.routes)
    const isActive = ref('2')

    // 记录当前的菜单index
    const olderClickIndex = ref('')
    // 点击菜单时，样式变换，且 只能点击一次，多次点击同一个无效
    const changeActive = (index) => {
      if (olderClickIndex.value !== index) {
        olderClickIndex.value = index
      } else {
        return
      }
      isActive.value = index
    }
    
    
    return {
      navList,
      isActive,
      changeActive
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

  #nav-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: $nav-width;
    height: 100vh;
    background-color: #344a5f ;
  }
  .is-active {
    color: seagreen;
    background-color: rgba(0, 0, 0, 0.1);
    &::selection {
      background-color: transparent;
    }
  }

</style>