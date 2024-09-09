<template>
  <n-config-provider inline-theme-disabled>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </n-config-provider>
</template>
<script setup>
import { NConfigProvider } from 'naive-ui';
useHead({
    title: "全局标题",
    meta: [
        {charset: 'gbk'},
        {hid: 'description', name: 'description', content: '介绍'}
    ]
})
</script>
