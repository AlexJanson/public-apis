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
      <APIsList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/Header.vue';
import IllustrationSvg from '@/assets/Illustration.svg';
import Search from '@/components/Search.vue';
import Dropdown from '@/components/Dropdown.vue';
import APIsList from '@/components/APIsList.vue';

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
  categories = [
    "Animals",
    "Anime",
    "Cloud Storage & File Sharing"
  ];

  onSearch(value: string) {
    console.log(value);
  }
  
  onCategory(value: string) {
    console.log(value);
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