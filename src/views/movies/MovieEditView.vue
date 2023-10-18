<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"
import MovieForm from "@/components/movies/MovieForm.vue";
import { getMovie } from "../../entities/movies/moviesProvider";

const route = useRoute();
const id = route.params.id;
const movie = ref();

onMounted(async () => {
  const response = await getMovie(id);
  movie.value = response.data;
});
</script>

<template>
  <template v-if="movie">
    <h1>Movie Edit - Movie n°{{ movie.id }}</h1>
    <MovieForm :movie="movie"/>
  </template>
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
