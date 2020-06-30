import {listMonsters, getMonster} from './api';

export default async (name) => {
  return listMonsters(name)
    .then((foundMonsters) => Promise.all(foundMonsters.map((monster) => getMonster(monster.index))))
    .then((monstersDetails) => monstersDetails.map((monsterDetails) => ({name: monsterDetails.name, hit_points: monsterDetails.hit_points})));
};