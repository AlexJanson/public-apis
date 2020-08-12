<template>
  <div class="api-card-container" @click="goToDetail">
    <div class="api-card-content">
      <GithubSvg class="github-svg" />
      <h1 class="api-title" :title="api.name">{{ api.name }}</h1>
      <p class="api-description">{{ api.description }}</p>
      <div class="api-card-details">
        <div class="api-detail">
          <KeySvg class="key-svg" />
          <p>{{ api.apikey ? api.apikey : "N/A" }}</p>
        </div>
        <div class="api-detail">
          <LockSvg class="lock-svg" />
          <p>{{ api.https ? "HTTPS" : "Unavailable" }}</p>
        </div>
        <div class="api-detail">
          <CorsSvg class="cors-svg" />
          <p>{{ api.cors }}</p>
        </div>
      </div>
      <p class="api-card-category">{{ api.category }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import GithubSvg from "@/assets/Github.svg";
import KeySvg from "@/assets/Key.svg";
import LockSvg from "@/assets/Lock.svg";
import CorsSvg from "@/assets/Cors.svg";

import APIObject from "@/store/api/models/APIObject";

@Component({
  components: {
    GithubSvg,
    KeySvg,
    LockSvg,
    CorsSvg,
  },
})
export default class APICard extends Vue {
  @Prop({ type: Object, required: true })
  readonly api!: APIObject;

  // Redirects to the detail page for this records id
  goToDetail() {
    window.scrollTo(0, 0);
    this.$router.push(`/detail/${this.api.id}`);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/colors";
@import "~@/scss/mixins";

* {
  transition: background 200ms ease-in-out;
}

.api-card-container {
  width: 443px;
  min-height: 220px;
  min-width: 280px;
  background-color: $color-white;
  border-radius: 8px;
  box-shadow: 3px 4px 5px 0 rgba($color-black, 0.25);
  margin: 0 20px 20px 0;
  cursor: pointer;
  float: left;

  &:hover {
    background-color: $color-primary;
    box-shadow: 3px 4px 5px 0 rgba($color-primary, 0.5);

    .api-card-content {
      .github-svg {
        fill: $color-white;
      }

      .api-title {
        color: $color-white;
      }

      .api-description {
        color: $color-dark-white;
      }

      .api-card-details {
        color: $color-white;

        .api-detail {
          .key-svg {
            fill: $color-white;
          }

          .lock-svg {
            fill: $color-white;
          }

          .cors-svg {
            fill: $color-white;
          }

          & > p {
            color: $color-dark-white;
          }
        }
      }

      .api-card-category {
        color: $color-white;
      }
    }
  }

  .api-card-content {
    padding: 15px;

    .github-svg {
      fill: $color-black;
      transform-origin: top left;
    }

    .api-title {
      display: inline-block;
      margin: 0 0 0 20px;
      font-size: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 68%;
      margin-bottom: 10px;
    }

    .api-description {
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
      color: $color-black;

      .api-detail {
        display: inline;
        margin: 0 0 8px 0;

        & > * {
          display: inline;
        }

        .key-svg {
          fill: $color-black;
        }

        .lock-svg {
          fill: $color-black;
        }

        .cors-svg {
          fill: $color-black;
        }

        & > p {
          margin: 0 25px 0 7px;
          color: $color-light-gray;
        }
      }
    }

    .api-card-category {
      color: $color-black;
      font-weight: bold;
    }
  }
}

@media only screen and (max-width: 499px) {
  .api-card-container {
    .api-card-content {
      .api-card-details {
        .api-detail {
          display: block;
        }
      }
    }
  }
}
</style>