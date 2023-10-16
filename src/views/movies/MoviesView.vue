<script setup>
import {ref, onMounted, watch} from "vue";
  import axios from "axios";

const movies = ref();
const page = ref(1);
const lastPage = ref(1);

const search = ref('');

watch(page, () => {
  page.value <= 0 ? page.value = 0 : fetchMovies();
})

const fetchMovies = async () => {
  const response = await axios.get(`http://localhost/wr506/api/movies?page=${page.value}`);
  movies.value = response.data['hydra:member'];
  lastPage.value = response.data['hydra:view']['hydra:last'].slice(-1);
}

onMounted(async () => {
  await fetchMovies();
})

const searchByMovieName = async () => {
  page.value = 1;

  const response = await axios.get(`http://localhost/wr506/api/movies?page=${page.value}&title=${search.value}`);
  movies.value = response.data['hydra:member'];

  console.log(response.data);
}

</script>

<template>
  <h1>Movies List</h1>
  <RouterLink to="/movies/add">Add</RouterLink>
  <input type="text" name="search" id="search" v-model="search" @input="searchByMovieName">
  <div>
    <button @click="page--" :disabled="page == 1">Previous</button>
    <small>Page {{ page }}</small>
    <button @click="page++" :disabled="lastPage == page">Next</button>
  </div>
  <ul v-if="movies">
    <li v-for="movie in movies">
      <RouterLink :to="{ name: 'movie-detail', params: { id: movie.id } }">{{ movie.title }}</RouterLink> -
      <RouterLink :to="{ name: 'movie-edit', params: { id: movie.id } }">Edit</RouterLink> |
<!--      <RouterLink :to="{ name: 'movie-delete', params: { id: movie.id } }">Delete</RouterLink>-->
    </li>
  </ul>
</template>

<style>

</style>
