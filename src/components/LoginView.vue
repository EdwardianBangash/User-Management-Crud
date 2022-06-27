<template>
  <div class="form-wrapper">
    <form @submit.prevent="login">
      <h3 class="text-center">Login To Continue</h3>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter Your Email"
          v-model="email"
        />
        <small class="text-danger" v-if="v$.email.$error">{{v$.$errors[0].$message}}</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
        <small class="text-danger" v-if="v$.password.$error">{{v$.$errors[1].$message}}</small>
      </div>
      <button type="submit" class="btn btn-primary">Login Me</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import axios from 'axios'
export default {
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",
    };
  },
  validations () {
    return {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    async login() {
      const result = await this.v$.$validate()
      if (!result) {
        return false
      }
      axios.post("login", {
          email: this.email,
          password: this.password
        })
        .then((response) => {
          console.log(response)
           localStorage.setItem("token", response.data.token)
           localStorage.setItem("fullname", response.data.user.name)
           this.$router.push("/")
        })
        .catch((error) => {
            console.log(error)
        });
    },
  },
};
</script>
