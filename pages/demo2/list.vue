<template>
    <div class="box-div">List</div>
</template>

<script>
export default {
  name: "list",
  head(){
    return {
      title: 'list列表',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {hid: 'description', name: 'description', content: 'hellow，这是一个list'},
      ],
    }
  },
  // middleware: 'auth'
  // 验证路由参数
  validate({params,query}){
    console.log("validate");
    return true;
  },
  // 页面请求数据的勾子
  asyncData({store,params}){
    console.log("asyncData")
  },
  // 类似于asyncData，但是它不会设置组件的数据
  // 页面加载前会被调用
  fetch({app,store,params}){
    console.log("fetch")
  },
  // cs共有的生命周期
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  // 客服端的生命周期
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  beforeDestroy(){
    console.log('beforeDestroy')
  },
  destroyed(){
    console.log('destroyed')
  }
}
</script>

<style scoped>
  .box-div{
    background: blue;
    color:white;
  }
</style>
