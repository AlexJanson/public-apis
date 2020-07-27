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
})
</script>

<style lang="scss">
@import "~@/scss/fonts.scss";
@import "~@/scss/mixins.scss";

html,
body {
  box-sizing: border-box;
  background-color: #f4f4f4;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
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
