<script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";

const movies = ref();

const fetchMovies = async () => {
  const response = await axios.get('http://localhost/wr506/api/movies');
  movies.value = response.data['hydra:member'];
}

onMounted(async () => {
  await fetchMovies();
})

</script>

<template>
  <h1>Movies List</h1>
  <RouterLink to="/movies/add">Add</RouterLink>
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
