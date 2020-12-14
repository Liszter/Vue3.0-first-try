<template>
    <div>
        month
        {{datalist.name}}
    </div>
</template>
<script>
import datalist from '../api/data/data1';

import { reactive } from 'vue';
export default {
    name: 'dayPage',
    setup() {
        const state = reactive({
            datalist
        })

        console.log(state.datalist.name);
        return {
            ...state
        }
    }
}
</script>