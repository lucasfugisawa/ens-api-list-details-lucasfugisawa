const BASE_URL = 'https://www.dnd5eapi.co/api';

const request = (url) => {
  return fetch(url).then((resp) => resp.json())
};

export const listMonsters = (query) => {
  return request(`${BASE_URL}/monsters?name=${query}`).then((r) => r.results);
};

export const getMonster = (index) => {
  return request(`${BASE_URL}/monsters/${index}`);
};