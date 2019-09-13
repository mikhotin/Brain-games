import { getRandom, engineGame } from '../index';

const description = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const expression = (num) => (num % 2 === 0 ? 'yes' : 'no');
function isEven() {
  const number = getRandom(0, 100);
  console.log(`Question: ${number}`);
  return expression(number);
}

export default function startGame() {
  return engineGame(description, isEven);
}
