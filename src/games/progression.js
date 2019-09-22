import { getRandom, engineGame } from '../index';

const description = 'What number is missing in the progression?';
const progression = (num, difference) => {
  const numbers = [num];
  let result = num;

  for (let i = 1, length = 10; i < length; i += 1) {
    result += difference;
    numbers.push(result);
  }

  return numbers;
};

function runProgressionGame() {
  const numberForGame = getRandom(0, 100);
  const difference = getRandom(1, 10);
  const gameProgression = progression(numberForGame, difference);
  const randomIndex = getRandom(0, progression().length - 1);
  const missingProgression = gameProgression.concat();
  missingProgression[randomIndex] = '..';
  console.log(`Question: ${missingProgression.join(' ')}`);
  return gameProgression[randomIndex].toString();
}

export default function startGame() {
  return engineGame(description, runProgressionGame);
}
