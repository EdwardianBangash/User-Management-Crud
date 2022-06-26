import axios from 'axios';

axios.defaults.baseUrl = 'http://127.0.0.1:8000/'

// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api/'
// });

// export default {
//   install: function(Vue) {
//     Object.defineProperty(Vue.prototype, '$axios', { value: instance });
//   }
// }