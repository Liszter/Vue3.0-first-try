<template>
  <div>
      login

      <button @click="toHome">去首页</button>
  </div>
</template>

<script>
import { reactive, ref, isRef, toRefs, onMounted } from 'vue';
export default {

  setup(props, {refs, root}) {

    const toHome =()=>{
      console.log(1);
      root.router.push({
        name: 'homePage'
      })
    }
    console.log(111, root);
    return {
      toHome
    }
  }
}
</script>