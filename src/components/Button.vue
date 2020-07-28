<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
});
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';

.btn {
  background-color: $color-primary;
  font-size: 16px;
  font-weight: 400;
  color: $color-white;
  border: none;
  border-radius: 3px;
  padding: 3px 12px;  
  outline: none;
  cursor: pointer;
}
</style>