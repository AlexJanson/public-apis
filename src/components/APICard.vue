<template>
  <div class="api-card-container">
    <div class="api-card-content">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'APICard'
});
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';

.api-card-container {
  height: 210px;
  width: 100%;
  background-color: $color-white;
  border-radius: 8px;
  box-shadow: 3px 4px 5px 0 rgba($color-black, .25);

  .api-card-content {
    padding: 15px;
  }
}
</style>0