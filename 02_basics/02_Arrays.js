const arr1 = [1,2,3];
const arr2 = [4,5,6];

// arr1.push(arr2); // it makes arr2 another element like 1,2,3 but in this element more are present

// console.log(arr1);         // [ 1, 2, 3, [ 4, 5, 6 ] ]
// console.log(arr1[3][1]);   //5

const arr3 = arr1.concat(arr2);
// console.log(arr3);         //[ 1, 2, 3, 4, 5, 6 ]

const all_arr = [...arr1,...arr2]; //can add more than two arrays so we prefer it  
// console.log(all_arr);         //[ 1, 2, 3, 4, 5, 6 ]

const arr4 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const arr5 = arr4.flat(Infinity); // here in place of infinity we can give no. also we it repsents the depth of array as,[[[[[[]]]]]]
// console.log(arr5);           // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("Vishal")); //false
// console.log(Array.from("Vishal")); //[ 'V', 'i', 's', 'h', 'a', 'l' ]
// console.log(Array.from({name : "Vishal"})) //intresting case  // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1,score2,score3));   //[ 100, 200, 300 ]

