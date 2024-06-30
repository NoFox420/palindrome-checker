const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const wordToCheck = [];

const findPalindrome = (array, input) => {
  const revArray = [...array].reverse();

  const result = array.every(function (value, index) {
    return value === revArray[index];
  });

  if (result) {
    let msgtru = `${input} is a palindrome`;
    displayOutput(msgtru);
  } else {
    let msgfal = `${input} is not a palindrome`;
    displayOutput(msgfal);
  }
};

const checkForPalindrom = () => {
  const string = textInput.value;
  if (string === "") {
    alert("Please input a value");
  } else {
    convertInput(string);
  }
};

const convertInput = (input) => {
  const lowerInput = input.toLowerCase();
  const regExp = lowerInput.replace(/[^a-z0-9]/g, "");
  console.log(regExp);
  const splittedInput = regExp.split("");
  findPalindrome(splittedInput, input);
};

const displayOutput = (str) => {
  result.innerText = str;
  result.style.display = "inline";
};

checkBtn.addEventListener("click", checkForPalindrom);
