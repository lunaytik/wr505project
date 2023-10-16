<script setup>
import MovieForm from "@/components/movies/MovieForm.vue";
</script>

<template>
  <h1>Movie Add</h1>
  <MovieForm/>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scoped>
form {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

form div {
  display: flex;
  flex-direction: column;
}

textarea {
  resize: none;
}
</style>
