<template>
  <ClientOnly>
    <font-awesome-icon :class="`${classes}`" :icon="['fab', i]" />
  </ClientOnly>
</template>

<script setup>
defineProps({
  i: {
    type: String,
    required: true,
    default: "facebook",
  },
  classes: {
    type: String,
    required: false,
    default: "icon is-medium",
  },
});
</script>
