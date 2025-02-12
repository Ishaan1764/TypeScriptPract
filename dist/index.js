"use strict";
let x = 1;
console.log(x);
function PrintHello(firstName) {
    console.log("hello world!" + firstName);
}
PrintHello("Sallu DOn");
function add(x, y) {
    console.log("sum is: ", x + y);
}
add(3, 4);
function isLegal(age) {
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
}
let ans = isLegal(17);
console.log("Person is legal: " + ans);
function giveUserData(user) {
    console.log(user.age);
}
let person = {
    name: "Sallu",
    age: 54,
    greet: () => {
        return "hi";
    }
};
console.log(person.greet());
//!Class implementing an interface.
class Manager {
    constructor(name, age, greet) {
        this.name = name,
            this.age = age,
            this.greet = greet;
    }
}
let user2 = new Manager("sallu", 45, () => { return "hi"; });
console.log(user2.age);
console.log(user2.greet());
console.log(user2.name);
// ab jo dono mei exist krega sirf vo he displau hoga.
//it will through error when we log age or permission.
// Typesd can bn used for unioin or intersections biut not the interfaces.
function greet(users) {
    console.log(users.name);
}
class Insaan {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newInsaan = new Insaan("Sallu", 99);
console.log(newInsaan.name);
const us = {
    name: "sallu",
    age: 55,
    phone: 555
};
// &-> we have to have all the fields but not the repeated onces.
//^ |-> we can have either fields og any one or both. but not random selections between them. ek ke properties puurin aane chheye dusre ke chahe adhi kyuo ns hoe 
//* ARRAYS in TS:
const getMax = (nums) => {
    let maxVal = -1000000000;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
        }
    }
    return maxVal;
};
console.log(getMax([1, 2, 3, 4, 5, 6]));
function filterUsers(user) {
    let ans = [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].age < 18) {
            return false;
        }
        else {
            ans.push(user[i]);
        }
    }
    return ans;
}
console.log(filterUsers([
    {
        name: "salluDOn",
        age: 55
    }
]));
function addMArks(st1, st2) {
    return st1.marks + st2.marks;
}
console.log(addMArks({ name: "sallu", marks: 55 }, { name: "DON", marks: 55 }));
function updateUsr(upadteProps) {
    // upadteProps.name : use any wher like this .
}
function updateUsrPartial(upadteProps) {
    // upadteProps.name : use any wher like this .
}
const read = {
    name: 'sallu',
    api_key: 'sallu ke key '
};
const u = {
    "asc": { name: 'ds', age: 45 },
    "sdvsd": { name: 'ds', age: 45 }
};
const usss = new Map();
usss.set("sd", { name: 'a', email: 'b', pass: 'd' });
const use = usss.get("sd");
console.log(use);
//ZOD infer: Zod is used inbacked to check the correct credential formalts:
// z is importesd as ZOd
/*
    const userProfile=z.object({
    name:z.string().min(1)
    ......
})

type FinalSchema=z.infer<typeof userProfile>

app.put("/user",(req,res)=>{
    const {success}= userProfile.safePArse(req.body);
    const updateBody:FinalSchema=req.body // used here
})
*/
