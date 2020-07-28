<template>
  <div v-show="open" class="mobile-menu-container">
    <transition name="slide-fade">
      <div v-if="open" class="mobile-menu-overlay">

      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MobileMenu',
  props: {
    open: {
      type: Boolean,
      required: true
    }
  }
}
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
    transform: translate(0);
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translate(100%);
}
</style>