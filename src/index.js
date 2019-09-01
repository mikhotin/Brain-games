import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
};
export const isEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  let counter = 1;
  while (counter <= 3) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer? ');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else if (number % 2 > 0 && answer === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`
      'yes' is wrong answer ;(.
      Correct answer was 'no'.
      Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
