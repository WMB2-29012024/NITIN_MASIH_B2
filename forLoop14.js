// There are 2 different arrays, write a for-loop, that:

// starts from 0th index, on array one,
// matches all the elements of the array two,
// if any element matches, logs true, and continue to next element
// once all the elements are looped on array 2, go to next element in array 1, then continue from step 1., 


const numArr1 = [1, 2, 3, 4, 5]
const numArr2 = [6, 7, 8, 9, 10, 11, 12,1]

for( let i=0;i<=numArr1.length-1;i++){
     for(let j=0;j<=numArr2.length-1;j++){
      // numArr1[i]===
      // console.log(numArr1[i], numArr2[j])
      if(numArr1[i]===numArr2[j]){
            console.log(true)
      }
     }}