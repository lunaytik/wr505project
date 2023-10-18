<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router"
import { deleteMovie } from "../../entities/movies/moviesProvider";

const route = useRoute();
const id = route.params.id;

onMounted(async () => {
  await deleteMovie(id);
});
</script>

<template>
</template>
