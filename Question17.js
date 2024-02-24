// Branch Name: B2_W4_D5

/* Question 17: Write a for loop to check if all elements in the array are positive numbers.
 */

const arr = [10, 20, -5, 30, 40];
let allPositive = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 0 || isNaN(arr[i])) {
    allPositive = false;
    break;
  }
}

if (allPositive) {
  console.log("All elements in the array are positive numbers.");
} else {
  console.log("Not all elements in the array are positive numbers.");
}
