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
      <div v-if="responseMessage" :class="style" class="mb-2">{{responseMessage}}</div>
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
      responseMessage: null,
      style: ''
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
        })
        .then((response) => {
          const token = response.data.token
           localStorage.setItem("token", token)
           this.$store.commit('token', token);
           this.style = 'text-info'
           this.responseMessage = response.data.success
        })
        .catch((error) => {
            this.responseMessage = error.response.data.error
            this.style = "text-danger"
        });
    }
  },
};
</script>
