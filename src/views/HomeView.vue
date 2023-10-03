<script setup lang="ts">

import SignupForm from "@/components/SignupForm.vue";
import {ref} from "vue";
import LoginForm from "@/components/LoginForm.vue";

const showLogin = ref(true);


</script>

<template>
  <main>
    <div class="welcome container">
      <p>Welcome</p>
      <div v-if="showLogin">
        <h2>Login</h2>
        <LoginForm/>
        <p>No account yet? <span @click="showLogin = false"><b>Signup</b></span> instead.</p>

      </div>

      <div v-else>
        <h2>SignUp</h2>
        <SignupForm/>
        <p>Already registered? <span @click="showLogin = true"><b>Login</b></span> instead.</p>

      </div>

    </div>
  </main>
</template>

<style>

span > b {
  cursor: pointer;
}

.welcome {
  text-align: center;
  padding: 20px 0;
}

/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

</style>
