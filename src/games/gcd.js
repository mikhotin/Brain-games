import { getRandom, engineGame } from '../index';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => (num1 ? gcd(num2 % num1, num1) : num2);

function runGcdGame() {
  const numberForGame1 = getRandom(0, 100);
  const numberForGame2 = getRandom(0, 100);
  console.log(`Question: ${numberForGame1} ${numberForGame2}`);
  return gcd(numberForGame1, numberForGame2).toString();
}

export default function startGame() {
  return engineGame(description, runGcdGame);
}
