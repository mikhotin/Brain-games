import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const startEngine = (gameDescription, runGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);

  for (let step = 1; step <= roundsCount; step += 1) {
    const resultOfGame = runGame();
    const rightAnswer = cdr(resultOfGame);
    const gameQuestion = car(resultOfGame);
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer? ');
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(.Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startEngine;
