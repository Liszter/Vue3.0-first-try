<template>
  <div>
    <div class="main-page">
      1231
      <button @click="openDialog">dialog</button>
      <dt-dialog
        title="提示"
        :showClose="true"
        top="15vh"
        @close="handleClose"
        @beforeClose="handleBeforeClose"
        >
        提示信息
      </dt-dialog>
    </div>
  </div>
</template>

<script>
import DtDialog from "../../components/Notice/Dialog";
import { getCurrentInstance } from "vue";
import { ref, computed, reactive, toRefs, onMounted } from "vue"; //ref接收一个参数 返回一个响应式对象  //computed是一个函数接收一个参数是函数

export default {
  name: "main-page",
  components: {
    DtDialog,
  },
  setup(props, context) {
    const { ctx } = getCurrentInstance();
    const openDialog = function () {};

    const handleClose = function () {

    }
      const handleBeforeClose = function () {
        console.log(111232133);
    }
    return {
      handleClose,
      handleBeforeClose,
      openDialog
    }
  },
};
</script>
<style lang="scss" scoped>
.main-page {
  height: 1000px;
}
</style>