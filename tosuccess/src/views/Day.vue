<template>
    <div>
    <p>
        12323123213
    </p>

        {{userInfo112}}
    </div>
</template>
<script>
import getData from '../api/libs/server';

import { computed, onMounted, reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'dayPage',
    setup() {
        const userInfo112 = reactive({
            name: 1111,
            age: 2222
        })
        const boy = ref('name111')
        
        onMounted(()=>{
            console.log(userInfo112);
            console.log(boy.value);
            console.log(toRefs(userInfo112).name.value);
        })
        const store = useStore(),
              state = store.state;
     
            // isRef  判断是否是 ref 基本数据类型


        return computed(() => state).value
    }
}
</script>
<style lang="sass" scoped>

</style>