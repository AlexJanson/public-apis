<template>
  <div class="nav-container">
    <nav class="nav">
      <HomeSvg class="home-svg" @click="onHome" />
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeSvg from '@/assets/Home.svg';

export default Vue.extend({
  name: "Navbar",
  components: {
    HomeSvg
  },
  data() {
    return {
      
    };
  },
  methods: {
    onHome() {
      this.$router.push('/');
    }
  }
});
</script>

<style lang="scss" scoped>
.nav-container {
  padding: 20px 0 0 0;

  .home-svg {
    height: 32px;
    width: 32px;

    cursor: pointer;
  }
}
</style>