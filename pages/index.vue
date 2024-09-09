<template>
  <!-- <Tutorial/> -->
  <div>
    {{user.name}}
    <div class="box-div">这是HomePage <span class="title">小标题</span></div>
    <div>1.标签跳转</div>
    <a href="/demo/one">a标签跳转</a>
    <nuxt-link to="/demo/one">跳转index</nuxt-link>
    <nuxt-link to="/demo/one/123">跳转index_id</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      name: ''
    }
  },
  // 类似于{user} = data;
  // 页面中使用{{user.name}}
  asyncData({store,params}){
    console.log("asyncData")// 使用 params 来获取 URL 参数
    const userId = params.id;

    // 模拟异步数据获取，例如从数据库
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          user: {
            id: userId,
            name: 'John Doe',
            email: 'john@example.com'
          }
        };
        resolve(data); // 数据获取成功，调用 resolve
      }, 1000); // 模拟异步操作，例如数据库查询
    });
  },
  // beforeCreate(){
  //   console.log('beforeCreate')
  // },
  // created(){
  //   console.log('created')
  // },
  // // 客服端的生命周期
  // beforeMount(){
  //   console.log('beforeMount')
  // },
  // mounted(){
  //   console.log('mounted')
  // },
  // beforeUpdate(){
  //   console.log('beforeUpdate')
  // },
  // updated(){
  //   console.log('updated')
  // },
  // beforeDestroy(){
  //   console.log('beforeDestroy')
  // },
  // destroyed(){
  //   console.log('destroyed')
  // }
}
</script>

<style lang="less" scoped>
.box-div{
  color: red;
  .title{
    color: blue
  }
  border-bottom: 2px solid @main-color;
}
</style>
