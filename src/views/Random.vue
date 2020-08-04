<template>
  <div class="random" v-if="api">
    <Header
      :title="api.name"
      :description="api.description"
      />
    <APIDetails :api="api" class="api-details" />
    <h1 class="heading">Try your luck again!</h1>
    <Button class="random-btn" @click="onRandomize">
      Randomize!
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import APIObject from '../store/api/models/APIObject';

import Header from '@/components/Header.vue';
import APIDetails from '@/components/APIDetails.vue';
import Button from '@/components/Button.vue';

const namespace = 'api';

@Component({
  components: {
    Header,
    APIDetails,
    Button
  }
})
export default class Random extends Vue {
  @Getter('getRandomApi', { namespace })
  readonly getRandomApi!: () => APIObject;
  @Getter('isLoading', { namespace })
  readonly isLoading!: boolean;
  @Watch('isLoading')
  onIsLoading(loading: boolean) {
    if (!loading) {
      this.api = this.getRandomApi();
    }
  }

  api: APIObject | null = null;

  onRandomize() {
    this.api = this.getRandomApi();
  }

  mounted() {
    this.api = this.getRandomApi();
  }
}
</script>

<style lang="scss" scoped>
.random {
  .heading {
    margin: 100px 0 20px 0;
  }

  .random-btn {
    font-size: 22px;
    margin: 0 0 20px 0;
  }

  .api-details {
    margin: 50px 0 0 0;
  }
}
</style>