import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://nextjs.pltgroup3.civ.pl',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    credentials: true
})

export default axios
