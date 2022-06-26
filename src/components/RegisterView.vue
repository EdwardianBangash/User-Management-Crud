<template>
  <div class="form-wrapper">
    <form @submit.prevent="register">
      <h3 class="text-center">Register Now!</h3>
      <div class="form-group">
        <label for="exampleInputEmail1">Fullname</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Fullname"
          v-model="fullname"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter Your Email"
          v-model="email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          v-model="confirm_password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Register Me</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// axios.defaults.baseUrl = 'http://127.0.0.1:8000/api/'

export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    register() {
      axios.post("http://127.0.0.1:8000/api/register", {
          name: this.fullname,
          email: this.email,
          password: this.password,
          confirm_password: this.confirm_password,
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        });
    },
  },
};
</script>
