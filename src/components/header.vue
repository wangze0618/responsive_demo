<template>
  <nav
    :class="{ scrollTop: scrollTop > 70 }"
    class="navbar navbar-expand-lg navbar-light"
  >
    <div class="container-lg navbar-con">
      <h1 class="navbar-brand" href="#">
        <a href="#"><img src="../assets/images/logo.png" alt="" /></a>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item text-center">
            <router-link to="/" class="nav-link">首页</router-link>
          </li>
          <li class="nav-item text-center">
            <router-link to="/blog" class="nav-link">博客</router-link>
          </li>
          <li class="nav-item text-center">
            <a class="nav-link" href="#">Github</a>
          </li>
          <li class="nav-item text-center">
            <router-link to="/news" class="nav-link conf" href="#"
              >TWeb Conf</router-link
            >
          </li>
          <li class="nav-item text-center">
            <router-link to="star" class="nav-link" href="#"
              >SuperStar</router-link
            >
          </li>
          <li class="nav-item text-center">
            <router-link to="/navigator" class="nav-link" href="#"
              >Web前端导航</router-link
            >
          </li>
          <li class="nav-item text-center">
            <router-link to="/about" class="nav-link" href="#"
              >关于</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
const scrollTop = ref(0);
const scrollFn = () => {
  scrollTop.value = document.documentElement.scrollTop;
};
onMounted(() => {
  window.addEventListener("scroll", scrollFn, false);
});
</script>

<style scoped lang="scss">
.scrollTop {
  // backdrop-filter: blur(4px);
  background-color: #26282c !important;
  box-shadow: 0 0 4px rgb(0 0 0 / 50%);
}
@media (max-width: 992px) {
  .navbar-con {
    padding: 0;
  }
  .nav-link {
    margin-right: 0 !important;
  }
  .navbar-nav {
    background-color: #26282c;
  }
}

@media (min-width: 993px) {
  .navbar-con {
    padding: 10px 0px;
  }
}

.navbar-con {
  .navbar-collapse {
    justify-content: flex-end;
  }
  .navbar-brand {
    margin-left: 30px;
  }
  .navbar-toggler {
    margin-right: 10px;
  }
}

.conf {
  position: relative;
}
.conf::before {
  content: "";
  display: inline-block;
  width: 13px;
  height: 15px;
  position: relative;
  background: url(../assets/images/fire.png) 50% no-repeat;
  background-size: 100% 100%;
  top: 2px;
  left: 0px;
}
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 0.5s;

  @media (max-width: 992px) {
    padding-top: 0;
    padding-bottom: 0;
  }
  .navbar-collapse {
    padding: 0 !important;
  }
  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.nav-link {
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.805) !important;
}
.router-link-exact-active {
  color: skyblue;
}
</style>
