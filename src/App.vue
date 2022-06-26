<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
   <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  </header>

  <router-view></router-view>
</template>

<style>
@import '@/assets/base.css';

</style>
