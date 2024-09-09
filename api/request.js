export default ({$axios}) =>{
    // 请求拦截器
    $axios.onRequest((config)=>{
        config.headers.token = this.$cookie.token;
        return config;
    })
    // 响应拦截器
    $axios.onResponse((response)=>{
        console.log(response)
        return response.data;
    })
  }