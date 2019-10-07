import { cons } from '@hexlet/pairs';
import startEngine from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const getProgression = (num, difference, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression[i] = num + difference * i;
  }
  return progression;
};

const makeQuestionAnswer = () => {
  const startProgression = getRandom(0, 100);
  const difference = getRandom(1, 10);
  const lengthOfProgression = 10;
  const gameProgression = getProgression(startProgression, difference, lengthOfProgression);
  const hiddenElementIndex = getRandom(0, getProgression().length - 1);
  const fakeProgression = gameProgression.concat();
  fakeProgression[hiddenElementIndex] = '..';
  const gameQuestion = `${fakeProgression.join(' ')}`;
  const gameAnswer = gameProgression[hiddenElementIndex].toString();
  return cons(gameQuestion, gameAnswer);
};

export default () => startEngine(description, makeQuestionAnswer);
