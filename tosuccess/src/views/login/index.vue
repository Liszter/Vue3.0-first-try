<template>
  <div>
      login

      <button @click="toHome">去首页</button>
      <input v-model="password" />
        <button @click="handleSave">加密</button>
        <button @click="handleSet">解密</button>
  </div>
</template>

<script>
import { encrypt, decrypt } from '@/utils/jsencrypt'
import { getCurrentInstance } from 'vue';
import { reactive, ref, isRef, toRefs, onMounted } from 'vue';
export default {
  setup(props, context) {

  const { ctx } = getCurrentInstance()

  const password = ref('')
  const ddd = encrypt(password)
  const handleSave = () => {
    console.log(ddd);
  }
    const handleSet = () => {
      console.log(ddd);
    console.log(decrypt(ddd));
  }
  // route
  const router = ctx.$router
  const toHome =()=>{
      router.push({
        name: 'homePage'
      })
    }
    return {
      toHome,
      password,
      handleSave,
      handleSet
    }
  }
}
</script>