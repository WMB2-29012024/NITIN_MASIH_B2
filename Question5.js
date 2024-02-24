// Branch Name: B2_W4_D5
      
/* Question 5: Write a for loop to find and log the index of largest element in the array.
*/

const numArr = [10, 2, 30, 4, 50];

let largetNum = numArr[0]

for(let i = 0;i<=numArr.length-1;i++){
if(numArr[i]>largetNum){
      indexOfLargestNum = i
      largetNum=numArr[i]
   
}
}

console.log( indexOfLargestNum);