<script setup lang="ts">

import {ref} from "vue";
import getUser from "@/composables/getUser";
import {timestamp} from "@/firebase/config";
import useCollection from "@/composables/useCollection";

const message = ref("");

const {user} = getUser();
const {addDoc, error} = useCollection("messages")

async function handleSubmit() {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  }

  await addDoc(chat)
  if (!error.value) message.value = '';
  console.log(chat)
}

</script>

<template>


  <form>
    <textarea @keydown.enter.prevent="handleSubmit" v-model="message" placeholder="Type a message">

  </textarea>
    <div class="error">
      {{ error }}
    </div>
  </form>

</template>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>