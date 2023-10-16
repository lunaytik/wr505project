<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
        <RouterLink to="/actors">Actors</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>

</style>
