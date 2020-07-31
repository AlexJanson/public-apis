<template>
  <div class="home">
    <Header 
      title="All of your favourite free public APIs!" 
      description="Need a free public API for your project? Find one here!" 
      />
      <IllustrationSvg class="illustration-svg" />
      <h1 id="categories">Public APIs</h1>
      <div class="filters">
        <p class="spaced-heading">Name</p>
        <Search @change="onSearch" />
        <p class="spaced-heading">Category</p>
        <Dropdown placeholder="Choose a category" :items="categories" @selected="onCategory" />
      </div>
      <APIsList :search="search" :category="category" :displayAmount="6" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import Header from '@/components/Header.vue';
import IllustrationSvg from '@/assets/Illustration.svg';
import Search from '@/components/Search.vue';
import Dropdown from '@/components/Dropdown.vue';
import APIsList from '@/components/APIsList.vue';
import APIObject from '../store/api/models/APIObject';

const namespace = 'api';

@Component({
  components: {
    Header,
    IllustrationSvg,
    Search,
    Dropdown,
    APIsList
  }
})
export default class Home extends Vue {
  @Action('fetchAPIs', { namespace }) readonly fetchAPIs!: () => void;
  @Getter('getCategories', { namespace }) readonly categories!: Array<string>;

  search = '';
  category = '';

  onSearch(value: string) {
    this.search = value;
  }
  
  onCategory(value: string) {
    this.category = value;
  }

  mounted() {
    this.fetchAPIs();
  }
}
</script>

<style lang="scss" scoped>
.illustration-svg {
  display: block;
  margin: 100px auto;
  transform: scale(1.6);
}
</style>