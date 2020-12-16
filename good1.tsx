const result:Array<number> = [];
result.length = 3;
let found = false;

function combinations(input:Array<number>, len:number, start:number, firstNumber:number) {
  if(len === 0) {

    const sum = result.reduce(function(a, b){
        return a + b;
    }, 0);

    // console.log('sum: ', sum);

    if(firstNumber === sum){

      // console.log('firstNumber: ', sum);
      // return "true";

      found = true;
      // break;
    }

    // return "false";
    // continue;
    return;
  }
  for (let i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combinations(input, len-1, i+1,firstNumber );
  }
}

function ThreeSum(arr) { 

  const firstNumber = arr[0];

  const otherNumber = arr.slice(1, arr.length);
  const  mySet = new Set(otherNumber);


  const mySet2 = Array.from(mySet);
 combinations(mySet2, result.length, 0,firstNumber);



  return found;

}
   
// keep this function call here 
// @ts-ignore
// console.log(ThreeSum(readline()));


function LetterCount(str: string) { 

    // code goes here  

    
    const words = str.split(' ');

    console.log('words: ', words);
    return str; 
  
  }

//   console.log(LetterCount(readline()));


  console.log(LetterCount("Today, is the greatest day ever!"));