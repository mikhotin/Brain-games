import { getRandom, engineGame } from '../index';

const description = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

function game() {
  const number = getRandom(0, 100);
  console.log(`Question: ${number}`);
  return isEven(number);
}

export default function startGame() {
  return engineGame(description, game);
}
