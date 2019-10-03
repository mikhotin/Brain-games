import { cons } from '@hexlet/pairs';
import { startEngine } from '..';
import getRandom from '../utils';

const description = 'What is the result of the expression?';
const mathOperators = '+-*';
const getExpression = (numberOne, numberTwo, operator) => {
  let result;
  switch (operator) {
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    case '+':
      result = numberOne + numberTwo;
      break;
    default:
      result = null;
  }
  return result;
};

const createCalcGame = () => {
  const operandOne = getRandom(0, 100);
  const operandTwo = getRandom(0, 100);
  const randomOperator = mathOperators[getRandom(0, mathOperators.length - 1)];
  const gameQuestion = `${operandOne} ${randomOperator} ${operandTwo}`;
  const gameAnswer = getExpression(operandOne, operandTwo, randomOperator).toString();
  return cons(gameAnswer, gameQuestion);
};

export default () => startEngine(description, createCalcGame);
