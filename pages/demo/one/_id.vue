<template>
    <div>
        <div>这个是OnePage-{{ id }}</div>
        <nuxt-link to="/">返回首页</nuxt-link>
    </div>
</template>

<script>
export default{
    id: 'demoPage',
    data(){
        return {
        id: ''
        }
    },
    created(){
    // 获取query参数
        this.id = this.$route.params.id;
    }
}
</script>