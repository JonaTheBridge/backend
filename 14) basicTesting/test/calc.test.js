import calc from './calc.js';

const passedTests = [];

// ------------------------ 1 ------------------------
const isTest1Pass = calc(1, 1, '+') === 2;
console.log('Test 1', isTest1Pass);
passedTests.push(isTest1Pass);

if (passedTests.every((test) => test)) {
  console.log('Congratulations! All test passed ✅');
} else {
  console.log('Oooooh! Your code sucks 🤢');
}
