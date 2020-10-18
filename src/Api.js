import Axios from 'axios';

const token = localStorage.getItem('API_TOKEN');

if (token) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

Axios.defaults.timeout = 30000

export default Axios.create({
    baseURL: 'http://95.142.227.244:8080',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})
