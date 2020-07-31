<template>
  <div :class="['nav-container', scroll ? 'scroll' : '']">
    <nav class="nav">
      <HomeSvg class="home-svg" @click="onHome" />
      <div class="nav-links">
        <div class="nav-mobile" v-if="windowWidth < 768">
          <Button class="categories" @click="onCategories">Categories</Button>
          <HamburgerSvg class="hamburger-svg" @click="onMenu" />
          <MobileMenu ref="mobileMenu" />
        </div>
        <div class="nav-content" v-if="windowWidth >= 768">
          <ul class="nav-list">
            <router-link to="/" class="nav-link" exact>Home</router-link>
            <p class="nav-link" @click="onCategories">Categories</p>
            <router-link to="/random" class="nav-link" exact>Random</router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Ref } from 'vue-property-decorator';

import HomeSvg from '@/assets/Home.svg';
import HamburgerSvg from '@/assets/Hamburger.svg';
import Button from '@/components/Button.vue';
import MobileMenu from '@/components/MobileMenu.vue';

@Component({
  components: {
    HomeSvg,
    HamburgerSvg,
    Button,
    MobileMenu
  }
})
export default class Navbar extends Vue {
  @Ref() readonly mobileMenu!: MobileMenu;

  windowWidth = window.innerWidth;
  isMenuOpen = false;
  scroll = window.scrollY > 0;

  onHome() {
    if (this.$router.currentRoute.path !== '/') {
      this.$router.push('/');
    }
  }

  onMenu() {
    (this.$refs.mobileMenu as Vue & { openMenu: () => void }).openMenu();
  }

  onResize() {
    this.windowWidth = window.innerWidth;
  }

  onScroll() {
    this.scroll = window.scrollY > 50;
  }

  onCategories() {
    if (this.$router.currentRoute.path !== '/') {
      this.$router.push('/');
    }
    const categories = document.querySelector('#categories') as HTMLElement;
    if (categories) {
      categories.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  @Watch('windowWidth')
  onWindowWidthChange(newWidth: number) {
    this.windowWidth = newWidth;
  }

  @Watch('scroll')
  onWindowScroll(scroll: boolean) {
    this.scroll = scroll;
  }

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      window.addEventListener('scroll', this.onScroll);
    });
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.onScroll);
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';

.nav-container {
  padding: 20px;
  width: calc(100% - 20px * 2);
  position: fixed;
  top: 0;
  z-index: 9;
  transition: background 200ms ease-in-out, box-shadow 200ms ease-in-out;
  
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

    .nav-links {
      .nav-content {
        height: 100%;
        .nav-list {
          height: 100%;
          margin: 0;
          display: flex;
          align-items: flex-end;
          flex-direction: row;
          line-height: 0.8;
  
          .nav-link {
            color: $color-black;
            // margin-top: auto;
            justify-content: flex-end;
            text-decoration: none;
            font-weight: bold;
            cursor: pointer;
  
            &.router-link-active,
            &:hover {
              color: $color-primary;
            }
          }
  
          & > *:not(:first-child) {
            margin: 0 0 0 50px;
          }
        }
      }
    }

  }

  &.scroll {
    transition: background 200ms ease-in-out, box-shadow 200ms ease-in-out;
    background-color: $color-white;
    box-shadow: 0 2px 5px 0 rgba($color-black, .25);
  }

}
</style>