import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieEditView from "@/views/movies/MovieEditView.vue";
import MovieAddView from "@/views/movies/MovieAddView.vue";

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
      name: 'movies-add',
      component: MovieAddView
    },
    {
      path: '/movies/:id/edit',
      name: 'movie-edit',
      component: MovieEditView
    }
  ]
})

export default router
