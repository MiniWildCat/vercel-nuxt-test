<template>
    <div>
        <div>这是User页面</div>
        <nuxt-link to='/user'>跳转User-index页面</nuxt-link>
        <nuxt-link to='/user/123'>跳转User-id页面</nuxt-link>
        <div>显示嵌套子路由的内容</div>
        <div><nuxt-child/></div>
    </div>
</template>
<script>
export default {
    name: 'user'
}
</script>