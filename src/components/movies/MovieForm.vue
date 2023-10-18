<script setup>
import {ref, onMounted, reactive} from "vue";
import VueMultiselect from 'vue-multiselect/src/Multiselect.vue'
import { createMovie, updateMovie } from "../../entities/movies/moviesProvider";
import { getAllActors } from "../../entities/actors/actorsProvider";
import { getAllCategories } from "../../entities/categories/categoriesProvider";

const props = defineProps({
  movie: Object
})

const fields = reactive({
  title: '',
  description: '',
  releaseDate: '',
  duration: '',
  actor: '',
  category: ''
})

const actors = ref();
const categories = ref();

onMounted(async () => {
  const resp = await getAllActors();
  actors.value = resp.data['hydra:member'];

  const r = await getAllCategories();
  categories.value = r.data['hydra:member'];

  if (props.movie) {
    fields.title = props.movie.title;
    fields.description = props.movie.description;
    fields.releaseDate = props.movie.releaseDate.split('T')[0];
    fields.duration = props.movie.duration;
    fields.actor = props.movie.actor;
    fields.category = props.movie.category['@id'];
  }
})

const sendMovieData = () => {
  let body = {
    "title": fields.title,
    "description": fields.description,
    "releaseDate": fields.releaseDate,
    "duration": fields.duration,
    "category": fields.category,
    "actor": []
  }

  let actorArr = [];
  fields.actor.forEach((act) => actorArr.push(act['@id']));
  body.actor = actorArr;

  if (props.movie) {
    updateMovie(props.movie.id, body);
  } else {
    createMovie(body);
  }

}
</script>

<template>
  <form>
    <div>
      <label for="title">Movie title</label>
      <input name="title" type="text" v-model="fields.title">
    </div>
    <div>
      <label for="description">Movie description</label>
      <textarea name="description" v-model="fields.description"></textarea>
    </div>
    <div>
      <label for="releaseDate">Movie release date</label>
      <input name="releaseDate" type="date" v-model="fields.releaseDate">
    </div>
    <div>
      <label for="duration">Movie duration</label>
      <input name="duration" type="number" v-model="fields.duration">
    </div>
    <div>
      <label for="duration">Movie actors</label>
      <VueMultiselect
          v-if="actors"
          v-model="fields.actor"
          :options="actors"
          :multiple="true"
          :close-on-select="false"
          placeholder="Pick some"
          :custom-label="({firstName, lastName}) => `${firstName} ${lastName}`"
          track-by="@id"
      />
    </div>
    <div>
      <label for="category">Movie category</label>
      <select name="category" id="category" v-model="fields.category">
        <option v-for="cat in categories" :value="cat['@id']">
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
