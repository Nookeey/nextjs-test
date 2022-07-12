import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://51.83.130.70:3000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    credentials: true
})

export default axios
