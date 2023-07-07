<template>
  <ClientOnly>
    <font-awesome-icon :class="`${classes}`" :icon="['fas', i]" />
  </ClientOnly>
</template>

<script setup>
defineProps({
  i: {
    type: String,
    required: true,
    default: "arrow-down",
  },
  classes: {
    type: String,
    required: false,
    default: "icon is-medium",
  },
});
</script>
