<template>
  <div class="search-container">
    <input type="text" placeholder="Search" class="search-input" v-model="value" @keyup="onInputChange">
    <SearchSvg class="search-svg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

import SearchSvg from '@/assets/Search.svg';

@Component({
  components: {
    SearchSvg
  }
})
export default class Search extends Vue {
  value = '';

  @Emit('change')
  onInputChange() {
    return this.value;
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';
@import '~@/scss/mixins';

.search-container {
  position: relative;
  width: 250px;
  border-radius: 5px;
  border: 1px $color-dark-gray solid;
  background-color: $color-white;
  height: fit-content;

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

@include xl {
  .search-container {
    width: 400px;

    .search-input {
      width: 360px;
    }
  }
}
</style>