import api from "../axios";
import router from "@/router";

export const createActor = (data) => {
  return api.post('/actors', data)
            .then(() => {
                router.go(-1);
            });
}

export const getActor = (id) => {
  return api.get(`/actors/${id}`);
}

export const getAllActors = () => {
    return api.get(`/actors`);
}

export const getActors = (page) => {
    return api.get(`/actors?page=${page}`);
}

export const getActorsByName = (page, search) => {
    return api.get(`/actors?page=${page}&name=${search}`);
}

export const updateActor = (id, data) => {
  return api.put(`/actors/${id}`, data)
            .then(() => {
                router.go(-1);
            });
}

export const deleteActor = (id) => {
  return api.delete(`/actors/${id}`)
            .then(() => {
                router.go(-1);
            });
}