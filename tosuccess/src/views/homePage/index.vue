<template>
  <div>

     <div class="main-page">
        1231
     </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
  import { ref, computed, reactive, toRefs, onMounted, watch } from 'vue' //ref接收一个参数 返回一个响应式对象  //computed是一个函数接收一个参数是函数

export default {
  setup( props, context ) {
  const { ctx } = getCurrentInstance()

  },
}
</script>
<style lang="scss" scoped>
.main-page {
  height: 1000px;
}
</style>