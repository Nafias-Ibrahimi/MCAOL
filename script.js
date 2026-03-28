// function primesUpTo(limit){
//     const isPrime=Array(limit +1 ).fill(true);
//     isPrime[0]=isPrime[1]=false;
    
//     [...Array(limit +1).keys()].forEach(i=>{
//         if(i * i <=limit && isPrime[i]){
//             for(let j=i*i; j<=limit; j+=i){
//                 isPrime[j]=false;
//             }
//         }
//     });
//     return isPrime
//   .map((value, index) => value ? idx : null)   
//   .filter(x => x !== null); 
// }
// console.log(primesUpTo(10000));
// const insertionSort = (arr) => {
//     arr.forEach((key, i) => {
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = key;
//     });
//     return arr;
// }

// console.log(insertionSort([5, 2, 4, 6, 1, 3]));






