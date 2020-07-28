<template>
  <div class="dropdown-container">
    <select class="dropdown-input" v-model="selected" @change="$emit('selected', selected)">
      <option value="" disabled selected>{{ placeholder }}</option>
      <option v-for="(item, index) in items" :value="item" :key="index">{{ item }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dropdown',
  props: {
    placeholder: {
      type: String,
      required: true,
      default: 'Pick an option'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: ''
    };
  }
});
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';

.dropdown-container {
  position: relative;
  width: 250px;
  border-radius: 5px;
  border: 1px $color-dark-gray solid;
  background-color: $color-white;

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
</style>