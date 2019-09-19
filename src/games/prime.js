import { getRandom, engineGame } from '../index';

const description = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }

  for (let divider = 2; divider * divider <= num; divider += 1) {
    if (num % divider === 0) {
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
