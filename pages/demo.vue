<template>
    <div>
        <div class="container">我是demo</div>
        <div class="container">
            <div>{{ name }}</div>
            <button @click="changeMeta()">变化一下</button>
        </div>
        <nuxt-link to="/">返回首页</nuxt-link>
    </div>
</template>
<script setup lang="ts">



const route = useRoute()
const name = ref<string>(route.query.name)
// useSeoMeta({
//   title: ()=>name.value
// })
useHead({
    title: ()=>name.value,
    // meta: [
    //     {charset: 'gbk'},
    //     {hid: 'description', name: 'description', content: '介绍'}
    // ]
})
const changeMeta = ()=>{
    name.value = (name.value + '1')
}
</script>