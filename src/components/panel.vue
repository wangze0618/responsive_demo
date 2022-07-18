<template>
  <div class="container-lg">
    <div class="title-box">
      <h2 class="main-title">OpenSource&nbsp;/&nbsp;开源项目</h2>
      <span class="sub-title">种类众多的开源项目，让你爱不释手</span>
    </div>
    <div class="row">
      <div class="card-body col-xs-12 col-md-6 col-lg-3">
        <a href="#">
          <img
            src="http://cdn.alloyteam.com/assets/img/omi-be3d88.png"
            alt=""
          />
          <h3>OMI</h3>
          <span>开放现代的Web组件化框架</span>
        </a>
      </div>
      <div class="card-body col-xs-12 col-md-6 col-lg-3">
        <a href="#">
          <img
            src="http://cdn.alloyteam.com/assets/img/omi-be3d88.png"
            alt=""
          />
          <h3>OMI</h3>
          <span>开放现代的Web组件化框架</span>
        </a>
      </div>
      <div class="card-body col-sm-12 col-md-6 col-lg-3">
        <a href="#">
          <img
            src="http://cdn.alloyteam.com/assets/img/omi-be3d88.png"
            alt=""
          />
          <h3>OMI</h3>
          <span>开放现代的Web组件化框架</span>
        </a>
      </div>
      <div class="card-body col-sm-12 col-md-6 col-lg-3">
        <a href="#">
          <img
            src="http://cdn.alloyteam.com/assets/img/omi-be3d88.png"
            alt=""
          />
          <h3>OMI</h3>
          <span>开放现代的Web组件化框架</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped lang="scss">
.container-lg {
  @media (min-width: 1200px) {
    padding: 0 40px !important;
  }
}
.card-body {
  text-align: center;
  padding: 0 20px;
  margin-bottom: 10px;
  @media (max-width: 1200px) {
    padding: 0 10px !important;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
    width: 100%;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    padding: 0 10px;
    img {
      margin: 20px 0;
    }
    h3 {
      margin-bottom: 10px;
    }
    span {
      margin-bottom: 20px;
    }
  }
  &:nth-child(2) {
    a {
      background: #fd6a7f !important;
    }
  }
  &:nth-child(3) {
    a {
      background: #7f8ea0 !important;
    }
  }
  &:nth-child(4) {
    a {
      background: #89d04f !important;
    }
  }
}
.title-box {
  margin-top: 40px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 20px;
  color: #494d55;
  font-family: Segoe UI Light, Microsoft YaHei, Arial, Helvetica, sans-serif;
}
</style>
