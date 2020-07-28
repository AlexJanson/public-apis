<template>
  <div class="app">
    <StripeOne class="stripe-one-svg" />
    <StripeTwo class="stripe-two-svg" />
    <div class="content relative">
      <Navbar />
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Navbar from '@/components/Navbar.vue';
import StripeOne from '@/assets/StripeOne.svg';
import StripeTwo from '@/assets/StripeTwo.svg';

export default Vue.extend({
  name: "App",
  components: {
    Navbar,
    StripeOne,
    StripeTwo
  }
});
</script>

<style lang="scss">
@import "~@/scss/fonts";
@import "~@/scss/mixins";
@import "~@/scss/colors";

* {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  box-sizing: border-box;
  background-color: $color-background;
  margin: 0;
  padding: 0;
}

h1, h2, h3,
h4, h5, h6 {
  font-weight: bold;
}

.spaced-heading {
  font-weight: lighter;
  color: $color-light-gray;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.app {
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.stripe-one-svg,
.stripe-two-svg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.content {
  z-index: 1;
}

.relative {
  position: relative;
}
</style>
