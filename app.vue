<template>
  <div>
    {{ x }}
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const x = useSomething();
</script>
