<template>
    <div>
        <div class="container">这是首页</div>
        <nuxt-link to="/demo?name=demo标题">跳转demo</nuxt-link>
        <div></div>
        <nuxt-link to="/demo2">跳转demo2</nuxt-link>
        <div></div>
        <nuxt-link to="/demo3">跳转demo3</nuxt-link>
        <div></div>
        <nuxt-link to="/demo3/123">跳转demo3-id</nuxt-link>
        <div></div>
        <nuxt-link to="/demo3/123/456">跳转demo3-id-idx</nuxt-link>
        <div></div>
        <nuxt-link to="/demo4/123">跳转demo4-id</nuxt-link>
    </div>
</template>
<script setup>
// useHead({
//     title: "这是入口",
//     meta: [
//         {charset: 'gbk'},
//         {hid: 'description', name: 'description', content: '介绍'}
//     ]
// })
</script>