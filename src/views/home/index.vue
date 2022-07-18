<template>
  <!-- <Carousel class="cors" :list="list" :curr-index="currIndex"></Carousel> -->
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
      ></li>
      <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
      <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="@/assets/uploads/banner_1.jpg"
          class="d-block w-100 cors-image"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>致不平凡的你</h1>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/uploads/banner_2.jpg"
          class="d-block w-100 cors-image"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/uploads/banner_3.jpg"
          class="d-block w-100 cors-image"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>wanzge0618</h1>
        </div>
      </div>
    </div>
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
  <Panel></Panel>
  <Panel></Panel>
  <Panel></Panel>
</template>

<script setup>
import Panel from "@/components/panel.vue";
import { ref } from "vue";
const list = ref([
  require("@/assets/uploads/banner_1.jpg"),
  require("@/assets/uploads/banner_2.jpg"),
  require("@/assets/uploads/banner_3.jpg"),
]);
const currIndex = ref(0);
</script>

<style scoped lang="scss">
.carousel {
  .carousel-indicators {
    li {
      width: 12px;
      height: 12px;
      border: 0;
      border-radius: 9px;
      margin: 0 5px;
    }
  }
  .cors-image {
    object-fit: cover;
    height: 100% !important;
  }

  @media (max-width: 992px) {
    .carousel-item {
      height: 400px;
    }
  }
  @media (max-width: 768px) {
    .carousel-item {
      height: 250px;
    }
  }
  @media (min-width: 992px) {
    .carousel-item {
      height: 500px;
    }
  }
}
</style>
