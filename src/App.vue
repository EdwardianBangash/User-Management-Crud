<template>
  <the-navbar></the-navbar>
  <router-view></router-view>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import TheNavbar  from "./components/TheNavbar.vue";

export default {
  components: {
    "the-navbar": TheNavbar,
  },
};
</script>

<style>
.form-wrapper{
    margin-top: 50px;
}

form { 
    width: 40%; 
    margin: 0 auto;
    background-color: #d8d0d0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
</style>
