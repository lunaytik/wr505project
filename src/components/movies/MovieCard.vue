<script setup>
import {ref, onMounted, reactive} from "vue";
import axios from "axios";
import VueMultiselect from 'vue-multiselect/src/Multiselect.vue'
import router from "@/router";

const props = defineProps({
  movie: Object
})
</script>

<template>
  <h2>{{ movie.title }}</h2>
  <p>{{ movie.description }}</p>
  <small>{{ movie.duration }} minutes</small>
  <br>
  <small>Released : {{ movie.releaseDate.split('T')[0] }}</small>
  <br>
  <small>{{ movie.category.name }}</small>
</template>