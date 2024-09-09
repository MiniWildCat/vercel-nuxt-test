import { createDiscreteApi } from 'naive-ui'
export default defineNuxtPlugin((nuxtApp)=>{
    const bar = ref(null)
    nuxtApp.hook("app:mounted",(e)=>{
        if(!bar.value){
            const {loadingBar} = createDiscreteApi(['loadingBar'])
            bar.value = loadingBar;
        }
        console.log("app:mounted");
    })
    nuxtApp.hook("page:start",(e)=>{
        bar.value?.start();
        console.log("page:start");
    })
    nuxtApp.hook("page:finish",(e)=>{
        bar.value?.finish();
        console.log("page:finish");
    })
    nuxtApp.hook("page:error",(e)=>{
        // 客户端与服务端都会执行,只有在客户端都有window对象
        if(process.client){
            bar.value?.error();
        }
        console.log("page:error");
    })
})