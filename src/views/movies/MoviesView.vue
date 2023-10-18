<script setup>
import {ref, onMounted, watch} from "vue";
import {getMovies, getMoviesByTitle} from "../../entities/movies/moviesProvider";
import MovieCard from "@/components/movies/MovieCard.vue";

const movies = ref();
const page = ref(1);
const lastPage = ref(1);
const search = ref('');

watch(page, () => {
  page.value <= 0 ? page.value = 0 : search.value.length != 0 ? searchByMovieName() : fetchMovies();
})

const fetchMovies = async () => {
  const response = await getMovies(page.value);
  movies.value = response.data['hydra:member'];

  if (response.data['hydra:view']['hydra:last']) {
    lastPage.value = response.data['hydra:view']['hydra:last'].slice(-1);
  }
}

onMounted(async () => {
  await fetchMovies();
})

const searchByMovieName = async (input = false) => {
  if (input) {
    page.value = 1;
    lastPage.value = 1;
  }

  const response = await getMoviesByTitle(page.value, search.value);
  movies.value = response.data['hydra:member'];

  if (response.data['hydra:view']['hydra:last']) {
    lastPage.value = response.data['hydra:view']['hydra:last'].slice(-1);
  }
}

</script>

<template>
  <h1>Movies List</h1>
  <ElRow justify="center">
    <ElSpace :size="8" direction="vertical">
      <RouterLink to="/movies/add">Add</RouterLink>
      <ElInput :clearable="true" type="text" name="search" v-model="search" @input="searchByMovieName(true)"/>
      <ElSpace size="medium">
        <ElButton @click="page--" :disabled="page == 1">Previous</ElButton>
        <ElText size="small">Page {{ page }}</ElText>
        <ElButton @click="page++" :disabled="lastPage == page">Next</ElButton>
      </ElSpace>
    </ElSpace>
  </ElRow>
  <ElRow class="gu" v-if="movies" justify="center">
    <RouterLink :to="{'movie-detail', params: {id: }}" v-for="movie in movies">
      <MovieCard :movie="movie" />
    </RouterLink>
  </ElRow>
</template>

<style scoped>
  .gu {
    gap: 12px;
  }
</style>
