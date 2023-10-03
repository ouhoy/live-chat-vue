<script setup lang="ts">
import SignupForm from "@/components/SignupForm.vue";
</script>

<template>
  <main>
    <div class="welcome container">
      <p>Welcome</p>
      <SignupForm/>
    </div>
  </main>
</template>

<style>

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
