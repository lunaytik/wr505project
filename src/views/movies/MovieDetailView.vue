<script setup>
import { ref, onMounted } from "vue";
import MovieCard from "@/components/movies/MovieCard.vue";
import { useRoute } from "vue-router";
import { getMovie } from "../../entities/movies/moviesProvider";

const route = useRoute();
const id = route.params.id;
const movie = ref();

const fetchMovie = async () => {
  const response = await getMovie(id);
  movie.value = response.data;
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
