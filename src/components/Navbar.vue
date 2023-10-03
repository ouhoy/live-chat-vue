<script setup lang="ts">

import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import router from "@/router";

const {error, logout} = useLogout()
const {user} = getUser()


async function handleLogout() {
  await logout();
  if (!error.value) {
    await router.push({name: "home"})
  }
}

</script>

<template>
  <nav v-if="user">
    <div>
      <p>{{ user.displayName }}</p>
      <p class="email">{{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 14px;
  color: #999;
}

button {
  cursor: pointer;
}
</style>