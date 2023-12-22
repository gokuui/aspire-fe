// returns a 16 digit random card number
function getRandomCardNumber() {
  // for now generating random 16 digit number
  // but i heard there is some algo behind credit card number generation
  return getRandomString(16);
}

// returns a 3 digit random card cvv
function getRandomCvv() {
  return getRandomString(3);
}

function getRandomString(length) {
  let randomStr = "";

  while (length > 0) {
    randomStr += Math.floor(Math.random() * 9);
    length--;
  }

  return randomStr;
}

export { getRandomCardNumber, getRandomCvv };
