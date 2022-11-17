let list = [
  "01. 들어가며",
  "02. JS의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
  "06. 리액트",
  "07. 타입스크립트"
];

let newList = [];

for(let i = 0; i < list.length; i ++){
  newList.push(
    list[i].slice(4))
}
console.log(newList)


let userList = [
  { name: 'mike', age: 30},
  { name: 'tom', age: 10},
  { name: 'Jane', age: 27},
  { name: 'Sue', age: 26},
  { name: 'Harry', age: 42},
  { name: 'Steve', age: 60},
];



const result = userList.reduce((prev, cur) => {
  if(cur.age > 19){
    prev.push(cur.name)
  }
  return prev;
}, [])

console.log(result)

const result2 = userList.reduce((prev, cur)=> {
  return prev += cur.age; 
}, 0)

console.log(result2)

const result3 = userList.reduce((prev, cur)=> {
  if(cur.name.length === 3){
    prev.push(cur.name)
  }
  return prev;
}, [])

console.log(result3)




let result = Array(45).fill().map((el, i)=> {
  return i + 1
})

let result2 = result.map((el, i)=> {
  result.pop(i)
})
console.log(result2)


function User (name, age, ...skill){
  this.name = name;
  this.age = age;
  this.skill = skill;
}

const user1 = new User('mike',30,'html','css')
const user2 = new User('tom',20,'js','vue')
const user3 = new User('tom',20,'english')

console.log(user1)
console.log(user2)
console.log(user3)

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [...arr2, ...arr1]
console.log(arr3)


arr2.reverse().forEach((num) => {
 arr1.unshift(num)
})

console.log(arr1)



let user = { name : 'mike'};
let info = { age : 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = Object.assign({},user, info, {
    skills: [],
});

fe.forEach(el=> {
  user.skills.push(el)
})
lang.forEach(el=> {
  user.skills.push(el)
})
console.log(user)

user = {
  ...user,
  ...info,
    skills:[...fe,...lang]
}
console.log(user)


function showName(callback){
  setTimeout(()=>{
    console.log('현빡이')
    callback();
  },2000)
}

showName(function(){
  console.log('도지')
});
 

상속

class Vehicle{
  constructor(name,wheel){
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle{
  constructor(name, wheel){
    super(name,wheel)
  }
}

const myBicycle = new Bicycle('자전거', 2)
console.log(myBicycle)

class Car extends Vehicle{
  constructor(name, wheel, license){
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('자동차', 4, true)
console.log(myCar)

