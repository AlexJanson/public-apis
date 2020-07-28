<template>
  <div class="header-container">
    <SmallBar class="small-bar-svg" />
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SmallBar from '@/assets/SmallBar.svg';

export default Vue.extend({
  name: 'Header',
  components: {
    SmallBar
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
.header-container {
  margin: 60px 0 0 0;

  .title {
    font-size: 40px;
    font-weight: bold;
    margin: 0;
  }

  .description {
    font-size: 22px;
  }

}
</style>