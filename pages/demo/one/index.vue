<template>
    <div>
        <div>这个是OnePage</div>
        <div>
            <div>这个是store测试</div>
            <div>{{ token }} - {{ name }}</div>
            <button @click="setToken(token+'1')">变更token</button>
            <button @click="setName(name+'2')">变更name</button>
            <button @click="startMyLoading">启用loading</button>
        </div>
        <nuxt-link to="/">返回首页</nuxt-link>
    </div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default{
    name: 'demoPage',
    data(){
        return {
            
        }
    },
    asyncData(app){
        // console.log("结果",app.$getIndexData())
        // app.$getIndexData().then(res=>{
        //     console.log(res)
        // })
        
    },
    computed: {
        ...mapState(['token']),
        ...mapState({
            name: state=>state.user.name
        })
    },
    methods: {
        ...mapMutations(['setToken']),
        ...mapMutations(['user','setName']),
        startMyLoading(){
                
            console.log(this)
            // 显示加载指示器
            this.$nuxt.$loading.start()
            console.log("我已经开始了")
            setTimeout(()=>{
                console.log("我已经结束了")
                // 关闭加载显示器
                this.$nuxt.$loading.finish()
            },2000)
        }
    },
    mounted(){
        // console.log(this.$store.state.token)
        // this.$store.commit("setToken",2)
        // this.$store.dispatch('setToken2',params)
    }
    // middleware(){
    //     console.log("我命由我不由天，我说了算")
    // }
}
</script>