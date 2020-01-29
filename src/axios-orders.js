import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-platform-app.firebaseio.com/'
})

export default instance