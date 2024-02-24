// Branch Name: B2_W4_D5

/* Question 3: Write a for loop to find and log the largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

let largestNum = numArr[0]

for (let i = 0; i <= numArr.length - 1; i++) {
      if(numArr[i] > largestNum){    largestNum = numArr[i]}
  
}
console.log(largestNum);