<template>
  <div class="font-pick">
    <div class="dropdown-link">
        <i class="icon-zitidaxiao iconfont" @click="changeFontSize"></i>
    </div>
  </div>
</template>

<script>
import Alert from '../../../../components/js/Alert'
export default {
  setup() {
    let changeFontSize = function () {
      console.log(1, Alert);
      // 弹框
      Alert('撒谎短视的')
    };

    return {
      changeFontSize,
    };
  },
};
</script>

<style type="scss" scoped>
.font-pick {

}

</style>