
function sum(...num) {
    const answer = nums.reduce((acc,currentValue)=>{
         return acc + currentValue
    });
    return answer;
}

function sum2() {
    let args = Array.prototype.slice.call(arguments);
    const answer = args.reduce((acc,currentValue)=>{
         return acc + currentValue;
    });
    return answer;
}

// console.log(sum2(1,2,3,4,5));
Function.prototype.myBind1 = function(context,...initalArgs){

    const originalFunction = this;

    return function(...extraArgs) {
        originalFunction.apply(context,[...initialArgs,...extraArgs]);
    }
}
Function.prototype.myBindArguments = function(context){
    const fn = this;
    const bindArgs = Array.from(arguments).slice(1);
    console.log(bindArgs)
    return function _boundFn() {
      const callArgs = Array.from(arguments);
      return fn.call(context,...bindArgs,...callArgs);
    };
  };


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
//   const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");
// const newCatFunction = markov.says.myBindArguments(pavlov, "meow",'vincent');
// newCatFunction();
// // markov.says.myBindArguments(pavlov, "meow")('vincent','anthony');
// // markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args

// // Pavlov says meow to Kush!
// // true

// // // no bind time args (other than context), call time args are "meow" and "a tree"
// // markov.says.myBind1(pavlov)("meow", "a tree");
// // // Pavlov says meow to a tree!
// // // true

// // // bind time arg is "meow", call time arg is "Markov"
// // markov.says.myBind1(pavlov, "meow")("Markov");
// // // Pavlov says meow to Markov!
// // // true

// // // no bind time args (other than context), call time args are "meow" and "me"
// // const notMarkovSays = markov.says.myBind1(pavlov);
// // notMarkovSays("meow", "me");

// Function.prototype.myBindCall = function(context,...initialArgs) {
//     const originalFunction = this;
//     return function(...aditionalArgs) {
//         return originalFunction.call(context, ...initialArgs,...aditionalArgs );
//     }
// }

function curriedSum(num) {
    numArray = [];
    return function _sum(num1) {
        numArray.push(num1)
        if (numArray.length ===num){
            return numArray.reduce((acc,currentValue)=>{
                return acc + currentValue});
        } else {
            return _sum;
        }
    }
}

// const test = curriedSum(4);

// console.log(test(1)(2)(3)(4));

Function.prototype.curry = function(numArgs) {
    const args = [];
    const originalFunction =this;

    return function _sum(num){
        args.push(num);
        if (args.length === numArgs){
            originalFunction.apply(null,args);
        } else {
            return _sum;
        }
    }
    return _sum;
}
// collect arguments 
//check if arguments passed are equal to numArgs 
// if arguments not enough, return function that is collected the arguments,
// if arguments are enough, return function with new args applied 
