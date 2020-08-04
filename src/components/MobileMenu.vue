<template>
  <div v-show="overlay" class="mobile-menu-container">
    <transition name="slide" @after-leave="afterLeave">
      <div v-if="open" class="mobile-menu-overlay">
        <div class="mobile-menu-content">
          <CrossSvg @click="closeMenu" class="cross-svg" />
          <div class="links">
            <router-link to="/" class="link" exact>Home</router-link>
            <p class="link" @click="onCategories">Categories</p>
            <router-link to="/random" class="link" exact>Random</router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CrossSvg from '@/assets/Cross.svg';

@Component({
  components: {
    CrossSvg
  }
})
export default class MobileMenu extends Vue {
  open = false;
  overlay = false;

  getContentEl() {
    return document.querySelector('.content');
  }

  afterLeave() {
    this.overlay = false;

    document.body.style.overflow = '';
    const content = this.getContentEl();
    if (content) {
      content.classList.add('relative');
    }
  }

  openMenu() {
    this.overlay = true;
    this.open = true;

    document.body.style.overflow = 'hidden';
    const content = this.getContentEl();
    if (content) {
      content.classList.remove('relative');
    }
  }

  closeMenu() {
    this.open = false;
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

    this.closeMenu();
  }
}

</script>

<style lang="scss" scoped>
@import '~@/scss/colors';

.mobile-menu-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 99;

  .mobile-menu-overlay {
    position: relative;
    background: $color-white;
    width: 80%;
    height: 100%;
    float: right;
    border-radius: 25px 0 0 25px;
    transform: translate(0%);

    .mobile-menu-content {
      height: 100%;
      float: right;
      padding: 25px 25px 0 0;
      text-align: right;

      .cross-svg {
        cursor: pointer;
      }

      .links {
        height: 100%;
        margin: 50px 0 0 0;

        .link {
          font-size: 24px;
          font-weight: bold;
          text-decoration: none;
          color: $color-black;
          cursor: pointer;

          &.router-link-active,
          &:hover {
            color: $color-primary;
          }
        }
      }

    }

  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 500ms ease-in-out;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translate(100%);
  }

}
</style>