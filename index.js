// bill input, tip input, number of people div, and per person total div
const billInp = document.getElementById("billTotalInput");
const tipInp = document.getElementById("tipInput");
const numPeople = document.getElementById("numberOfPeople");
const ppTotal = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let numberOfPeople = Number(numPeople.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInp.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInp.value) / 100;

  // get the total tip amount
  const tipAmount = bill * tipPercent;

  // calculate the total (tip amount + bill)
  const totalAmount = tipAmount + bill;
  //   console.log({ totalAmount });
  // calculate the per person total (total divided by number of people)
  const ppt = totalAmount / numberOfPeople;
  //   console.log({ ppt });
  // update the perPersonTotal on DOM & show it to user
  ppTotal.innerText = `$${ppt.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1;
  // update the DOM with the new number of people
  numPeople.innerText = numberOfPeople;
  // calculate the bill based on the new number of people
  calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  if (numberOfPeople <= 1) {
    alert("Hey! You cannot decrease the people less than 1");
    return;
  }
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  // decrement the amount of people
  numberOfPeople -= 1;
  // update the DOM with the new number of people
  numPeople.innerText = numberOfPeople;
  // calculate the bill based on the new number of people
  calculateBill();
};
