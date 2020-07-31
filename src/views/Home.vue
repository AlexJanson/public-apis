<template>
  <div class="home">
    <Header 
      title="All of your favourite free public APIs!" 
      description="Need a free public API for your project? Find one here!" 
      />
      <IllustrationSvg class="illustration-svg" />
      <h1 id="categories">Public APIs</h1>
      <div class="filters">
        <div class="search">
          <p class="spaced-heading">Name</p>
          <Search @change="onSearch" class="search-filter" />
        </div>
        <div class="category">
          <p class="spaced-heading">Category</p>
          <Dropdown placeholder="Choose a category" :items="categories" @selected="onCategory" class="dropdown-filter" />
        </div>
      </div>
      <div class="api-list-container">
        <APIsList :search="search" :category="category" :displayAmount="6" class="api-list" />
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import Header from '@/components/Header.vue';
import IllustrationSvg from '@/assets/Illustration.svg';
import Search from '@/components/Search.vue';
import Dropdown from '@/components/Dropdown.vue';
import APIsList from '@/components/APIsList.vue';

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
  @Getter('getCategories', { namespace }) readonly categories!: Array<string>;

  search = '';
  category = '';

  onSearch(value: string) {
    this.search = value;
  }
  
  onCategory(value: string) {
    this.category = value;
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/mixins';

.illustration-svg {
  display: block;
  margin: 100px auto;
  transform: scale(1.6);
}

@include md {
  .home {
    display: grid;

    grid-template-columns: repeat(2, calc((100% - 50px) / 2));
    column-gap: 50px;

    .illustration-svg {
      margin: 220px 0 0 0;
      grid-column: 2 / 3;
      transform-origin: bottom left;
    }

    #categories {
      grid-column: 1 / 3;
    }

    .filters {
      grid-column: 1 / 3;
      grid-row: 3;
      display: grid;

      grid-template-columns: repeat(2, calc((100% - 50px) / 2));
      grid-template-rows: 100%;
      column-gap: 50px;

      .search-filter {
        grid-column: 1 / 2;
      }

      .dropdown-filter {
        grid-column: 2 / 3;
      }
    }

    .api-list-container {
      grid-column: 1 / 3;
    }

  }
}
</style>