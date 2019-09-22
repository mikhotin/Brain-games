import readlineSync from 'readline-sync';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const greeting = 'Welcome to the Brain Games!';
export const getQuestion = (gameQestion) => `Question: ${gameQestion}`;

export function engineGame(description, func) {
  console.log(`${greeting}
${description}`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);

  for (let step = 1, round = 3; step <= round; step += 1) {
    const rightAnswer = func();

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
}
