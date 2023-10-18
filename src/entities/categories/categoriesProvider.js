import api from "../axios";
import router from "@/router";

export const createCategory = (data) => {
  return api.post('/categories', data)
            .then(() => {
                router.go(-1);
            });
}

export const getCategory = (id) => {
  return api.get(`/categories/${id}`);
}

export const getAllCategories = () => {
    return api.get(`/categories`);
}

export const updateCategory = (id, data) => {
  return api.put(`/categories/${id}`, data)
            .then(() => {
                router.go(-1);
            });
}

export const deleteCategory = (id) => {
  return api.delete(`/categories/${id}`)
            .then(() => {
                router.go(-1);
            });
}