
function Task1(min,max){
    var rand=min+Math.random()*(max-min);
    return rand;
}
const resultTask1=Task1(3,9);

function Task2(){
    var user={        
    }
    user.name='Вася';
    user.surname='Петров';
    user.name='Сергей';
    delete user.name;    
}
function Task3(freeObject){
    var isObject=true;
    for (var key in freeObject) {
        isObject=false;
    }
    return isObject;
}
var salaries = {
    "Вася": 100,
    "Петя": 150,
    "Анна": 250
  };

function Task4(obj){
    var sum=0;
    for (var key in object) {
        sum+=salaries[key];
    }
    return sum;
}

function Task5(obj){
    var isObject=true;
    var highSalary=0;
    for (var key in obj) {
        if(highSalary<obj[key]){
            highSalary=obj[key];
            isObject=false;
        }
    }
    if(isObject){
        return 'нет сотрудников';
    }else{
        return highSalary;
    }    
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function Task6(obj){
    for (var key in obj) {
        if (isNumeric(obj[key])) {
          obj[key] *= 2;
        }
    } 
}
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

Task6(menu);
for (var key in menu) {
    console.log( key + " : " + menu[key] );
} 

function Task7(arr){        
    const rand=Math.round(Math.random()*arr.lenght);
    return arr[rand];
}
const intRand=[2,3,13];
console.log(Task7(intRand));

function Task8(){   
    var arr = [];
    while (true) {
        const value="";/*prompt('Your value','');  */
        if (value === "" || value === null || isNaN(value)) break;
        arr.push(value);
    }   
    var sum=0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(Task8());

function find(arr,value){   
    for(let i=0;i<arr.length;i++){
        if (value === arr[i]) return 1; 
    }    
    return -1;
}
const arrNumber=[0,3,4,5];
console.log(find(arrNumber,4));

function filterRange(arr, a, b) {
    var result = [];  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i] <= b) {
        result.push(arr[i]);
      }
    }  
    return result;
}
console.log(filterRange(arrNumber,1,5));

function pow(x, n) {
    var result = x;  
    for (var i = 1; i < n; i++) {
      result *= x;
    }  
    return result;
}
console.log(pow(2,3));

var dateObject = new Date(2012, 1, 20, 3, 12);

function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];  
    return days[date.getDay()];
}
console.log(getWeekDay(dateObject));

function getLocalDay(date) { 
    var day = date.getDay(); 
    if (day === 0) return 7;   
    return day;
}
console.log(getLocalDay(dateObject));

function getDateAgo(date, days) {
    var newDate= new Date(date);  
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
}
var findDate= getDateAgo(dateObject,5); 
console.log(findDate.toString());