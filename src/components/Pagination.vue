<template>
  <div>
    <div v-if="pages > 5" class="pagination-container">
      <button class="prev" :disabled="currentPage === 1" @click="prev()">
        <LeftArrow class="arrow-left-svg" />
      </button>

      <div v-if="isInBeginRange()" class="pages">
        <button
          :class="[currentPage === n ? 'active' : '']"
          v-for="n in beginRange"
          :key="n"
          @click="setCurrentPage(n)"
        >{{ n }}</button>
        <button @click="setCurrentPage(5)">5</button>
        <p>...</p>
        <button @click="setCurrentPage(pages)">{{ pages }}</button>
      </div>

      <div v-else-if="isInEndRange()" class="pages">
        <button @click="setCurrentPage(1)">1</button>
        <p>...</p>
        <button @click="setCurrentPage(endRange[0] - 1)">{{ endRange[0] - 1 }}</button>
        <button
          :class="[currentPage === n ? 'active' : '']"
          v-for="n in endRange"
          :key="n"
          @click="setCurrentPage(n)"
        >{{ n }}</button>
      </div>

      <div v-else class="pages">
        <button @click="setCurrentPage(pages)">1</button>
        <p>...</p>
        <button @click="setCurrentPage(currentPage - 1)">{{ currentPage - 1 }}</button>
        <button class="active">{{ currentPage }}</button>
        <button @click="setCurrentPage(currentPage + 1)">{{ currentPage + 1 }}</button>
        <p>...</p>
        <button @click="setCurrentPage(pages)">{{ pages }}</button>
      </div>

      <button class="next" :disabled="currentPage === pages" @click="next()">
        <RightArrow class="arrow-right-svg" />
      </button>
    </div>

    <div v-else class="pagination-container">
      <button class="prev" :disabled="currentPage === 1" @click="prev()">
        <LeftArrow class="arrow-left-svg" />
      </button>

      <div class="pages">
        <button
          v-for="r in range"
          :key="r"
          :class="[currentPage === r ? 'active' : '']"
          @click="setCurrentPage(r)"
        >{{ r }}</button>
      </div>

      <button class="next" :disabled="currentPage === pages" @click="next()">
        <RightArrow class="arrow-right-svg" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";

import LeftArrow from "@/assets/LeftArrow.svg";
import RightArrow from "@/assets/RightArrow.svg";

// Calculates the range of pages we have
// from '1' to the total amount of pages
const getRange = (n: number) => {
  const range: Array<number> = [];

  for (let i = 1; i <= n; i++) {
    range.push(i);
  }

  return range;
};

@Component({
  components: {
    LeftArrow,
    RightArrow,
  },
})
export default class Pagination extends Vue {
  // Total amount of pages we have to display
  @Prop({ type: Number, required: true })
  readonly pages!: number;
  // The current page we are on
  @Prop(Number)
  readonly page!: number;

  // This will hold all of the number from
  // '1' to the 'total' amount of pages we have
  range: Array<number> = [];
  // Begin range will be the same no matter how many page we have
  beginRange: Array<number> = [1, 2, 3, 4];
  // End range for the last pages
  endRange: Array<number> = [];
  // current page we are on
  currentPage = 1;

  @Watch("pages")
  // If the amount of pages changes we calculate the ranges again
  onPagesChange() {
    this.calculateRanges();
  }

  @Watch("page")
  // If the page prop changes we update the current page
  onPageChange() {
    this.setCurrentPage(this.page);
  }

  @Emit("pageselect")
  // Emitting an event when we navigate to another page
  setCurrentPage(n: number) {
    this.currentPage = n;
  }

  mounted() {
    // Once the component is mounted we calculate the ranges
    this.calculateRanges();
  }

  // Navigate to the next page
  next() {
    this.setCurrentPage(++this.currentPage);
  }

  // Navigate to the previous page
  prev() {
    this.setCurrentPage(--this.currentPage);
  }

  // Calculating the ranges of the end ranges for the ui to enable the '...' layout
  calculateRanges() {
    this.range = getRange(this.pages);
    this.endRange = [
      ...this.range.slice(this.range.length - 4, this.range.length),
    ];
  }

  // Check if the current page is inside the beginning range
  isInBeginRange() {
    return this.beginRange.includes(this.currentPage);
  }
  // Check if the current page is in the end range
  isInEndRange() {
    return this.endRange.includes(this.currentPage);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/colors";
.pagination-container {
  display: flex;
  max-width: 400px;
  margin: 0 auto;

  .pages {
    display: inline-block;
    margin: 0 auto;
  }

  .pages > button {
    &:not(:first-child) {
      margin-left: 2px;
    }

    &:not(:last-child) {
      margin-right: 2px;
    }
  }

  button {
    border: 1px solid $color-black;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    width: 38px;
    height: 38px;

    &:focus {
      outline: none;
    }
  }

  p {
    display: inline-block;
    text-align: center;
    line-height: 0;
    width: 38px;
    height: 38px;
  }

  .prev {
    float: left;

    &:disabled {
      .arrow-left-svg {
        fill: $color-gray;
      }
    }
  }

  .next {
    float: right;

    &:disabled {
      .arrow-right-svg {
        fill: $color-gray;
      }
    }
  }

  .active {
    background-color: $color-primary;
    color: $color-white;
    border: 1px solid $color-primary;
  }
}

@media only screen and (max-width: 499px) {
  .pagination-container {
    button {
      width: 25px;
      height: 25px;
      font-size: 12px;
    }

    p {
      width: 25px;
      height: 25px;
      font-size: 12px;
    }

    svg {
      transform: scale(0.8);
    }
  }
}
</style>