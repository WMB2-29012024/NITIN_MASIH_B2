// Branch Name: B2_W4_D5
      
/* Question 8: Write a for loop to log only odd numbers in the array.
*/

const numArr = [10, 2, 9, 8, 6, 12, 20, 30, 4, 50];

for(let i=0;i<numArr.length-1;i++){
      if(numArr[i]%2!==0){
            console.log(numArr[i]);
      }
}
