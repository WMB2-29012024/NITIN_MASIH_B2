// Branch Name: B2_W4_D5
      
/* Question 4: Write a for loop to find and log the smallest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

let smallestNum = numArr[0]

for(let i =0;i<=numArr.length-1;i++){
 if( numArr[i] < smallestNum){smallestNum = numArr[i]}
  
}

console.log(smallestNum);