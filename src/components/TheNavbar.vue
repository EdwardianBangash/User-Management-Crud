<template>
    <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" to="/">Logify</router-link>
    <div class="collapse navbar-collapse btn">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>


<style scoped>
.btn {
  position: absolute;
  right: 10px;
}

.navbar{
    background-color: rgba(235, 231, 231, 0.703);
}
</style>