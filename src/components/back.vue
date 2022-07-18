<template>
  <div @click="backFn" class="box">back</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const backFn = () => {
  if (document.documentElement.scrollTop >= 70) {
    document.documentElement.scrollTop = 0;
  }
};

onMounted(() => {
  window.addEventListener("scroll", top);
});
</script>

<style scoped lang="scss">
.box {
  position: fixed;
  right: 50px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  background-color: pink;
}
</style>
