<template>
  <div class="dropdown-container">
    <select class="dropdown-input" v-model="selected" @change="$emit('selected', selected)">
      <option value="" disabled selected>{{ placeholder }}</option>
      <option value="">No category</option>
      <option v-for="(item, index) in items" :value="item" :key="index">{{ item }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Dropdown extends Vue {
  @Prop({ type: String, required: true, default: 'Pick an option' })
  readonly placeholder!: string;
  @Prop({ type: Array, required: true })
  readonly items!: Array<string>;
  
  selected = '';

  @Emit('selected')
  onSelect() {
    return this.selected;
  }  
}
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';
@import '~@/scss/mixins';

.dropdown-container {
  position: relative;
  width: 250px;
  border-radius: 5px;
  border: 1px $color-dark-gray solid;
  background-color: $color-white;
  height: fit-content;

  .dropdown-input {
    width: 100%;
    font-size: 16px;
    padding: 5px 0 5px 10px;
    border: none;
    border-radius: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:focus {
      outline: none;
    }
  }

}

@include xl {
  .dropdown-container {
    width: 400px;
  }
}
</style>