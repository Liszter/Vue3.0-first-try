<template>
  <div class="dialog__wrapper">
    <div class="dialog" :style="{'top': top}">
      <div class="dialog__mask">
        <div class="dialog__header">
          <slot name="title">
            <span class="dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="dialog__header__button"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose"
          >
            <i class="iconfont icon-close"></i>
          </button>
        </div>

        <div class="dialog__body">
          <slot></slot>
        </div>
        <div class="dialog__footer" v-if="slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    width: String,
    heigh: String,
    // 后期加校验
    top: {
        type: String,
        default: '15vh'
      },
    showClose: {
      type: Boolean,
      default: true,
    },
    beforeClose: {
      type: Function
    },
    center: Boolean,
    destoryonClose: Boolean,
  },
  setup(props, context) {
    // 隐藏
      const hide = function (cancel) {
        if (cancel !== false) {
          // this.$emit('update:visible', false);
          // this.$emit('close');
          this.closed = true;
        }
      }
    // 关闭之前执行的函数
    let handleBeforeClose = ref(props.beforeClose)
    // footer插槽是否显示
    const slots = ref(context.slots)
  
    const handleClose = function () {
      console.log(typeof handleBeforeClose);
        if (typeof handleBeforeClose === 'function') {
          // 执行 beforeClose
          handleBeforeClose()
        } else {
          console.log(123123123);
          // this.hide();
        }
    };

    

    return {
      handleClose,
      handleBeforeClose,
      slots
    };
  },
};
</script>

<style lang="scss" scoped>

// 遮罩

.dialog__wrapper {
  z-index: 2003;
  background-color: rgb(128, 128, 128);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
}
.dialog {
    position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
}
.dialog__header {
  padding: 20px 20px 10px;
  .dialog__title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }
  .dialog__header__button {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
  }
}
.dialog__body {
    padding: 10px 20px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;

}
.dialog__footer {
  padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
}
</style>