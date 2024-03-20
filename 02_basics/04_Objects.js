//singleton
const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Vishal",
            lastName : "Singhal"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "c" , 4 : "d"};

const obj3 = {obj1 , obj2}; // it will create a problem of obj into obj
// console.log(obj3);

const obj4 = Object.assign({},obj1,obj2) //{}-> source , and other as target who get into the source
// console.log(obj4);

const obj5 = {...obj1,...obj2};
// console.log(obj5);

const users = [
    {
        id : 1,
        email : "vishal.com"
    },
    {        
        id : 2,
        email : "vishaasl.com"
    },
    {        
        id : 3,
        email : "vishaqwql.com"
    }
]

// console.log(users[1].email);



// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));