<script setup lang="ts">


import {ref} from "vue";
import useSignup from "../composables/useSignup";

const displayName = ref("");
const email = ref("")
const password = ref("")

const {error, signup} = useSignup()

async function handleSubmit() {

  await signup(email.value, password.value, displayName.value)
}


</script>

<template>

  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">
      <p>{{ error }}</p>
    </div>
    <button>Sign up</button>
  </form>

</template>

<style >
.error {
  color: red
}
</style>