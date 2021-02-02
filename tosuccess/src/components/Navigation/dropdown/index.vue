<template>
  <div class="dropdown">
      <button
        @click="choose"
      >
      <span>name</span>
      <i class="iconfont icon-webicon211"></i>
      <i class="iconfont icon-webicon212"></i>
      </button>
  </div>
</template>

<script>
export default {
    props: {
        name: String
    }
}
</script>

<style>

</style>