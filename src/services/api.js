import axios from 'axios';
import { BASE_URL } from '../utils/config';

export const apiGetListTvShows = (page) => {
    return axios(BASE_URL + "/most-popular?page=" + page)
    .then((res) => res)
    .catch((err) => err)
}

export const apiGetDetailMovie = (movieId) => {
    return axios(BASE_URL + "/show-details?q=" + movieId)
    .then((res) => res)
    .catch((err) => err)
}

export const apiSearchMovie = (keyword, page) => {
    return axios(BASE_URL + `/search?q=${keyword}&page${page}`)
    .then((res) => res)
    .catch((err) => err)
}