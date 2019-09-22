import { getRandom, engineGame } from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

function runEvenGame() {
  const numberForGame = getRandom(0, 100);
  console.log(`Question: ${numberForGame}`);
  return isEven(numberForGame) ? 'yes' : 'no';
}

export default function startGame() {
  return engineGame(description, runEvenGame);
}
