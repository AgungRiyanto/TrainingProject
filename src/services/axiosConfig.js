import axios from 'axios';
import { BASE_URL } from '../utils/config';

const axiosConfig = async(url, options = {
    method: "GET",
    body: {},

}) => {
    const req = {
        baseUrl: BASE_URL,
        method: options.method,
        timeout: 10000,
        url,
        headers: options.head,
        responsType: 'json'
    }

    if (req.method === "GET") {
        req.params = options.body;
    }

    const res = await axios(req);

    if (res.status === 200) {
        return res.data;
    } else {
        throw res;
    }
}

export default axiosConfig;