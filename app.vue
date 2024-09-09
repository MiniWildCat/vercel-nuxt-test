<template>
  <div>
    <div>我添加一个标题,6666</div>
    <button @click="count += 1">变更{{ count }}</button>
    <NuxtWelcome />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
