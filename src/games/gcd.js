import { getRandom, engineGame } from '../index';

const description = () => console.log('Find the greatest common divisor of given numbers.');
const gcd = (x, y) => (x ? gcd(y % x, x) : y);

function game() {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  console.log(`Question: ${num1} ${num2}`);
  return gcd(num1, num2).toString();
}

export default function startGame() {
  return engineGame(description, game);
}
