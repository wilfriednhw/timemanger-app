<template>
  <div id="app">
    <div v-if="this.$route.name != 'login'">
      <Navbar />
    </div>
    <router-view> </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
@import "./assets/styles/reset.css";
@import "./assets/styles/main.css";
</style>
