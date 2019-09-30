import { cons } from '@hexlet/pairs';
import { getRandom, startEngine } from '../index';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;
const getProgression = (num, difference) => {
  const progression = [];

  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression[i] = num + difference * i;
  }
  return progression;
};

const createProgressionGame = () => {
  const startProgression = getRandom(0, 100);
  const difference = getRandom(1, 10);
  const gameProgression = getProgression(startProgression, difference);
  const hiddenElementIndex = getRandom(0, getProgression().length - 1);
  const fakeProgression = gameProgression.concat();
  fakeProgression[hiddenElementIndex] = '..';
  const gameQuestion = `${fakeProgression.join(' ')}`;
  const gameAnswer = gameProgression[hiddenElementIndex].toString();
  return cons(gameAnswer, gameQuestion);
};

export default () => startEngine(description, createProgressionGame);
