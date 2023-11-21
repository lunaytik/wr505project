<script setup>
import { ref, onMounted } from "vue";
import MovieCard from "@/components/movies/MovieCard.vue";
import { useRoute } from "vue-router";
import router from "@/router";
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
});

const goBack = () => router.go(-1);

</script>

<template>
  <template v-if="movie">
    <ElButton @click="goBack">Back</ElButton>
    <MovieCard :movie="movie"/>
  </template>
</template>

<style>

</style>
