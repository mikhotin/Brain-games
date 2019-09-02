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
export const calc = () => {
  console.log(`Welcome to the Brain Games!
What is the result of the expression?`);
  const getRandomNumber = () => Math.floor(Math.random() * 100);
  const getRandomSymbol = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const symbols = '+-*';
  let counter = 1;
  while (counter <= 3) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const randomSymbol = symbols[getRandomSymbol(0, 2)];
    const expression = () => {
      let result = 0;
      switch (randomSymbol) {
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        default:
          result = num1 + num2;
      }
      return result;
    };
    console.log(expression());
    console.log(`Question: ${num1} ${randomSymbol} ${num2}`);
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) === expression()) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`
      ${answer} is wrong answer ;(. Correct answer was ${expression()}.
      Let's try again, ${'userName'}!`);
      return;
    }
  }
  console.log(`Congratulations, ${'userName'}!`);
};
