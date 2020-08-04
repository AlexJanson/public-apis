<template>
  <div class="api-details-container">
    <div>
      <p class="spaced-heading">Category</p>
      <p class="api-detail">{{ api.category }}</p>
    </div>
    <div>
      <p class="spaced-heading">Authentication</p>
      <p class="api-detail">{{ api.apikey ? api.apikey : 'No Authentication required' }}</p>
    </div>
    <div>
      <p class="spaced-heading">Https</p>
      <p class="api-detail">{{ api.https ? 'HTTPS available' : 'No HTTPS available' }}</p>
    </div>
    <div>
      <p class="spaced-heading">Cors</p>
      <p class="api-detail">{{ api.cors ? 'CORS available' : 'No CORS available' }}</p>
    </div>
    <div>
      <p class="spaced-heading">Url</p>
      <a :href="api.url" target="_blank" class="api-url">{{ api.url }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import APIObject from '../store/api/models/APIObject';

@Component
export default class APIDetails extends Vue {
  @Prop(Object)
  readonly api!: APIObject;
}
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';
@import '~@/scss/mixins';

.api-details-container {
  word-wrap: break-word;

  .api-detail {
    color: $color-black;
    font-weight: 400;
    margin: 0 0 30px 0;
  }

  .api-url {
    font-weight: 400;
  }
}

@include md {
  div {
    display: inline-block;
    margin: 0 35px 0 0;
  }
}

@include lg {
  div {
    display: inline-block;
    margin: 0 35px 0 0;
  }
}

@include xl {
  div {
    display: inline-block;
    margin: 0 35px 0 0;
  }
}
</style>