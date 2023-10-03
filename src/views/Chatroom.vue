<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
import {watch} from "vue";
import getUser from "@/composables/getUser";
import {useRouter} from "vue-router";
import NewChatForm from "@/components/NewChatForm.vue";

const {user} = getUser();
const router = useRouter()

watch(user, () => {
  if (!user.value) {
    router.push({name: 'home'})
  }
})

</script>

<template>
  <div class="container">
    <Navbar/>

    <NewChatForm/>
  </div>
</template>

<style scoped>

</style>