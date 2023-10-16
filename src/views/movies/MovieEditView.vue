<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";
import {useRoute} from "vue-router"
import VueMultiselect from 'vue-multiselect/src/Multiselect.vue'
import router from "@/router";


const route = useRoute();
const id = route.params.id;

const movie = ref();
const title = ref();
const description = ref();
const releaseDate = ref();
const duration = ref();
const actor = ref();
const category = ref();

const actors = ref();
const categories = ref();

onMounted(async () => {
  const response = await axios.get(`http://localhost/wr506/api/movies/${id}`);
  movie.value = response.data;

  const resp = await axios.get('http://localhost/wr506/api/actors');
  actors.value = resp.data['hydra:member'];

  const r = await axios.get('http://localhost/wr506/api/categories');
  categories.value = r.data['hydra:member'];

  if (movie) {
    title.value = movie.value.title;
    description.value = movie.value.description;
    releaseDate.value = movie.value.releaseDate.split('T')[0];
    duration.value = movie.value.duration;
    actor.value = movie.value.actor;
    category.value = movie.value.category['@id'];
  }
})

const sendMovieData = () => {
  let body = {
    "title": title.value,
    "description": description.value,
    "releaseDate": releaseDate.value,
    "duration": duration.value,
    "category": category.value,
    "actor": [
    ]
  }

  let actorArr = [];
  actor.value.forEach((act) => actorArr.push(act['@id']));
  body.actor = actorArr;

  axios.put(`http://localhost/wr506/api/movies/${id}`, body)
      .then((response) => {
        router.go(-1);
      })
}
</script>

<template>
  <h1 v-if="movie">Movie Edit - Movie n°{{ movie.id }}</h1>
  <form>
    <div>
      <label for="title">Movie title</label>
      <input name="title" type="text" v-model="title">
    </div>
    <div>
      <label for="description">Movie description</label>
      <textarea name="description" v-model="description"></textarea>
    </div>
    <div>
      <label for="releaseDate">Movie release date</label>
      <input name="releaseDate" type="date" v-model="releaseDate">
    </div>
    <div>
      <label for="duration">Movie duration</label>
      <input name="duration" type="number" v-model="duration">
    </div>
    <div>
      <label for="duration">Movie actors</label>
      <VueMultiselect
          v-if="actors"
          v-model="actor"
          :options="actors"
          :multiple="true"
          :close-on-select="true"
          placeholder="Pick some"
          :custom-label="({firstName, lastName}) => `${firstName} ${lastName}`"
          track-by="@id"
      />
    </div>
    <div>
      <label for="category">Movie category</label>
      <select name="category" id="category" v-model="category">
        <option v-for="cat in categories" :value="cat['@id']" :selected="cat.id == category.id">
          {{ cat.name }}
        </option>
      </select>
    </div>

    <input type="submit" value="Envoyer" @click.prevent="sendMovieData">
  </form>
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
