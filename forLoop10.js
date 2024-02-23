
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function num (arr){
  for(i = 0; i <= arr.length-1;i++){
        for ( j = i; j <= arr.length -1;j++) {
          console.log(arr[j]);  
        }
  }
}
num(numArr);