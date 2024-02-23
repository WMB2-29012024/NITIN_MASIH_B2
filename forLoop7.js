
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function num (arr){
      newArr = []
      for(i=arr.length-1;i>=0;i-=4){
      newArr.push(arr[i])

      }
     return newArr;
}

console.log(num(numArr));