<template>
  <div class="apis-list-container">
    <div class="list">
      <APICard v-for="(api, index) in apis" :key="index" :api="api" />
    </div>
    <Pagination :pages="getTotalPages" :page="page" @pageselect="onPageSelect" class="pagination" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

import APICard from "@/components/APICard.vue";
import APIObject from "../store/api/models/APIObject";
import Pagination from "@/components/Pagination.vue";
import { Getter } from "vuex-class";

const namespace = "api";

@Component({
  components: {
    APICard,
    Pagination,
  },
})
export default class APIsList extends Vue {
  @Prop(Number)
  displayAmount!: number;
  @Prop(String)
  search!: string;
  @Prop(String)
  category!: string;
  @Prop(Boolean)
  alphabetical!: boolean;

  totalPages = 1;
  page = 1;

  @Watch("search")
  onSearchChange(value: string) {
    this.search = value;
    this.page = 1;
    this.calculateTotalPages();
  }

  @Watch("category")
  onCategoryChange(value: string) {
    this.category = value;
    this.page = 1;
    this.calculateTotalPages();
  }

  @Getter("getApis", { namespace })
  readonly getApis!: Array<APIObject>;
  @Getter("isLoading", { namespace })
  readonly isLoading!: boolean;

  // Calculating the total amount of pages we have
  // based on the display amount and the size of the list
  calculateTotalPages() {
    const apis = this.filterList(this.getApis.slice());
    this.totalPages = Math.ceil(apis.length / this.displayAmount);
  }

  @Watch("displayAmount")
  onDisplayAmountChange() {
    this.calculateTotalPages();
  }

  @Watch("alphabetical")
  onAlphabeticalChange() {
    this.calculateTotalPages();
  }

  filterList(apis: Array<APIObject>) {
    if (this.search) {
      apis = apis.filter((api) =>
        api.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
    if (this.category) {
      apis = apis.filter((api) => api.category === this.category);
    }
    if (this.alphabetical) {
      apis.sort((a: APIObject, b: APIObject): number => {
        const aName = a.name.toUpperCase();
        const bName = b.name.toUpperCase();

        if (aName > bName) {
          return 1;
        } else if (bName > aName) {
          return -1;
        }

        return 0;
      });
    }

    return apis;
  }

  get apis() {
    let result: Array<APIObject> = this.getApis.slice();
    result = this.filterList(result);
    const page = result.slice(
      this.displayAmount * (this.page - 1),
      this.displayAmount * this.page
    );
    return page;
  }

  get getTotalPages() {
    return this.totalPages;
  }

  onPageSelect(page: number) {
    this.page = page;
  }

  mounted() {
    this.calculateTotalPages();
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 35px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>