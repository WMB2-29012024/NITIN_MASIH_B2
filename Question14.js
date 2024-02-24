// Branch Name: B2_W4_D5
      
/* Question 14: Write a for loop to log elements that start with the letter "a".
*/

const strArr = ["banana", "apple", "orange", "grape", "kiwi"];

for(let i = 0;i<=strArr.length-1;i++){
      if(strArr[i].startsWith("a")){
            console.log(strArr[i]);
      }
}