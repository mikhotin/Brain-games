import { cons } from '@hexlet/pairs';
import startEngine from '..';
import getRandom from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const getGretestCommonDivisior = (a, b) => (a ? getGretestCommonDivisior(b % a, a) : b);

const makeQuestionAnswer = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const gameQuestion = `${a} ${b}`;
  const gameAnswer = getGretestCommonDivisior(a, b).toString();
  return cons(gameQuestion, gameAnswer);
};

export default () => startEngine(description, makeQuestionAnswer);
