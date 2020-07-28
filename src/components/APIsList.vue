<template>
  <div class="apis-list-container">
    <APICard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import APICard from '@/components/APICard.vue';

export default Vue.extend({
  name: 'APIsList',
  components: {
    APICard
  }
});
</script>

<style lang="scss" scoped>
.apis-list-container {
  display: grid;

  grid-template-columns: 100%;

  margin: 30px 0;
}
</style>