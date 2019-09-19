import { getRandom, engineGame } from '../index';

const description = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const isPrime = (n) => {
  if (n === 1) {
    return 'no';
  }

  for (let d = 2; d * d <= n; d += 1) {
    if (n % d === 0) {
      return 'no';
    }
  }

  return 'yes';
};

function game() {
  const number = getRandom(0, 100);
  console.log(`Question: ${number}`);
  return isPrime(number);
}

export default function startGame() {
  return engineGame(description, game);
}
