// const store = {
//     state: {
//         token: 'fsdfsfknsdfsfd'
//     },
//     mutations: {
//         setToken(state,token){
//             state.token = token;
//         }
//     },
//     actions: {
//         // 全局的第一个服务端生命周期,所有客户端都会运行
//         nuxtServerInit(store, context){
//             store.commit("setToken","abc123")
//             console.log("nuxtServer init",store)
//         }
//     }
// }
// export default store;

import user from './user'

export const state = () => {
	return {
  		token: ''
	}
}
export const mutations = {
  setToken(state,token){
    this.$cookies.set("token",token)
    state.token = token;
  }
}
export const actions = {
  // 全局的第一个服务端生命周期,所有客户端都会运行
  nuxtServerInit(store, context){
    // 无法获取localStorage
    // console.log("localStorage",localStorage.getItem("age"))
    // 采用cookie替换
    console.log("cookie",this.$cookies.nodeCookie)
    console.log("cookie-token:",this.$cookies.get("token"))
    // 初始化数据
    store.commit("setToken",this.$cookies.get("token"))
    console.log("nuxtServer init",store)
  }
}

export const modules = {
    user
}