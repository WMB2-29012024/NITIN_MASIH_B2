// Branch Name: B2_W4_D5
      
/* Question 16: Write a for loop to find the index of a specific element in the array.
*/

const arr = ["apple", "banana", "orange", "grape"];
const target = "orange";
 let targetIndex = -1
for(let i = 0;i<=arr.length-1;i++){
      if(arr[i]=== target){
         targetIndex =i
      
      }
}
console.log(targetIndex);
