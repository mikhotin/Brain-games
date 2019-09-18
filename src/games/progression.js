import { getRandom, engineGame } from '../index';

const description = () => console.log('What number is missing in the progression?');
const progression = (num, difference, length = 10) => {
  const numbers = [num];
  let result = num;

  for (let i = 1; i < length; i += 1) {
    result += difference;
    numbers.push(result);
  }

  return numbers;
};

function game() {
  const number = getRandom(0, 100);
  const difference = getRandom(1, 10);
  const gameProgression = progression(number, difference);
  const randomIndex = getRandom(0, 9);
  const newArray = gameProgression.concat();
  newArray[randomIndex] = '..';
  console.log(`Question: ${newArray.join(' ')}`);
  return gameProgression[randomIndex].toString();
}

export default function startGame() {
  return engineGame(description, game);
}
