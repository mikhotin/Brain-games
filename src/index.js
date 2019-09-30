import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const greeting = 'Welcome to the Brain Games!';
const gameRounds = 3;

export const startEngine = (gameDescription, game) => {
  console.log(`${greeting}
${gameDescription}`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);

  for (let step = 1; step <= gameRounds; step += 1) {
    const resultOfGame = game();
    const rightAnswer = car(resultOfGame);
    console.log(`Question: ${cdr(resultOfGame)}`);
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
