<template>
  <div>
    <input type="checkbox" class="checkbox" v-model="checked" @change="onChecked" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class Checkbox extends Vue {
  checked = false;

  @Emit("checked")
  onChecked() {
    return this.checked;
  }
}
</script>

<style lang="scss">
.checkbox {
  width: 16px;
  height: 16px;

  &:focus {
    outline: none;
  }
}
</style>