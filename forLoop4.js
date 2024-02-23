const numArr = [1,2,3,4,5,6,7,8,9,10,11]

function num (arr){
      let alternate = "";

      for(let i=0;i<arr.length;i=i+2){
            alternate=alternate+arr[i];
      }
      return alternate
}

console.log(num(numArr))