<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <!-- 指示器 -->
    <ol class="carousel-indicators">
      <li
        class="indicators"
        v-for="(item, index) in list"
        :key="index"
        data-bs-target="#carouselExampleCaptions"
        :data-bs-slide-to="index"
        :class="{ active: currIndex == index }"
      ></li>
    </ol>
    <!-- 图片区域 -->
    <div class="carousel-inner">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="carousel-item"
        :data-bs-interval="time"
        :class="{ active: index == currIndex }"
      >
        <img :src="item" class="d-block carousel-image" />
      </div>
    </div>
    <!-- 控制器左右 -->
    <a
      class="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
    required: true,
  },
  currIndex: {
    type: Number,
    default: 0,
    required: true,
  },
  time: {
    type: Number,
    default: 3000,
  },
});
</script>

<style scoped lang="scss">
.carousel {
  width: 500px;
  height: 200px;
}
.carousel-inner {
  // width: 500px;
  // height: 200px;
}
.carousel-image {
  height: 200px;
  width: 500px;
}
.carousel-indicators {
  :deep(.indicators) {
    border: 0;
    margin: 0 calc(0.5vw);
    width: calc(10px + 0.2vw);
    height: calc(10px + 0.2vw);
    border-radius: 100px !important;
  }
}
</style>
