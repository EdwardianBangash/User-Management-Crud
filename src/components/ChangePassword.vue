<template>
  <div class="form-wrapper">
    <form @submit.prevent="changePassword">
      <h3 class="text-center">Reset Password</h3>
      <div class="form-group">
        <label for="exampleInputPassword1">New Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="New Password"
          v-model="password"
        />
        <small class="text-danger" v-if="v$.password.$error">{{v$.$errors[1].$message}}</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm New Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Confirm New Password"
          v-model="confirm_password"
        />
        <small class="text-danger" v-if="v$.password.$error">{{v$.$errors[1].$message}}</small>
      </div>
      <div v-if="responseMessage" :class="style" class="mb-2">{{responseMessage}}</div>
      <button type="submit" class="btn btn-primary">Change Password</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
export default {
  data() {
    return {
      v$: useVuelidate(),
      password: "",
      confirm_password: "",
      responseMessage: null,
      style: ''
    };
  },
  validations () {
    return {
      password: { required},
      confirm_password: { required}
    }
  },
  methods: {
    async changePassword(){
      const result = await this.v$.$validate()
      if (!result) {
        return false
      }
      axios.post("changePassword", {
          password: this.password,
          confirm_password: this.confirm_password,
          email: this.$route.params.email,
          token: this.$route.params.token
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
