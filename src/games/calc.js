import { cons } from '@hexlet/pairs';
import startEngine from '..';
import getRandom from '../utils';

const description = 'What is the result of the expression?';
const mathOperators = '+-*';
const getExpression = (a, b, operator) => {
  let result;
  switch (operator) {
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '+':
      result = a + b;
      break;
    default:
      result = null;
  }
  return result;
};

const makeQuestionAnswer = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 100);
  const randomOperator = mathOperators[getRandom(0, mathOperators.length - 1)];
  const gameQuestion = `${a} ${randomOperator} ${b}`;
  const gameAnswer = getExpression(a, b, randomOperator).toString();
  return cons(gameQuestion, gameAnswer);
};

export default () => startEngine(description, makeQuestionAnswer);
