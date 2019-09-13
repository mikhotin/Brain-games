import readlineSync from 'readline-sync';

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const greeting = () => console.log('Welcome to the Brain Games!');

export function engineGame(description, func) {
  greeting();
  description();

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);

  let step = 1;

  while (step <= 3) {
    const rightAnswer = func();
    const answer = readlineSync.question('Your answer? ');
    if (rightAnswer === answer) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`${answer} is wrong answer ;(.Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
