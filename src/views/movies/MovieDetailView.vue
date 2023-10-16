<script setup>
import {ref, onMounted, watch} from "vue";
import axios from "axios";
import MovieCard from "@/components/movies/MovieCard.vue";
import {useRoute} from "vue-router";
import router from "@/router";


const route = useRoute();
const id = route.params.id;
const movie = ref();

console.log(route);

const fetchMovie = async () => {
  const response = await axios.get(`http://localhost/wr506/api/movies/${id}`);
  movie.value = response.data;
  console.log(movie.value);
}

onMounted(async () => {
  await fetchMovie();
})

</script>

<template>
  <template v-if="movie">
    <MovieCard :movie="movie"/>
  </template>
</template>

<style>

</style>
