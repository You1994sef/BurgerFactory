import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-factory.firebaseio.com/'
});

export default instance;