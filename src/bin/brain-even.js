import readlineSync from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}`);
