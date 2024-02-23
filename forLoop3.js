const strArr = "asdasdzxczxc";
function reversed(str) {
  reversedStr = "";
  for (i = str.length - 1; i >= 0; i -= 1) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reversed(strArr))
