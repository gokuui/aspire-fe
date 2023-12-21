import { cardDetails } from "../mock/cardDetails";
import { getRandomCardNumber, getRandomCvv } from "../utils/cardUtils";
import sleep from "../utils/sleep";

// returns promise that resoves with card details
function getCardInfo() {
  // call API to get actual data here
  return new Promise((resolve) => {
    // adding delay to mimic network api call
    return sleep(1).then(() => resolve(cardDetails));
  });
}

// Freeze/Unfreeze card with given number
function freezeCard(cardNo, freeze) {
  // call freeze api and pass on the response.
  // in case of error, throw the error so that UI show appropriate toast messaging
  return Promise.resolve(true);
}

// delete card
function deleteCard(cardNo) {
  // call delete api and pass on the response.
  // in case of error, throw the error so that UI show appropriate toast messgaing
  return Promise.resolve(true);
}

function addNewCard(cardName) {
  // call the add api and return the created card info.

  return new Promise((resolve) => {
    resolve({
      name: cardName,
      cardNumber: getRandomCardNumber(),
      expiryDate: Date.now(),
      cvv: getRandomCvv(),
      freeze: false,
      id: Date.now(),
      recentTransactions: [],
      cardDetails: [],
    });
  });

  // incase of error, throw the error so that UI can show toast error
}

export { getCardInfo, addNewCard, deleteCard, freezeCard };
