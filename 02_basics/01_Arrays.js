const arr = [1,2,3,4];
// console.log(arr[1]);

const arr1 = new Array(1,2,3,4);
// console.log(arr1[1]);

arr.push(5);
arr.push(6);
// console.log(arr);
arr.pop();
// console.log(arr);

arr.unshift(9);
// console.log(arr);
arr.shift();
// console.log(arr);

const newarr = arr.join();
console.log(typeof arr);
console.log(typeof newarr);
console.log(typeof arr1);