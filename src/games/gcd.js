import { cons } from '@hexlet/pairs';
import { getRandom, startEngine } from '../index';

const description = 'Find the greatest common divisor of given numbers.';
const getCommonDivisior = (numberOne, numberTwo) => (numberOne
  ? getCommonDivisior(numberTwo % numberOne, numberOne) : numberTwo);

const createGcdGame = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const gameQuestion = `${a} ${b}`;
  const gameAnswer = getCommonDivisior(a, b).toString();
  return cons(gameAnswer, gameQuestion);
};

export default () => startEngine(description, createGcdGame);
