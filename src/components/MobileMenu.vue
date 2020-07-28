<template>
  <div v-show="overlay" @click="closeMenu" class="mobile-menu-container">
    <transition name="slide" @after-leave="afterLeave">
      <div v-if="open" class="mobile-menu-overlay">
        <Button @click="closeMenu">Close</Button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';

export default Vue.extend({
  name: 'MobileMenu',
  components: {
    Button
  },
  data() {
    return {
      open: false,
      overlay: false
    };
  },
  methods: {
    afterLeave() {
      this.overlay = false;
    },
    openMenu() {
      this.overlay = true;
      this.open = true;
    },
    closeMenu() {
      this.open = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.mobile-menu-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .mobile-menu-overlay {
    position: relative;
    background: white;
    width: 80%;
    height: 100%;
    float: right;
    border-radius: 25px 0 0 25px;
    transform: translate(0%);
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