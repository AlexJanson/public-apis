<template>
  <div class="api-card-container">
    <div class="api-card-content">
      <GithubSvg class="github-svg" />
      <h1 class="api-title" :title="api.name">{{ api.name }}</h1>
      <p class="api-description">{{ api.description }}</p>
      <div class="api-card-details">
        <KeySvg class="key-svg" />
        <p>apikey</p>
        <LockSvg class="lock-svg" />
        <p>https</p>
        <CorsSvg class="cors-svg" />
        <p>unknown</p>
      </div>
      <p class="api-card-category">{{ api.category }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import GithubSvg from '@/assets/Github.svg';
import KeySvg from '@/assets/Key.svg';
import LockSvg from '@/assets/Lock.svg';
import CorsSvg from '@/assets/Cors.svg';

import APIObject from '@/store/api/models/APIObject';

@Component({
  components: {
    GithubSvg,
    KeySvg,
    LockSvg,
    CorsSvg
  }
})
export default class APICard extends Vue {
  @Prop({ type: Object, required: true })
  readonly api!: APIObject;
}
</script>

<style lang="scss" scoped>
@import '~@/scss/colors';

.api-card-container {
  height: 220px;
  width: 443px;
  background-color: $color-white;
  border-radius: 8px;
  box-shadow: 3px 4px 5px 0 rgba($color-black, .25);
  margin: 0 0 35px 0;
  cursor: pointer;
  transition: background 200ms ease-in-out, box-shadow 200ms ease-in-out;

  &:hover {
    transition: background 200ms ease-in-out, box-shadow 200ms ease-in-out;
    background-color: $color-primary;
    box-shadow: 3px 4px 5px 0 rgba($color-primary, .5);

    .api-card-content {
      .github-svg {
        transition: fill 200ms ease-in-out;
        fill: $color-white;
      }

      .api-title {
        transition: color 200ms ease-in-out;
        color: $color-white;
      }

      .api-description {
        transition: color 200ms ease-in-out;
        color: $color-dark-white;
      }

      .api-card-details {
        transition: color 200ms ease-in-out;
        color: $color-white;

        .key-svg {
          transition: fill 200ms ease-in-out;
          fill: $color-white;
        }

        .lock-svg {
          transition: fill 200ms ease-in-out;
          fill: $color-white;
        }

        .cors-svg {
          transition: fill 200ms ease-in-out;
          fill: $color-white;
        }

        & > p {
          transition: color 200ms ease-in-out;
          color: $color-dark-white;
        }

      }

      .api-card-category {
        transition: color 200ms ease-in-out;
        color: $color-white;
      }

    }
    
  }

  .api-card-content {
    padding: 15px;

    .github-svg {
      transition: fill 200ms ease-in-out;
      fill: $color-black;
      transform-origin: top left;
    }

    .api-title {
      transition: color 200ms ease-in-out;
      display: inline-block;
      margin: 0 0 0 20px;
      font-size: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 80%;
      margin-bottom: 10px;
    }

    .api-description {
      transition: color 200ms ease-in-out;
      display: -webkit-box;
      max-height: 40px;
      height: 40px;
      line-height: 1.3;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    
    .api-card-details {
      transition: color 200ms ease-in-out;
      color: $color-black;

      & > * {
        display: inline;
      }

      .key-svg {
        transition: fill 200ms ease-in-out;
        fill: $color-black;
      }

      .lock-svg {
        transition: fill 200ms ease-in-out;
        fill: $color-black;
      }

      .cors-svg {
        transition: fill 200ms ease-in-out;
        fill: $color-black;
      }

      & > p {
        transition: color 200ms ease-in-out;
        margin: 0 25px 0 7px;
        color: $color-light-gray;
      }

    }

    .api-card-category {
        transition: color 200ms ease-in-out;
        color: $color-black;
        font-weight: bold;
      }

  }

}
</style>0