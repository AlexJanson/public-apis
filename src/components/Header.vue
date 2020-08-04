<template>
  <div class="header-container">
    <SmallBar class="small-bar-svg" />
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import SmallBar from "@/assets/SmallBar.svg";

@Component({
  components: {
    SmallBar,
  },
})
export default class Header extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop(String) readonly description!: string;
}
</script>

<style lang="scss" scoped>
@import "~@/scss/mixins";

.header-container {
  margin: 110px 0 0 0;

  .title {
    font-size: 40px;
    font-weight: bold;
    margin: 0;
  }

  .description {
    font-size: 22px;
  }
}

@include xl {
  .header-container {
    .title {
      font-size: 52px;
    }

    .description {
      font-size: 26px;
    }
  }
}
</style>