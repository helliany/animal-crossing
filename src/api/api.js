import * as axios from "axios";
import { camelizeKeys, decamelizeKeys } from 'humps';

const instance = axios.create({
  baseURL: 'https://acnhapi.com/v1a',
  transformResponse: [
    ...axios.defaults.transformResponse,
    (data) => camelizeKeys(data),
  ],
  transformRequest: [
    (data) => decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
});

export const villagersAPI = {
  getVillagers() {
    return instance.get('/villagers')
      .then(response => {
        return response.data;
      })
  }
}

export const fishAPI = {
  getFishes() {
    return instance.get('/fish')
      .then(response => {
        return response.data;
      })
  }
}

export const bugsAPI = {
  getBugs() {
    return instance.get('/bugs')
      .then(response => {
        return response.data;
      })
  }
}

export const itemAPI = {
  getItem(url) {
    return instance.get(`${url}`)
      .then(response => {
        return response.data;
      })
  }
}
