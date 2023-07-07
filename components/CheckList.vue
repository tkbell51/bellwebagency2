<template>
  <ul class="checklist__list">
    <li class="checklist__item" v-for="item in list" :key="item.id">
      <span><icon name="checkmark" /></span>{{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style lang="scss">
.checklist {
  &__item {
    @apply flex items-center;
    svg {
      width: 20.5px;
      height: 14px;
      margin-right: 0.5rem;
    }
  }
}
</style>
