<template>
  <h2 class="text-center" v-if="user">Welcome , {{user}}</h2>
</template>

<script>
export default {
  props: ['user']
};
</script>

<style scoped>

h2{ margin: 100px}

</style>
