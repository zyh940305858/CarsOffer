import axios from 'axios';
import store from '@/store/index';



let Connection = axios.create({
    baseURL: 'http://baojia.chelun.com/',
    timeout: 5000,
    // headers:{}
});

Connection.interceptors.request.use(config => {
    store.commit("showloading")
    return config;
}, error => {
    store.commit("hideloading")
    return Promise.reject(error);
});

Connection.interceptors.response.use(response => {
    store.commit("hideloading")
    if (response.status == 200) {
        return response.data;
    } else {
        this.$notify({
            type: 'warning',
            message: response.text
        })
    }
}, error => {
    store.commit("hideloading")
    this.$notify({
        type: 'warning',
        message: error
    })
});

export default Connection;