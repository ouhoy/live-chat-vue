<script setup lang="ts">


import {ref} from "vue";
import useLogin from "@/composables/useLogin";

const email = ref("")
const password = ref("")

const {error, login} = useLogin()

async function handleSubmit() {

  await login(email.value, password.value);
  if (!error.value) {
    console.log("User LoggedIn")
  }

}


</script>

<template>

  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Sign up</button>
    <div class="error">
      <p>{{ error }}</p>
    </div>
  </form>

</template>

<style scoped>

</style>