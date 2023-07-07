<template>
  <transition
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
  >
    <div
      class="vue-accordion"
      ref="wrapper"
      :style="wrapperStyle"
      v-if="expanded"
    >
      <div class="vue-accordion__inner" ref="inner">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  expanded: {
    type: Boolean,
    required: true,
  },
  duration: {
    type: Number,
    default: 250,
  },
});

const wrapperStyle = computed(() => {
  return (transitionDuration = `${this.duration}ms`);
});
if (expanded) {
  setWrapperHeightTo("auto");
}
function onEnter(el) {
  setWrapperHeightTo(getContentHeight(), el);
}

function onAfterEnter(el) {
  setWrapperHeightTo("auto", el);
}

function onBeforeLeave(el) {
  setWrapperHeightTo(getContentHeight(), el);
}

function onLeave(el) {
  el.scrollHeight;
  setWrapperHeightTo(0, el);
}

function getContentHeight() {
  const inner = ref.inner.value;
  return inner.getBoundingClientRect().height;
}

/**
 * @param {number | 'auto'} height
 */
function setWrapperHeightTo(height, el = ref.wrapper.value) {
  el.style.height = typeof height === "number" ? `${height}px` : height;
}
</script>

<style lang="scss">
.vue-accordion {
  transition-timing-function: ease;
  transition-property: height;
  height: 0;
  overflow: hidden;
  &__inner {
    display: table;
    width: 100%;
  }
}
</style>
