import React from "react";
import HomePage from './homePage/HomePage'

import HOC1 from './hocs/HOC1';
import HOC2 from './hocs/hoc2/HOC2';
import HOC3TZ from './hocs/hoc3TZ/HOC3TZ';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CraftsManHome from "./CraftsManHome/CraftsManHome";

export default function App() {

  console.log('__________ ThreeSum',ThreeSum([10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2]));

  console.log( "Result: ", LetterCount("Today, is the greatest day ever!"));


  return (
    <Router>
      <div>
        <nav>
          <ul>




            {/*<li>*/}
            {/*  <Link to="/about">About</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <Link to="/users">Users</Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*  <Link to="/home2">Home2222</Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*  <Link to="/hoc1">HOC1</Link>*/}
            {/*</li>*/}


            {/*<li>*/}
            {/*  <Link to="/hoc2">HOC2</Link>*/}
            {/*</li>*/}


            {/*<li>*/}
            {/*  <Link to="/hoc3TZ">HOC3TZ</Link>*/}
            {/*</li>*/}

            {/*<li>*/}
            {/*  <Link to="/">Home</Link>*/}
            {/*</li>*/}


          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

          <Route path="/hoc1">
            <HOC1 />
          </Route>




          <Route path="/hoc2">
            <HOC2 />
          </Route>

          <Route path="/hoc3TZ">
            <HOC3TZ />
          </Route>


          <Route path="/home2">
            <HomePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}


const result:Array<number> = [];
result.length = 3;
let found = false;

// function combinations(input:Array<number>, len:number, start:number, firstNumber:number) {
//   if(len === 0) {

//     const sum = result.reduce(function(a, b){
//         return a + b;
//     }, 0);

//     // console.log('sum: ', sum);

//     if(firstNumber === sum){

//       // console.log('firstNumber: ', sum);
//       // return "true";

//       found = true;
//       // break;
//     }

//     // return "false";
//     // continue;
//     return;
//   }
//   for (let i = start; i <= input.length - len; i++) {
//     result[result.length - len] = input[i];
//     combinations(input, len-1, i+1,firstNumber );
//   }
// }

// function ThreeSum(arr) {

//   const firstNumber = arr[0];

//   const otherNumber = arr.slice(1, arr.length);
//   const  mySet = new Set(otherNumber);


//   const mySet2 = Array.from(mySet);
//  combinations(mySet2, result.length, 0,firstNumber);



//   return found;

// }

// keep this function call here
// @ts-ignore
// console.log(ThreeSum(readline()));


// function LetterCount(str: string) {

//     // code goes here


//     const words = str.split(' ');

//     console.log('words: ', words);
//     return str;

//   }

//   console.log(LetterCount(readline()));


  // console.log(LetterCount("Today, is the greatest day ever!"));


let count = -1;
let finalString = "";

const checkletterCount = (letters: string) => {


  const mySet = new Set(letters);

  const mySet2 = Array.from(mySet);

  if (letters.length === mySet2.length) {

    //console.log('at here.. letters.length === mySet2.length', (letters.length === mySet2.length));
    // count = - 1;
    return;
  }
  else {
    // console.log('-------------');
    let counter2 = 0;



    /*

    # hasOwnProperty:

    const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false

# in && delete in javaScript:

const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log("car: ", car);

console.log('make' in car);
// expected output: true

delete car.make;

console.log("car: ", car);

if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log("car: ", car);

console.log(car.make);
// expected output: "Suzuki"


    */
    const cache: any = {}; // we will check if it has repeated letters


    for (var i = 0; i < letters.length; i++) {

      if (cache.hasOwnProperty(letters[i])) { // if letter was already seen
        counter2 = counter2 + 1;
      };
      cache[letters[i]] = 1; // if not, its the first time we see this letter, mark it
      // return false; // and continue
    }



    if ((counter2 >= 1) && (counter2 > count)) {
      // console.log()
      // console.log('count: ', count);
      // console.log('counter2: ', counter2);
      // console.log('counter2>count: ', counter2 > count);

      count = counter2;
      finalString = letters;
      // console.log('finalString:-------- ', finalString);
      // console.log('count: ', count);
    }


    // console.log('count:: ', count);

    // console.log('finalString: ', finalString);



  }

};

function LetterCount(str: string) {

  // code goes here


  const words = str.split(' ');

  words.map((x: string) => checkletterCount(x));
  // console.log(finalString);
  console.log('input string: ', str);
  return finalString;

}

//   console.log(LetterCount(readline()));



const checkThisNumberInAllNumbers = (oneNumber: number, allNumbers: [number]) => {

  const booleanResult = allNumbers.includes(oneNumber);
  return booleanResult;

};


// const result: Array<number> = [];
// result.length = 3;
// let found = false;


// invoker method: combinations(mySet2, result.length, 0, firstNumber);
// results.length: 3


function combinations(input: Array<number>, len: number, start: number, firstNumber: number) {
  if (len === 0) {
    const sum = result.reduce(function (a, b) {
      return a + b;
    }, 0);

    // console.log('sum: ', sum);
    if (firstNumber === sum) {
      // console.log('firstNumber: ', sum);
      // return "true";
      found = true;
      // break;
    }
    // return "false";
    // continue;
    return;
  }

  // // const original =[2,3,1,5,4,-4,-3,-2];
  // i =0; i<= 8-3; i++
  for (let i = start; i <= input.length - len; i++) {
    // result [3-3] =input [0];
    result[result.length - len] = input[i];
    // combinations(original, 3-1, 0+1, firstNumber)
    combinations(input, len - 1, i + 1, firstNumber);
  }
}


// console.log('allResults: ', allResults);

function ThreeSum(ints: Array<number>) {


  const firstNumber = ints[0];

  // slice: a slice of the company's revenue
  // slice : a share of something.

    // splice: a junction where two things ( as paper, film or magnetic tape) have been joined together.

    // "The couple got spliced on Hawaii"
    //  Perform a marriage ceremony
    // const months = ['Jan', 'March', 'April', 'June'];
    // months.splice(1, 0, 'Feb');

    // let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])


    // const otherNumber = ints.slice(1, ints.length);
  const otherNumber = ints.slice(1, ints.length-1);

  // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end


  const mySet = new Set(otherNumber);

  // const original =[2,3,1,5,4,-4,-3,-2];
  const mySet2 = Array.from(mySet);
  console.log("set Array: ", mySet2);


  // why I cannot pass the value as variable: like result.length= value =3;
  // because of recursion ofcourse but don't yet found the reason....


  combinations(mySet2, result.length, 0, firstNumber);

  let finalResult = found;

  // any 3 combinations total equals to the first element... of the original Input....

  console.log("Original input: ", ints );

  console.log('[any 3 combinations total equals to the first element... of the original] finalResult: ', finalResult);

  // return ints.length;

}

// keep this function call here
// console.log(ThreeSum(readline()));



/*

greatest
App.tsx:19 Today, is the greatest day ever!
*/



function Home() {


  // return <h2>Home</h2>;

   return <CraftsManHome/>;


}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


// 2nd Example: Nested Routing
// This example shows how nested routing works. The route /topics loads the Topics component, which renders any further <Route>'s conditionally on the paths :id value.import React from "react";


/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

     }
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

*/
