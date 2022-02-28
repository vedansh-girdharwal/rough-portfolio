var my_name =   "Vedansh "+"Girdharwal";
var my_number = 97;
var my_bool = true;
var my_char = 'V';
var my_check;
var my_float = 9.8;
var my_null = null;
var my_obj = {};
var my_symb = Symbol("This is a symbol");
var my_nan = NaN;
var my_exp = 13446365989879456n;

console.log(typeof my_name);
console.log(typeof my_number);
console.log(typeof my_bool);
console.log(typeof my_char);
console.log(typeof my_check);
console.log(typeof my_float);
console.log(typeof my_null);
console.log(typeof my_obj);
console.log(typeof my_symb);
console.log(parseInt('Joker'));
console.log(typeof NaN);
console.log(typeof my_exp); /*bigint*/
console.log(35/10);
console.log(5!=5 && 6==6);
console.log(5>3||3>5);
console.log("hey "-"baby"); /*NaN*/
console.log("hey "*2); /*NaN*/
console.log(typeof (2+"hey ")); /*string*/
console.log(6==6); /*true*/
console.log(6=="6"); /*true*/
console.log(6=='6'); /*true*/
console.log(6==='6'); /*false*/
console.log(6===6); /*false*/
console.log(typeof('23'-10));
console.log(typeof('23'-'10'));
// console.log(1233445n-[]);

/*ternary 
condition?statement(if true):statement(if false)*/
5>6?console.log("condition true"):console.log("condition false");
if(0){
    console.log("true value")
} else{
    console.log("false value")
}
if(null){
    console.log("true value")
} else{
    console.log("false value")
}
if(NaN){
    console.log("true value")
} else{
    console.log("false value")
}
if(""){
    console.log("true value")
} else{
    console.log("false value")
}
if(false){
    console.log("true value")
} else{
    console.log("false value")
}
if([""]){
    console.log("true value")
} else if([]){
    console.log("also true")
} else{
    console.log("false value")
}

for (let i = 0; i < 10; i++) {
    console.log("the value of index is ",i);
    
}

var a = ["sachin","Indian",3.14,8n];
for (i = 0; i < a.length; i++) {
    // console.log(a[i]);
    console.log(`The elements in array is  
     ${a[i]}`);
}

a.forEach(function(element){
    console.log(element);
});

a.forEach(element => {
    console.log(element);
});

function test1(){
    console.log("This is the function1 call");
    return "Vedansh";
};
test1();

(function(){
    console.log('anonymous function');
})();

var test3 = () =>{
    console.log('This is an arrow function call');
}
test3();
console.log(test1());
console.log(typeof(test3));

var greet = "hello";
var test4 = () => `${greet} Vedansh bhaiya`;
console.log(test4());

function test5(){
    console.log("console statement");
    return "return statement";
}
test5();
console.log(test5());

console.log("Vedansh".split("d"));

var sayMyName = (myName)=> `Hello! I am ${myName}`
console.log(sayMyName("Vveeddaannsshh"));

var sub = (a,b)=> a-b;
console.log(sub(35,34));

var celtofah = (cel, mul=1.8,add=32)=> (cel*mul) + add;
var fah = celtofah(0);
console.log(fah);

var day =(val)=>{
    switch(val=9){
         
        case 0: return 'Sunday';
        break;
        case 1: return 'Monday';
        break;
        case 2: return 'Tuesday';
        break;
        case 3: return 'Wednesday';
        break;
        case 4: return 'Thursday';
        break;
        case 5: return 'Friday';
        break;
        case 6: return 'Saturday';
        break;
        case 9: return `we dont have ${val+1} days in a week`;
        break;
        default : return "You didn't pass any day silly";
        break;
    }
}
console.log(day(9));


this_is_a_function();/*it will execute because the function doesn't have any operator and it is defined in the memory creation phase*/
// this_is_a_function2();/*It will show the error that it is not a function because the var doesn't has any value till now */
// this_is_a_function3();/*same as above*/
console.log(testThis);

var testThis = "Hitesh";
function this_is_a_function(){
    console.log("First function");
}
var this_is_a_function2 = function(){
    console.log("Second function");
}
var this_is_a_function3 = ()=>{
    console.log("Third function");
}

// Timing function
/*setInterval(() => {
   console.log("This is an interval"); 
   
}, 5000);*/

/*setTimeout(() => {
   console.log("This is a timeout"); 
}, 10000);*/

function time(){
    let i=0;
    setInterval(()=>{
        i++;
        if(i<6){
            console.log("ahh");
        }
        else{
            clearInterval();
        }
    },1000);
}
time();

// Exception handling
/* var errorHandler = () =>{
    // console.log
    // send error to developer
}
var getAll = async()=>{
    try{

    } catch(error){

    }
}
getAll(); */