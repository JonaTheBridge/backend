import romanParseator from './romaneNumbers.js';

const tests = [];

// ------------------------ 1 ------------------------
function test1() {
  const numberAsString = '99';
  const response = romanParseator({ numberAsString });
  // console.log(`${numberAsString} ==> ${test1Response}`);
  const expectedResponse = 'XCIX';
  const isTestPass = response === expectedResponse;

  tests.push(isTestPass);
}
test1();

// ------------------------ SUMMARY ------------------------
const failedTests = tests.filter((test) => !test);
if (!failedTests.length) {
  console.log('Congratulations! All test passed ✅');
} else {
  console.log('Oooooh! Your code sucks 🤢');
  tests.forEach((test, index) => {
    if (!test) {
      console.log(`The test number ${index + 1} failed ❌`);
    }
  });
}
