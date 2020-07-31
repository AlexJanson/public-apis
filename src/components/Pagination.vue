<template>
  <div>
    <div v-if="pages > 5" class="pagination-container">
      <button class="prev" :disabled="currentPage === 1" @click="prev()">
        <LeftArrow class="arrow-left-svg" />
      </button>
      <div class="pages">
        <button :class="[currentPage === 1 ? 'active' : '']" @click="setCurrentPage(1)">1</button>
        <p v-if="currentPage > 4">...</p>
        <button :class="[currentPage === 2 ? 'active' : '']" v-else @click="setCurrentPage(2)">2</button>

        <button v-if="currentPage >= 4 && currentPage <= pages - 3" @click="setCurrentPage(currentPage - 1)">{{ currentPage - 1 }}</button>
        <button :class="[currentPage === 3 ? 'active' : '']" v-else-if="currentPage <= 4" @click="setCurrentPage(3)">3</button>
        <button :class="[currentPage === pages - 4 ? 'active' : '']" v-else @click="setCurrentPage(pages - 4)">{{ pages - 4 }}</button>
        <button :class="[currentPage ? 'active' : '']" v-if="currentPage >= 4 && currentPage <= pages - 3">{{ currentPage }}</button>
        <button :class="[currentPage === 4 ? 'active' : '']" v-else-if="currentPage <= 4" @click="setCurrentPage(4)">4</button>
        <button :class="[currentPage === pages - 3 ? 'active' : '']" v-else @click="setCurrentPage(pages - 3)">{{ pages - 3 }}</button>
        <button v-if="currentPage >= 4 && currentPage <= pages - 3" @click="setCurrentPage(currentPage + 1)">{{ currentPage + 1 }}</button>
        <button v-else-if="currentPage <= 4" @click="setCurrentPage(5)">5</button>
        <button :class="[currentPage === pages - 2 ? 'active' : '']" v-else @click="setCurrentPage(pages - 2)">{{ pages - 2 }}</button>

        <p v-if="currentPage < pages - 3">...</p>
        <button :class="[currentPage === pages - 1 ? 'active' : '']" v-else @click="setCurrentPage(pages - 1)">{{ pages - 1 }}</button>
        <button :class="[currentPage === pages ? 'active' : '']" @click="setCurrentPage(pages)">{{ pages }}</button>
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
          >
          {{ r }}
        </button>
      </div>
      <button class="next" :disabled="currentPage === pages" @click="next()">
        <RightArrow class="arrow-right-svg" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';

import LeftArrow from '@/assets/LeftArrow.svg';
import RightArrow from '@/assets/RightArrow.svg';

const getRange = (n: number) => {
  const range: Array<number> = [];

  for(let i = 1; i <= n; i++) {
    range.push(i);
  }

  return range;
}

@Component({
  components: {
    LeftArrow,
    RightArrow
  }
})
export default class Pagination extends Vue {
  @Prop({ type: Number, required: true })
  readonly pages!: number;
  @Prop(Number)
  readonly page!: number;

  range: Array<number> = [];
  beginRange: Array<number> = [1, 2, 3];
  endRange: Array<number> = [];
  currentPage = 1;

  next() {
    this.setCurrentPage(++this.currentPage);
  }

  prev() {
    this.setCurrentPage(--this.currentPage);
  }

  @Emit('pageselect')
  setCurrentPage(n: number) {
    this.currentPage = n;
  }

  mounted() {
    this.calculateRanges();
  }

  @Watch('pages')
  onPagesChange() {
    this.calculateRanges();
  }

  @Watch('page')
  onPageChange() {
    this.setCurrentPage(this.page);
  }

  calculateRanges() {
    this.range = getRange(this.pages);
    this.endRange = [...this.range.slice(this.range.length - 3, this.range.length)]
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';
.pagination-container {
  display: flex;

  .pages {
    display: inline-block;
    margin: 0 auto;
  }

  .pages > button {
    &:not(:first-child) {
      margin-left: 4px;
    }

    &:not(:last-child) {
      margin-right: 4px;
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
</style>