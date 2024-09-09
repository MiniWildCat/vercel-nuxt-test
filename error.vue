<template>
    <div> 
      <n-result status="404" title="404 资源不存在" :description="error.message">
        <template #footer>
          <n-button @click="clearError({ redirect: '/'})">返回首页</n-button>
        </template>
      </n-result>
    </div>
</template>

<script setup>
import {NResult,NButton} from 'naive-ui'
const props = defineProps({
    error: Object
})
</script>