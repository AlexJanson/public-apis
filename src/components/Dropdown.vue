<template>
  <div class="dropdown-container">
    <div class="dropdown">
      <div class="dropdown-input" @click="toggleDropdown">
        <p class="dropdown-text">{{ selected || placeholder }}</p>
        <CaretDownSvg class="caret-svg" />
      </div>
      <div class="dropdown-list" v-if="open">
        <p
          class="dropdown-item"
          v-for="(item, index) in items"
          :key="index"
          @click="onSelect(item)"
        >{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import CaretDownSvg from "@/assets/CaretDown.svg";

@Component({
  components: {
    CaretDownSvg,
  },
})
export default class Dropdown extends Vue {
  @Prop({ type: String, required: true, default: "Pick an option" })
  readonly placeholder!: string;
  @Prop({ type: Array, required: true })
  readonly items!: Array<string>;

  selected = "";
  open = false;

  @Emit("selected")
  onSelect(item: string) {
    this.selected = item;
    this.toggleDropdown();
    return this.selected;
  }

  toggleDropdown() {
    this.open = !this.open;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/colors";
@import "~@/scss/mixins";

.dropdown-container {
  .dropdown {
    position: relative;
    width: 252px;

    .dropdown-input {
      border-radius: 5px;
      border: 1px $color-dark-gray solid;
      background-color: $color-white;
      height: fit-content;
      cursor: pointer;

      .dropdown-text {
        display: inline-block;
        margin: 0;
        padding: 5px 0 5px 10px;
        color: $color-gray;
      }

      .caret-svg {
        position: absolute;
        right: 0;
        top: 50%;
        margin-right: 5px;
        transform: translate(-50%, -50%);
      }
    }

    .dropdown-list {
      position: absolute;
      width: 100%;
      height: 400px;
      top: 31x;
      left: 0;
      background-color: $color-white;
      border-radius: 5px;
      box-shadow: 0px 2px 5px 2px rgba($color-black, 0.25);
      z-index: 1;
      overflow-y: scroll;

      .dropdown-item {
        padding: 4px 0 4px 10px;
        margin: 0;
        cursor: pointer;

        &:hover {
          transition: all 50ms ease-in-out;
          background-color: $color-primary;
          color: $color-white;
        }

        &:first-child {
          border-radius: 5px 5px 0 0;
        }
        &:last-child {
          border-radius: 0 0 5px 5px;
        }
      }
    }
  }
}

@include xl {
  .dropdown-container {
    .dropdown {
      width: 400px;
    }
  }
}
</style>