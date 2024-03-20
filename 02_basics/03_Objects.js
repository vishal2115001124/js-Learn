// singleton object
 // :- when we declare object from consturctore it form singleton object
 Object.create


 //object literals

 const mySym = Symbol("key1");

 const JsUser = {
    name : "vishal",
    "fullname" : "Vishal Singhal",
    "full name" : "v s",
    [mySym] : "myKey1", //[Symbol(key1)]: 'myKey1'
    age : 48,
    email : "vishak@google.com",
    isLoggedin : false,
    lastLogginDays : ["monday","saturday"]
 };
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.fullname);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);



// JsUser.email = "vishal.chatpt.com";
// Object.freeze(JsUser);
// JsUser.email = "not gosing to cahnge anna";
// console.log(JsUser);



JsUser.greetings = function () {
   console.log("hello js user");
}

JsUser.greetingtwo = function () {
   console.log(`hello js user, ${this.name} `);
}

// console.log(JsUser.greetings);  //[Function (anonymous)]
// console.log(JsUser.greetings()); 

// console.log(JsUser.greetingtwo()); 

