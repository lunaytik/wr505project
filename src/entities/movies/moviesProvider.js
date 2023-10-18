import api from "../axios";
import router from "@/router";

export const createMovie = async (data) => {
  return await api.post('/movies', data)
            .then(() => {
                router.go(-1);
            });
}

export const getMovie = (id) => {
  return api.get(`/movies/${id}`);
}

export const getMovies = (page) => {
    return api.get(`/movies?page=${page}`);
}

export const getMoviesByTitle = (page, search) => {
    return api.get(`/movies?page=${page}&title=${search}`);
}

export const updateMovie = (id, data) => {
  return api.put(`/movies/${id}`, data)
            .then(() => {
                router.go(-1);
            });
}

export const deleteMovie = (id) => {
  return api.delete(`/movies/${id}`)
            .then(() => {
                router.go(-1);
            });
}