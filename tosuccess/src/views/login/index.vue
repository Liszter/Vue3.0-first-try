<template>
  <div>
      login

      <button @click="toHome">去首页</button>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import { reactive, ref, isRef, toRefs, onMounted } from 'vue';
export default {
  setup(props, context) {
  const { ctx } = getCurrentInstance()
  // route
  const router = ctx.$router
  const toHome =()=>{
      router.push({
        name: 'homePage'
      })
    }
    return {
      toHome
    }
  }
}
</script>