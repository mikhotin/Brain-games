import { getRandom, engineGame } from '../index';

const description = () => console.log('What is the result of the expression?');
const symbols = '+-*';
const expression = (number1, number2, symbol) => {
  let result = 0;
  switch (symbol) {
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

function calc() {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const randomSymbol = symbols[getRandom(0, 2)];
  console.log(`Question: ${num1} ${randomSymbol} ${num2}`);
  return expression(num1, num2, randomSymbol).toString();
}

export default function startGame() {
  return engineGame(description, calc);
}
