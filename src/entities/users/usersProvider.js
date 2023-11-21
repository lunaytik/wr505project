import api from "../axios";

export const login = async (data) => {
  return await api.post('/login', data)
            .then((data) => {
                if (data.data) {
                    localStorage.setItem('access_token', data.data.token);
                }
                // Use location href to refresh
                location.href = '/';
            });
}