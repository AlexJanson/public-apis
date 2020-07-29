<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}
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