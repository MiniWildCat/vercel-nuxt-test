<template>
    <div>这是demo3_id_idx - {{ id }} - {{ idx }}</div>
</template>

<script setup lang="ts">
// useRoute自动引入
const route  = useRoute();
const id = route.params.id;
const idx = route.params.idx;

</script>