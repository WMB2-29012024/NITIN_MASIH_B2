const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function num(arr) {
  const finalTuple = [];
  for ( i=0; i  <= arr.length - 1; i++) {
   const singleTuple = []
   if(i===0) singleTuple.push(arr[i])
   else if(i === arr.length-1) singleTuple.push(arr[i])
   else{
singleTuple.push(arr[i])
singleTuple.push(arr[i+1])
}
finalTuple.push(singleTuple)
  }
  return finalTuple;
}
console.log(num(numArr));