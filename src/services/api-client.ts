import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key: '0d412867d20045f7a4f584ca542d8846'
    }
})