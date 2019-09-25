
import { getRandom, engineGame, cons } from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  const numberForGame = getRandom(0, 100);
  const expression = isEven(numberForGame) ? 'yes' : 'no';
  return cons(expression, `${numberForGame}`);
};

export default function startGame() {
  return engineGame(description, runEvenGame);
}
