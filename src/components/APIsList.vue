<template>
  <div class="apis-list-container">
    <APICard v-for="(api, index) in apis" :key="index" :api="api" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import APICard from '@/components/APICard.vue';

export default Vue.extend({
  name: 'APIsList',
  components: {
    APICard
  },
  props: {
    displayAmount: {
      type: Number,
      required: false,
      default: 6
    }
  },
  data() {
    return {
      apis: [],
      page: 0
    };
  },
  async mounted() {
    const response = await fetch(`https://api.publicapis.org/entries`);
    const apis = await response.json();
    this.apis = apis.entries.map((api: {API: string; Description: string; Category: string}) => {
      return {
        name: api.API,
        description: api.Description,
        category: api.Category
      };
    });
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