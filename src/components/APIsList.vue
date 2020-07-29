<template>
  <div class="apis-list-container">
    <APICard v-for="(api, index) in apis" :key="index" :api="api" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import APICard from '@/components/APICard.vue';

@Component({
  components: {
    APICard
  }
})
export default class APIsList extends Vue {
  @Prop({ type: Number, default: 6 })
  readonly displayAmount!: number;

  apis = [];

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
}
</script>

<style lang="scss" scoped>
.apis-list-container {
  display: grid;

  grid-template-columns: 100%;

  margin: 30px 0;
}
</style>