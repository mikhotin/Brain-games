import { getRandom, engineGame } from '../index';

const description = 'What is the result of the expression?';
const mathOperators = '+-*';
const calc = (number1, number2, operator) => {
  let result = 0;
  switch (operator) {
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = number1 + number2;
  }
  return result;
};

function runCalcGame() {
  const numberForGame1 = getRandom(0, 100);
  const numberForGame2 = getRandom(0, 100);
  const randomOperator = mathOperators[getRandom(0, mathOperators.length - 1)];
  console.log(`Question: ${numberForGame1} ${randomOperator} ${numberForGame2}`);
  return calc(numberForGame1, numberForGame2, randomOperator).toString();
}

export default function startGame() {
  return engineGame(description, runCalcGame);
}
