<template>
  <Back></Back>
  <Header></Header>
  <router-view></router-view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/header.vue";
import Back from "@/components/back.vue";
</script>

<style scoped lang="scss"></style>
