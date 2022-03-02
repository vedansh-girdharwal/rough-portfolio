/* console.log("javascript😁");

var firstExample = document.getElementById('IdDom');

console.log(firstExample.innerText);
const handle = ()=>{
    firstExample.innerText = "Let's change it";
}
console.log(firstExample.innerText);
let second = document.getElementsByClassName('fsjs');
console.log(second);


for (let index = 0; index < second.length; index++) {
    if(index==2){
        function secondClick(){
            second[index].innerText="3rd element";
            console.log(second[index].innerText);
        }
    }
    console.log(`This is ${index} element`,second[index]);
}
let tagExample = document.getElementsByTagName("div");
console.log(tagExample);

let elementExample = document.createElement('p');
elementExample.innerText="This is created through javascript";
firstExample.appendChild(elementExample);*/

let arr = ["Vedansh",7,NaN,56n];
console.log(arr);
console.log(arr.length);
console.log(arr.reverse());

let arr2 = ["Vedansh", "India", "Wolf","Football"]
console.log(arr.concat(arr2));

let iterable = arr.entries();
// console.log(iterable.next().value);
// console.log(iterable.next().done);
for(let item of iterable){
    console.log(item);
}
console.log(...arr2);/*spread*/
console.log(arr2.slice(3));
console.log(arr2.slice(1,3));
console.log(arr2.slice(-1));
console.log(arr2.slice(-2));
console.log(arr2.slice(-1,3));
console.log(arr2.slice(-1,-3));
console.log(arr2.slice(1,-2));

const callback =(item)=>item==="test";
console.log(arr.every(callback));/*returns true if and only if every element matches the consition*/

console.log(arr2.splice(2,1,"Lion"));
console.log(arr2.splice(2,1,"Lion", "Tiger"));

//Array Map
//executes a callback function on every element of array and returns an array
// const callbackfunc = item => item;
function callbackfunc(item){
    console.log(item);
    return "This is running";
}
console.log(arr2.map(callbackfunc));

/*filter 
filter runs a callback on every element of the array and returns an array of elements that return true for the callback*/
console.log(arr2.filter(item=>item=="Lion"));
var arr3 = [11,7,8,1,12];
console.log(arr3.filter(item=>item>5));

//sort
function call(a,b){
    return a-b;
}
console.log(arr3.sort(call));
console.log(arr3.filter(item=>item>5).sort((a,b)=>b-a));

//reduce
//reduces array into a single value based on the 2 parameters. it takes two parameters also, callback function and optionally the starting point
console.log(arr3.reduce((accumulator, item)=>accumulator+item,0)); /*accumulator we have given is 0*/

//objects
let obj = {
    name:"Vedansh",
    age:23,
    favcolor:"white",
    fingers:10,
}
console.log(obj.name);
console.log(obj.favcolor);

obj2={
    address:{
        street:'adarsh colony',
        city:'Muzaffarnagar'
    },
    semesters:[1,2,3,4,5,6,7]
}
console.log(obj2.address);
console.log(obj2.semesters);

let detail = [
    {
        name:"vedansh",
        favGame:"Injustice",
        rank:"Almighty",
        number:4
    },
    {
        name:"satvik",
        favGame:"Ludo",
        rank:"pro",
        number:12
    },
    {
        name:"kanak",
        favGame:"DOTA",
        rank:"expert",
        number:6
    },
    {
        name:"shreshtha",
        favGame:"FreeFire",
        rank:"Conquerer",
        number:5
    },
    {
        name:"varun",
        favGame:"PUBG",
        rank:"Master",
        number:20
    },
];

let detail2 = detail.map(item=>{return {name:item.name,favGame:item.favGame,number:item.number}}).sort((a,b)=>a.number-b.number);
console.log(detail2);

let user=[
    {
        id:1,
        name:"Vedansh",
        leaves:[
            {
                id:1,
                reason:"Party",
                dates:["2022-02-25","2022-02-24"]
            },
            {
                id:2,
                reason:"Movie",
                dates:["2022-02-21","2022-02-22","2022-02-23"]
            }
        ]
    },
    {
        id:2,
        name:"Satvik",
        leaves:[
            {
                id:3,
                reason:"Party",
                dates:["2022-02-25","2022-02-24"]
            },
            {
                id:4,
                reason:"Movie",
                dates:["2022-02-21","2022-02-22","2022-02-23"]
            }
        ]
    },
    {
        id:3,
        name:"Shreshtha",
        leaves:[
            {
                id:5,
                reason:"Party",
                dates:["2022-02-25","2022-02-24"]
            },
            {
                id:6,
                reason:"Movie",
                dates:["2022-02-21","2022-02-22","2022-02-23"]
            }
        ]
    },
    {
        id:4,
        name:"Kanak",
        leaves:[
            {
                id:7,
                reason:"Party",
                dates:["2022-02-25","2022-02-24"]
            },
            {
                id:8,
                reason:"Movie",
                dates:["2022-02-21","2022-02-22","2022-02-23"]
            }
        ]
    },
    {
        id:5,
        name:"Sweta",
        leaves:[
            {
                id:9,
                reason:"Party",
                dates:["2022-02-25","2022-02-24"]
            },
            {
                id:10,
                reason:"Movie",
                dates:["2022-02-21","2022-02-22","2022-02-23"]
            }
        ]
    }
]
//write a function that gives all the users who have a taken leave between two given dates, including them with the details of leaves



var d = new Date();
function toData(a=new Date(d.getFullYear(),d.getMonth(),1), b=new Date(d.getFullYear(),d.getMonth()+1,0)){
    
    let result = user.map(item=>{
            return {
                id:item.id,
                name:item.name,
                leaves:item.leaves.map((it)=>{
                    let date=it.dates.filter(i=>(new Date(a)<new Date(i))&&(new Date(b)>new Date(i)));
                    if(date.length>0){
                        return {
                            dates:it.dates.filter(i=>new Date(a)<new Date(i)&&new Date(b)>new Date(i)),
                            id:it.id,
                            reason:it.reason
                        };
                    }
                    
                    else{
                        return null;
                    }
                }).filter(x=>!!x)
            };
        }
    );
    return result;
    
}
console.log(toData("2022-02-24"));


// console.log(user.map(item=> item.leaves.map(it=> it.dates.filter(i=>new Date(i)>new Date("2022-02-24")))));

// let leaves=[
//     {
//         id:1,
//         name:"23",
//         date:["2022-02-22","2022-02-23","2022-02-24","2022-02-25","2022-02-26"]
//     },
//     {
//         id:2,
//         name:"24",
//         date:["2022-02-22","2022-02-23","2022-02-24","2022-02-25","2022-02-26"]
//     },
//     {
//         id:3,
//         name:"25",
//         date:["2022-02-22","2022-02-23","2022-02-24","2022-02-25","2022-02-26"]
//     }
// ]
// console.log(leaves.map(it=>it.date.filter(item=>new Date(item)>new Date("2022-02-22"))));

