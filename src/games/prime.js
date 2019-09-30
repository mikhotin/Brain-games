import { cons } from '@hexlet/pairs';
import { getRandom, startEngine } from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const createPrimeGame = () => {
  const gameQuestion = getRandom(0, 100);
  const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return cons(gameAnswer, gameQuestion);
};

export default () => startEngine(description, createPrimeGame);
