<template>
  <div class="form-wrapper">
    <form @submit.prevent="forgotPassword">
      <h3 class="text-center">Reset Password</h3>
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
      <div class="mt-2 mb-2">
        Please Provide Email, Password Reset Email will be sent to you
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
      email: ""
    };
  },
  validations () {
    return {
      email: { required, email }
    }
  },
  methods: {
    async forgotPassword(){
      const result = await this.v$.$validate()
      if (!result) {
        return false
      }
      axios.post("forgotPassword", {
          email: this.email,
          password: this.password
        })
        .then((response) => {
            console.log(response)
           localStorage.setItem("token", response.data.token)
          //  localStorage.setItem("fullname", response.data.user.name)
           this.$store.dispatch('user', response.data.user.name)
           this.$router.push("/")
        })
        .catch((error) => {
            console.log(error)
        });
    }
  },
};
</script>
