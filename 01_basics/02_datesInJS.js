//Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(Date().toString());

let myCreateDate = new Date(2023,0,23); // months start from 0 
// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); //in millisecond

// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // divide by 1000 to convert into seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() +1) // +1 to get exact value
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday : "long", 
})

