<template>
  <div id="layout">
      <layout-header></layout-header>
      <layout-main></layout-main>
      <layout-nav></layout-nav>
  </div>
</template>

<script>
import LayoutHeader from './template/Header'
import LayoutMain from './template/Main'
import LayoutNav from './template/Nav'
export default {
    name: 'layout',
    components: {
        LayoutHeader,
        LayoutMain,
        LayoutNav
    },
    setup() {

    }
}
</script>

<style lang="scss" scoped>
    #layout {
        background-color:rgba(0, 0, 0, 0.7);
    }
</style>