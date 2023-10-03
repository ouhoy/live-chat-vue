<script setup lang="ts">


import {ref} from "vue";

const displayName = ref("");
const email = ref("")
const password = ref("")

function handleSubmit() {

}


</script>

<template>

  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>Sign up</button>
  </form>

</template>

<style scoped>

</style>