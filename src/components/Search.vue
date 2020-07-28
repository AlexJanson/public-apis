<template>
  <div class="search-container">
    <input type="text" placeholder="Search" class="search-input" v-model="value" @keyup="$emit('change', value)">
    <SearchSvg class="search-svg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SearchSvg from '@/assets/Search.svg';

export default Vue.extend({
  name: 'SearchInput',
  components: {
    SearchSvg
  },
  data() {
    return {
      value: ''
    };
  }
});
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';

.search-container {
  position: relative;
  width: 250px;
  border-radius: 5px;
  border: 1px $color-dark-gray solid;
  background-color: $color-white;

  .search-input {
    width: 210px;
    font-size: 16px;
    padding: 5px 0 5px 10px;
    border: none;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: $color-gray;
    }

    &:focus {
      outline: none;
    }
  }

  .search-svg {
    position: absolute;
    top: 0;
    right: 0;
    transform: scale(1.2);
    padding: 6px 8px;
  }

}
</style>