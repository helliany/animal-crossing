import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://acnhapi.com/v1a/',
});

export const villagersAPI = {
  getVillagers() {
    return instance.get('villagers')
      .then(response => {
        return response.data;
      })
      .catch((error) => {
        console.warn(error);
      });
  },
  getVillager(id) {
    return instance.get(`villagers/${id}`)
      .then(response => {
        return response.data;
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

export const fishAPI = {
  getFishes() {
    return instance.get('fish')
      .then(response => {
        return response.data;
      })
      .catch((error) => {
        console.warn(error);
      });
  },
  getFish(id) {
    return instance.get(`fish/${id}`)
      .then(response => {
        return response.data;
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}
