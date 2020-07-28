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
import Vue from 'vue';

import Header from '@/components/Header.vue';
import IllustrationSvg from '@/assets/Illustration.svg';
import Search from '@/components/Search.vue';
import Dropdown from '@/components/Dropdown.vue';
import APIsList from '@/components/APIsList.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    IllustrationSvg,
    Search,
    Dropdown,
    APIsList
  },
  data() {
    return {
      categories: [
        "Animals",
        "Anime",
        "Cloud Storage & File Sharing"
      ]
    }
  },
  methods: {
    onSearch(value: string) {
      console.log(value);
    },
    onCategory(value: string) {
      console.log(value);
    }
  }
});
</script>

<style lang="scss" scoped>
.illustration-svg {
  display: block;
  margin: 100px auto;
  transform: scale(1.6);
}
</style>