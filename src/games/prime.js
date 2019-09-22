import { getRandom, engineGame } from '../index';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let divider = 2; divider * divider <= num; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }

  return true;
};

function runPrimeGame() {
  const numberForGame = getRandom(0, 100);
  console.log(`Question: ${numberForGame}`);
  return isPrime(numberForGame) ? 'yes' : 'no';
}

export default function startGame() {
  return engineGame(description, runPrimeGame);
}
