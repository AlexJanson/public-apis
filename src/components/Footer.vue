<template>
  <div class="footer-container">
    <p class="spaced-heading white">pages</p>
    <router-link to="/" class="router-link">Home</router-link>
    <router-link to="/random" class="router-link">Random</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/scss/colors";

.footer-container {
  background-color: $color-light-black;
  color: $color-white;
  padding: 10px 50px;
  height: 175px;
}

p {
  margin: 1em 0 2em 0;
}

.white {
  color: $color-white;
}

.router-link {
  text-decoration: none;
  color: $color-white;
  display: block;
  width: fit-content;
  margin: 0 0 10px 0;

  &:hover {
    color: $color-primary;
  }
}
</style>