<script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";

const movies = ref();

onMounted(async () => {
  const response = await axios.get('http://localhost/wr506/api/movies');
  movies.value = response.data['hydra:member'];
})

</script>

<template>
  <h1>Movies List</h1>
  <ul v-if="movies">
    <li v-for="movie in movies">
      {{ movie.title }}
      <RouterLink :to="{ name: 'movie-edit', params: { id: movie.id } }">Edit</RouterLink> |
<!--      <RouterLink :to="{ name: 'movie-delete', params: { id: movie.id } }">Delete</RouterLink>-->
    </li>
  </ul>
</template>

<style>

</style>
