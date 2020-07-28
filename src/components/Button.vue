<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
}
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';

.btn {
  background-color: $color-primary;
  font-size: 16px;
  color: $color-white;
  border: none;
  border-radius: 3px;
  font-weight: 400;
  padding: 3px 12px;
  outline: none;
  cursor: pointer;
}
</style>