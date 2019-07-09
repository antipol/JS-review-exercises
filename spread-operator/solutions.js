//1. Function that takes any amount of arguments, return sum
const sumOfArgs = (...args) => {
  const sum = args.reduce((acc, cur) => acc + cur);
  console.log(sum);
}

sumOfArgs(1, 2, 3, 4)
//10


//2. addOnlyNums
const addOnlyNums = (...args) => args.filter(item => typeof item === 'number').reduce((acc, cur) => acc + cur);

console.log(addOnlyNums(1, 2, 3, 4, 'cat', 'dog', 5));
//15


//3. Count the arguments
const countTheArgs = (...args) => args.length;

console.log(countTheArgs(1, 3, 'cat', true, true));
//5


//4. Combine two arrays
const combineTwoArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(combineTwoArrays([1, 3, 'dog'], [1, 'elephant']));
//[ 1, 3, 'dog', 1, 'elephant' ]


// 5. Sum every other
const sumEveryOther = (...args) => [...args].filter((num, i) => num[i]);
console.log(sumEveryOther(2, 2, 3, 4, 6, 10));


















//
