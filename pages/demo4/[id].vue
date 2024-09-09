<template>
    <div>这是demo4_id - {{ id }}</div>
</template>

<script setup lang="ts">
// useRoute自动引入
const route  = useRoute();
const id = route.params.id;

</script>