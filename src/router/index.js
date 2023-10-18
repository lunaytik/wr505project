import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieEditView from "@/views/movies/MovieEditView.vue";
import MovieAddView from "@/views/movies/MovieAddView.vue";
import MovieDetailView from "@/views/movies/MovieDetailView.vue";
import MovieDeleteView from "@/views/movies/MovieDeleteView.vue";
import ActorsView from "@/views/actors/ActorsView.vue";
import ActorDetailView from "@/views/actors/ActorDetailView.vue";
import ActorEditView from "@/views/actors/ActorEditView.vue";
import ActorAddView from "@/views/actors/ActorAddView.vue";
import ActorDeleteView from "@/views/actors/ActorDeleteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/movies/MoviesView.vue')
    },
    {
      path: '/movies/add',
      name: 'movie-add',
      component: MovieAddView
    },
    {
      path: '/movies/:id/edit',
      name: 'movie-edit',
      component: MovieEditView
    },
    {
      path: '/movies/:id/delete',
      name: 'movie-delete',
      component: MovieDeleteView
    },
    {
      path: '/movies/:id',
      name: 'movie-detail',
      component: MovieDetailView
    },
    {
      path: '/actors',
      name: 'actors',
      component: ActorsView,
    },
    {
      path: '/actors/add',
      name: 'actor-add',
      component: ActorAddView,
    },
    {
      path: '/actors/:id',
      name: 'actor-detail',
      component: ActorDetailView
    },
    {
      path: '/actors/:id/edit',
      name: 'actor-edit',
      component: ActorEditView,
    },
    {
      path: '/actors/:id/delete',
      name: 'actor-delete',
      component: ActorDeleteView,
    }
  ]
})

export default router
