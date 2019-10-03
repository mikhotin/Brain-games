import { cons } from '@hexlet/pairs';
import { startEngine } from '..';
import getRandom from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGretestCommonDivisior = (numberOne, numberTwo) => (numberOne
  ? getGretestCommonDivisior(numberTwo % numberOne, numberOne) : numberTwo);

const createGcdGame = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const gameQuestion = `${a} ${b}`;
  const gameAnswer = getGretestCommonDivisior(a, b).toString();
  return cons(gameAnswer, gameQuestion);
};

export default () => startEngine(description, createGcdGame);
