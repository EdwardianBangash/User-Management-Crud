<template>
  <h2 class="text-center" v-if="isAuthenticated">Welcome , {{fullname}}</h2>
</template>

<script>
export default {
  data(){
    return { 
      isAuthenticated : null,
      fullname : null
    }
  },
  created(){
    this.isAuthenticated = localStorage.getItem('token');
    this.fullname = localStorage.getItem('fullname');
    if(!this.isAuthenticated){
      this.$router.push('/login');
    }
  }

};
</script>

<style scoped>

h2{ margin: 100px}

</style>
