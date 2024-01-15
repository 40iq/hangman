import { dataBase } from '../constants';

export function getRandomWord() {
  return Math.floor(Math.random() * dataBase.length);
}
