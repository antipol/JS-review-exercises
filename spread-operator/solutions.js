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
//Filtering every other index number, reduce every other num to one sum
const sumEveryOther = (...args) => [...args].filter((num, i) => i % 2 === 0).reduce((acc, cur) => acc + cur);

console.log(sumEveryOther(2, 2, 3, 4, 6, 10));
//11
//(2 + 3 + 6)


//6. only uniques
const onlyUniques = (...args) => {
  const uniqueArr = [];
  args.forEach(item => uniqueArr.includes(item) ? uniqueArr : uniqueArr.push(item))
  return uniqueArr;
}

console.log(onlyUniques('cat', 'cat', 'dog', 'pig'));
//[ 'cat', 'dog', 'pig' ]
console.log(onlyUniques(1, 4, 7, 1, 2, 7, 4));
//[ 1, 4, 7, 2 ]


//7. Combine all arrays
const combineAllArrays = (...arrays) => [].concat(...arrays)

console.log(combineAllArrays([2, 6, 71, -100], ['cat', true, 23], [false, 234]));


//8. Square and sum
const squareAndSum = (...args) => args.map(item => item * item).reduce((acc, cur) => acc + cur);

console.log(squareAndSum(2, 5, 10));
//129
