function calc(num1, num2, symbol) {
  if (typeof num1 !== 'number') {
    throw new Error('{"status": "1", "message": "The first argument must be a number"}');
  } else if (num1 < 0) {
    throw new Error('{"status": "2", "message": "The first argument must be a positive number"}');
  } else if (num1 % 1 !== 0) {
    throw new Error('{"status": "3", "message": "The first argument must be a integer number"}');
  }

  if (typeof num2 !== 'number') {
    throw new Error('{"status": "4", "message": "The second argument must be a number"}');
  } else if (num2 < 0) {
    throw new Error('{"status": "5", "message": "The second argument must be a positive number"}');
  } else if (num2 % 1 !== 0) {
    throw new Error('{"status": "6", "message": "The second argument must be a integer number"}');
  }

  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num1 / num2 === Infinity) {
        throw new Error('{"status": "7", "message": "The dividend cannot be zero"}');
      }

      if (Number.isNaN(num1 / num2)) {
        throw new Error('{"status": "8", "message": "In a division, both args cannot be zero"}');
      }

      return num1 / num2;
    default:
      throw new Error('{"status": "9", "message": "The third argument must be a valid symbol"}');
  }
}

export default calc;
