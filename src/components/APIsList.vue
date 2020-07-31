<template>
  <div class="apis-list-container">
    <APICard v-for="(api, index) in apis" :key="index" :api="api" />
    <Pagination />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import APICard from '@/components/APICard.vue';
import APIObject from '../store/api/models/APIObject';
import Pagination from '@/components/Pagination.vue';
import { Getter } from 'vuex-class';

const namespace = 'api';

@Component({
  components: {
    APICard,
    Pagination
  }
})
export default class APIsList extends Vue {
  @Prop({ type: Number, default: 6 })
  readonly displayAmount!: number;
  @Prop(String)
  search!: string;
  @Prop(String)
  category!: string;

  @Watch('search')
  onSearchChange(value: string) {
    this.search = value;
  }

  @Watch('category')
  onCategoryChange(value: string) {
    this.category = value;
  }

  @Getter('getApis', { namespace })
  readonly getApis!: Array<APIObject>;
  @Getter('isLoading', { namespace })
  readonly isLoading!: boolean;

  get apis() {
    let result: Array<APIObject> = this.getApis;
    if (this.search) {
      result = result.filter(api => api.name.toLowerCase().includes(this.search.toLowerCase()));
    }
    if (this.category) {
      result = result.filter(api => api.category === this.category);
    }
    const page = result;
    return page;
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