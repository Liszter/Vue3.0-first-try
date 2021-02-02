<template>
  <div class="color-picker">
    <span class="picker__title">{{title}}</span>
    <label>
      <div
        class="picker__box"
        :style="{ background: val }"
      >
        <input
        type="color"
        v-model="val"
        :disabled="disabled"
        :predefine="predefine"
        @blur="blur"
        @change="change"
        @input="input"
        @focus="focus"
        />
      </div>
    </label>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
export default {
  name: "color-picker",
  props: {
    title: String,
    predefine: String,
    disabled: Boolean,
    size: String
  },
  setup (props, context) {
      let { emit } = context
    const val = ref('');
    // 预定义
    val.value = props.predefine
    // 失去焦点
    const blur =(event)=> {
      event.stopPropagation();
      emit('blur', event.target.value);
    }
    // change事件
    const change =(event)=> {
      event.stopPropagation();
      emit('change', event.target.value);
    }
    // input事件
    const input =(event)=> {
      event.stopPropagation();
      emit('input', event.target.value);
    }
    // focus事件
    const focus =(event)=> {
      event.stopPropagation();
      emit('focus', event.target.value);
    }
    // 清理输入内容
    const clearValue =()=> {
      val.value = '';
    }
    // 暴露给模板
    return {
      val,
      blur,
      change,
      input,
      focus,
      clearValue
    };
  }
}
</script>
<style lang="scss" scoped>
.color-picker {
  box-sizing: border-box;
  // 外边框
  .picker__title {
      padding: 0 5px;
  }
  .picker__box {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border: #fff solid 1px;
  }
  input {
    width: 1px;
    height: 1px;
    visibility: hidden;
  }
}
</style>