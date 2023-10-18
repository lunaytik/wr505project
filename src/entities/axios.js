import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost/wr506/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    },
});

export default api;