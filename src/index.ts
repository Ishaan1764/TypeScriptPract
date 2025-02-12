let x: number=1;
console.log(x);

function PrintHello(firstName: string ){
    console.log("hello world!"+firstName)
}

PrintHello("Sallu DOn");

function add(x: number,y: number){
    console.log("sum is: ",x+y);
}
add(3,4)


function isLegal(age:number){
    if(age<18){
        return false
    }else{
        return true
    }
}

let ans: boolean=isLegal(17);

console.log("Person is legal: "+ ans);


interface User{
    name: string,
    age: number,
    job:{
        title: string,
        salary:number
    }
}

function giveUserData(user:User){
    console.log(user.age)
}
// giveUserData({
//     name:"oishu",
//     age:56,
//     job:{
//         title:"IT",
//         salary:5534343131
//     }
// })



//!Interfaces

interface People{
    name:string,
    age:number,
    greet:()=>string,
}

let person:People = {
    name:"Sallu",
    age:54,
    greet:()=>{
        return "hi"
    }
}

console.log(person.greet())


//!Class implementing an interface.

class Manager implements People{
    name: string;
    age: number;
    greet: () => string;

    constructor(name:string,age:number,greet:()=>string){
        this.name=name,
        this.age=age,
        this.greet=greet
    }
}

let user2= new Manager("sallu",45,()=>{return "hi"});

console.log(user2.age)
console.log(user2.greet())
console.log(user2.name)



//!interfaces vs tyes
//* create two types  User nad Admin
//* cretae a function that either takes USer or admin as an input and return a str9ng saying Hello,[name]

interface Admin{
    name:string,
    permissions:string
}

interface Users{
    name:string,
    age:number
}

type UserOfType= Admin | Users
// ab jo dono mei exist krega sirf vo he displau hoga.
//it will through error when we log age or permission.
// Typesd can bn used for unioin or intersections biut not the interfaces.
function greet (users:UserOfType){
    console.log(users.name)
}


type SumInput = string | number

// function adding(a:SumInput,b:SumInput):SumInput{
//     return a+b;
// }

//  if we have to give typoe to an object then we use interfaCES,.
//example:
interface User{
    name:string,
    age:number,
    address?:{//  ? means address uis an option fiels.(//! ya to adress define he na kro agar kr rehe ho then you have to giv eall the fiels because fieldsd are niot optional but onlyu addrwess i soptional)
        city:string,
        country:string,
        pincode:number
    };
}

// function isLegaling(user:User):boolean{
//     return user.age > 18
// }

// isLegaling

//? spl. property of interface is tyhat we can implemnt a Class.

interface Bnde{
    name:string,
    age:number,
    // greet:()=> string,
}

class Insaan implements Bnde{
    name: string;
    age: number;

    constructor(name:string,age:number){
        this.name=name;
        this.age= age;
    }
}

const newInsaan=new Insaan("Sallu",99);
console.log(newInsaan.name)



// wbhat is thje difference between using an Abstract class or an Interface:
// the key differnce is that we cannot have default implementation of functions in an interface.

//?types

type Emp={
    name:string,
    age:number
}

type Mng={
    name:string,
    phone:number,
    city:string
}

type EMpMng= Emp|Mng;

const us:EMpMng={
    name:"sallu",
    age:55,
    phone:555
}

// &-> we have to have all the fields but not the repeated onces.
//^ |-> we can have either fields og any one or both. but not random selections between them. ek ke properties puurin aane chheye dusre ke chahe adhi kyuo ns hoe 


//* ARRAYS in TS:
const getMax=(nums:number[])=>{
    let maxVal=-1000000000;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>maxVal){
            maxVal=nums[i]
        }
    }
    return maxVal
}

console.log(getMax([1,2,3,4,5,6]));

//! Given a list of users, filterout the usreers that are legal:


type Usersss={
    name:string,
    age:number
}

function filterUsers(user:Usersss[]){
    let ans:Usersss[]=[];
    for(let i=0;i<user.length;i++){
        if(user[i].age<18){
            return false
        }else{
            ans.push(user[i]);
        }

    }
    return ans
}

console.log(filterUsers([
    {
        name:"salluDOn",
        age:55
    }
])
)

//? these are not properties of a TYPE but TYPE is a set of INFINITE values that that we say properties. 


interface Student{
    name:string,
    marks:number
}

function addMArks(st1:Student,st2:Student):number{
    return st1.marks+st2.marks;
}

console.log(addMArks({name:"sallu",marks:55},{name:"DON",marks:55}))


//^ PICK: if u have to send a few arguments of the interface then it could be mor than5 or six and would make the functin look uglier
//* Also if ucahnge the datatype of any proper then also u have to change it every where.
//^For that we have Pick were we can simply set a TYPE that will hold the pick properties from the interface.

interface Usr{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
}

type Args= Pick<Usr, 'name'|'email'|'password'>

function updateUsr(upadteProps:Args){
    // upadteProps.name : use any wher like this .
}


//^PARTIAL: if we want the vakes to be optional too ->Marks All  optial :
type PartialArgs= Partial<Args>
function updateUsrPartial(upadteProps:PartialArgs){
    // upadteProps.name : use any wher like this .
}

//! If you want ke hum values interface ke andar vale change na kr pae then we can make them read onliy :

interface REad{
    name:string,
    api_key:string
}

const read:Readonly<REad>={
    name:'sallu',
    api_key:'sallu ke key '
}

// read.api_key="SDSVKD"// WILL GIVE ERROR THAT API IS READoinLY


//TODO:  record & map

// RECORD is a cleaner way to crete objects:

type US=Record<string,{age:number,name:string}>;
const u:US={
    "asc":{name: 'ds',age:45},
    "sdvsd":{name: 'ds',age:45}
}


//MAP:
type USSS={
    name:string,
    email:string,
    pass:string
}

const usss= new Map<string,USSS>();
usss.set("sd",{name:'a',email:'b',pass:'d'})
const use= usss.get("sd");
console.log(use)


//* EXCLUDE:++
type EventType ='click'| 'scroll' | 'mouseover';
type ExcludeEvent=Exclude<EventType,'click'>; //value with ExcludeEvent is scroll and mouseover


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
