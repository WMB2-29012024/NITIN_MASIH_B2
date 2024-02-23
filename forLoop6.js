
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function num (arr){
  for(i=arr.length-1; i>=0; i=i-2){
    console.log(arr[i]);
  }
}

num(numArr)