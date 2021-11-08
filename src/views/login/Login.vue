<template>
  <div class="login_view">
    <div class="left_side">
      <img :src="logo" alt="logo" class="logo" />
      <span class="logo_title">Time Manager</span>
    </div>

    <div class="right_side">
      <h1 class="title">Login to your account</h1>
      <div class="form_container">
        <div>
          <label class="input_bloc">
            <span class="label">Email : </span>
            <input
              class="input_text"
              type="text"
              placeholder="Enter your email"
            />
          </label>
        </div>
        <div>
          <label class="input_bloc">
            <span class="label">Password : </span>
            <input
              class="input_text"
              type="password"
              placeholder="Enter your password"
            />
          </label>
        </div>

        <div style="min-width: 30px">
          <button @click="goToDashboard()" class="btn btn_submit">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/images/logo.png";

export default {
  name: "Login",
  data() {
    return {
      logo,
    };
  },
  methods: {
    validateForm() {},
    loginToServer() {},
    goToDashboard() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
