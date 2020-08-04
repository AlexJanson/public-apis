<template>
  <div class="detail" v-if="api">
    <Header :title="api.name" :description="api.description" />
    <APIDetails :api="api" class="api-details" />
    <Recommended :category="api.category" amount="3" class="recommended" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import APIObject from "../store/api/models/APIObject";

import Header from "@/components/Header.vue";
import APIDetails from "@/components/APIDetails.vue";
import Recommended from "@/components/Recommended.vue";

const namespace = "api";

@Component({
  components: {
    Header,
    APIDetails,
    Recommended,
  },
})
export default class Detail extends Vue {
  @Getter("getApiById", { namespace })
  readonly apibyId!: (id: number) => APIObject;

  get api() {
    return this.apibyId(+this.$route.params.id);
  }
}
</script>

<style lang="scss" scoped>
.detail {
  .api-details {
    margin: 50px 0 0 0;
  }

  .recommended {
    margin: 100px 0 0 0;
  }
}
</style>