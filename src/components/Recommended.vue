<template>
  <div class="recommended-container">
    <h1>You may also like</h1>
    <APICard v-for="(api, index) in apis" :key="index" :api="api" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import APICard from "@/components/APICard.vue";
import APIObject from "../store/api/models/APIObject";
import { Getter } from "vuex-class";

const namespace = "api";

@Component({
  components: {
    APICard,
  },
})
export default class Recommended extends Vue {
  @Prop(String)
  readonly category!: string;
  @Prop(String)
  readonly amount!: string;
  @Getter("getRecommendedApis", { namespace })
  readonly getRecommendedApis!: (
    category: string,
    amount: number,
    id: number
  ) => Array<APIObject>;

  get apis() {
    return this.getRecommendedApis(
      this.category,
      +this.amount,
      +this.$route.params.id
    );
  }
}
</script>

<style lang="scss" scoped>
.recommended-container {
  margin: 35px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h1 {
    width: 100%;
  }
}
</style>