import { cons } from '@hexlet/pairs';
import { startEngine } from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const createEvenGame = () => {
  const gameQuestion = getRandom(0, 100);
  const gameAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return cons(gameAnswer, gameQuestion);
};

export default () => startEngine(description, createEvenGame);
