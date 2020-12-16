const result = [];
result.length = 3; //n=2

const allResults = []; 
// let resultlength = 3; //n=2

function combinations(input, len, start) {
  if(len === 0) {
    // console.log(result.join(",") ); //process here the result
    // let element: Array<Number>

    // let element=[];
    // element.push(result);

    // if(result.split(',').length===3){

    //     allResults.push(result);
    // }

    


    // console.log('...result: ', result);
    // console.log('...result.length: ', result.length);

    // allResults.push(result);


    // const nums = a.split(',').map(x => parseInt(x, 10));

    // const nums = result.map(x => console.log('parseInt(x, 10): ', parseInt(x, 10)));

    const sum = result.reduce(function(a, b){
        return a + b;
    }, 0);

    console.log('sum: ', sum);


    return;
  }
  for (let i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combinations(input, len-1, i+1 );
  }
}

// const array = ["apple", "banana", "lemon", "mango"];   
const original =[2,3,1,5,4,-4,-3,-2]; 
combinations( original, result.length, 0);


console.log('allResults: ', allResults);



// const result = [];
// // result.length = 3; //n=2
// let resultlength = 3; //n=2

// function combine(input, len, start) {
//   if(len === 0) {
//     // console.log( result.join(" ") ); //process here the result
//     return;
//   }
//   for (let i = start; i <= input.length - len; i++) {
//     result[resultlength - len] = input[i];
//     combine(input, len-1, i+1 );
//   }
// }

// const array = ["apple", "banana", "lemon", "mango"];  

// const original =[2,3,1,5,4,-4,-3,-2];
// combine( original, resultlength, 0);

// const result = [];
// let size = 3; //n=2

// function combinations(allNums, len, start) {
//   if(len === 0) {
//     return;
//   }
//   for (let i = start; i <= allNums.length - len; i++) {
//     result[size - len] = allNums[i];
//     combinations(allNums, len-1, i+1 );
//   }
// }
// const original =[2,3,1,5,4,-4,-3,-2];
// combinations( original, size, 0);