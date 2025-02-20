import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3a6686ebc0e344959d5b1e22324fefad',
    }
})