import calc from './calc.js';
// calc es una función que, dados 2 números positivos y enteros y un símbolo de operación
// matemética básica (suma, resta, mult y división), hace el calculo correspondiente

const tests = [];

// ------------------------ 1 ------------------------
function test1() {
  const response = calc(1, 1, '+');
  const expectedResponse = 2;
  const isTestPass = response === expectedResponse;
  tests.push(isTestPass);
}
test1();

// ------------------------ 2 ------------------------
function test2() {
  try {
    calc('1', 2, '+');
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '1',
      message: 'The first argument must be a number',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test2();

// ------------------------ 3 ------------------------
function test3() {
  try {
    calc(1, '2', '+');
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '4',
      message: 'The second argument must be a number',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test3();

// ------------------------ 4 ------------------------
function test4() {
  try {
    calc(-1, 2, '+');
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '2',
      message: 'The first argument must be a positive number',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test4();

// ------------------------ 5 ------------------------
function test5() {
  try {
    calc(1, -2, '+');
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '5',
      message: 'The second argument must be a positive number',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test5();

// ------------------------ 6 ------------------------
function test6() {
  const response = calc(2, 3, '*');
  const expectedResponse = 6;
  const isTestPass = response === expectedResponse;
  tests.push(isTestPass);
}
test6();

// ------------------------ 7 ------------------------
function test7() {
  try {
    calc(1, 2, undefined);
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '9',
      message: 'The third argument must be a valid symbol',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test7();

// ------------------------ 8 ------------------------
function test8() {
  try {
    calc(1.1, 2, '+');
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '3',
      message: 'The first argument must be a integer number',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test8();

// ------------------------ 9 ------------------------
function test9() {
  try {
    calc(1, 2.2, '+');
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '6',
      message: 'The second argument must be a integer number',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test9();

// ------------------------ 10 ------------------------
function test10() {
  const response = calc(3, 1, '-');
  const expectedResponse = 2;
  const isTestPass = response === expectedResponse;
  tests.push(isTestPass);
}
test10();

// ------------------------ 11 ------------------------
function test11() {
  const response = calc(0, 1, '/');
  const expectedResponse = 0;
  const isTestPass = response === expectedResponse;
  tests.push(isTestPass);
}
test11();

// ------------------------ 12 ------------------------
function test12() {
  try {
    calc(1, 0, '/');
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '7',
      message: 'The dividend cannot be zero',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test12();

// ------------------------ 13 ------------------------
function test13() {
  try {
    calc(0, 0, '/');
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      status: '8',
      message: 'In a division, both args cannot be zero',
    };

    const isStatusPass = response.status === expectedResponse.status;
    const isMessagePass = response.message === expectedResponse.message;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test13();

// ------------------------ SUMMARY ------------------------
const failedTests = tests.filter((test) => !test);
if (!failedTests.length) {
  console.log(`Congratulations! ${tests.length} test passed ✅`);
} else {
  console.log('Oooooh! Your code sucks 🤢');
  tests.forEach((test, index) => {
    if (!test) {
      console.log(`The test number ${index + 1} failed ❌`);
    }
  });
}
