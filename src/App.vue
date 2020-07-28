<template>
  <div class="app">
    <!-- <div class="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <Navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  name: "App",
  components: {
    Navbar
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

.app {
  @include xl {
    max-width: 1440px;
  }

  @include lg {
    max-width: 992px;
  }

  margin: 0 auto;
  padding: 0 20px;
}
</style>
