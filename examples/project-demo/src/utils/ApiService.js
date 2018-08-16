import axios from 'axios';
import qs from 'qs';

/**
 *
 * @param url
 * @param params
 * @param options
 * @returns {AxiosPromise}
 * @constructor
 */
export default function ApiService(url, params = {}, options = {}) {
    options = Object.assign({
        method: 'get',
        baseURL: 'http://localhost:8080/api'
    }, options);

    if (options.method.toLowerCase() === 'post') {
        options.headers = Object.assign({}, (options.headers || {}), {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'});
        options.data = qs.stringify(params)
    } else {
        options.params = params;
    }

    return axios(url, options);
}