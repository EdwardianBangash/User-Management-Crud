<template>
  <h2 class="text-center" v-if="loggedInUser">Welcome , {{loggedInUser}}</h2>
</template>

<script>
export default {
  computed: { 
    loggedInUser(){
      return this.$store.getters.user;
    }
  }
};
</script>

<style scoped>

h2{ margin: 100px}

</style>
