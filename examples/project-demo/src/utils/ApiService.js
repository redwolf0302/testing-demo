import axios from 'axios';


export default function ApiService(url) {
    return axios(`http://localhost:8080/api/${url}`);
}