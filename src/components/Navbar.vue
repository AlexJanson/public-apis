<template>
  <div class="nav-container">
    <nav class="nav">
      <HomeSvg class="home-svg" @click="onHome" />
      <div class="nav-links">
        <div class="nav-mobile" v-if="windowWidth < 768">
          <Button class="categories" @click="onCategories">Categories</Button>
          <HamburgerSvg class="hamburger-svg" @click="onMenu" />
          <MobileMenu :open="isMenuOpen" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import HomeSvg from '@/assets/Home.svg';
import HamburgerSvg from '@/assets/Hamburger.svg';
import Button from '@/components/Button.vue';
import MobileMenu from '@/components/MobileMenu.vue';

export default Vue.extend({
  name: "Navbar",
  components: {
    HomeSvg,
    HamburgerSvg,
    Button,
    MobileMenu
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      isMenuOpen: false
    };
  },
  methods: {
    onHome() {
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/');
      }
    },
    onMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    onCategories() {
      console.log('scroll');
      // window.scrollTo();
    }
  },
  watch: {
    windowWidth(newWidth) {
      this.windowWidth = newWidth;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }
});
</script>

<style lang="scss" scoped>
.nav-container {
  padding: 20px 0 0 0;
  margin-bottom: 20px;
  width: 100%;
  
  .nav {
    display: flex;
    height: 32px;

    & > .nav-links {
      justify-content: flex-end;
      margin-left: auto;
    }

    .home-svg {
      height: 32px;
      width: 32px;
      cursor: pointer;
    }

    .hamburger-svg {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }

    .categories {
      margin: 0 30px 0 0;
    }

    .nav-mobile {
      display: flex;
      align-items: flex-end;
    }

  }

}
</style>