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
      <APIsList :search="search" :category="category" :displayAmount="displayAmount" class="api-list" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
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

  get displayAmount() {
    if(this.windowWidth > 992 && this.windowWidth < 1200) {
      return 8;
    }
    if (this.windowWidth > 1200) {
      return 12;
    }

    return 6;
  }

  windowWidth = window.innerWidth;

  @Watch('windowWidth')
  onWindowWidthChange(newWidth: number) {
    this.windowWidth = newWidth;
  }

  onResize() {
    this.windowWidth = window.innerWidth;
  }

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
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

    .api-list {
      grid-column: 1 / 3;
    }

  }
}

@include lg {
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

    .api-list {
      grid-column: 1 / 3;
    }

  }
}

@include xl {
  .home {
    display: grid;

    grid-template-columns: repeat(2, calc((100% - 50px) / 2));
    column-gap: 50px;

    .illustration-svg {
      margin: 320px 0 0 100px;
      grid-column: 2 / 3;
      transform-origin: bottom left;
      transform: scale(2);
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

    .api-list {
      grid-column: 1 / 3;
    }

  }
}
</style>