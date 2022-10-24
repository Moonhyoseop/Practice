import _ from 'lodash'
import getType from './getType'
import { random , sayHi} from './getRandom'

import myData from './myData.json'
import axios from 'axios'

//storage

function fetchMovies(){
    axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen&')
    .then(res=> {
        console.log(res)
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = res.data.Search[0].Title
        imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies();


const user = {
    name: 'moon',
    age: 29,
    email: 'gytjq0723@naver.com'
}
const park = {
    tall : '169',
    weight : '80kg'
}

console.log('user', user)

const str = JSON.stringify(user)
console.log('user', str)

const obj =JSON.parse(str)
console.log('obj',obj)


const str2 = localStorage.getItem('park')
const obj2 = JSON.parse(str2)
obj2.tall = '167'
console.log(obj2)

localStorage.setItem('park', JSON.stringify(obj2))




/*JSON

const user = {
    name: 'Heropy',
    age: 85,
    emails: [
        'thsdds@naver.com',
        'xzczcz@daum.net'
    ]
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj) */

/* lodash
const usersA = [
    { userId : '1', name: 'Park hyun ki'},
    { userId : '2', name: 'Lee do ji'}
]
const usersB = [
    { userId : '1', name: 'Park hyun ki'},
    { userId : '3', name: 'Amy'}
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)

const users = [
    { userId: '1', name: 'Heropy' },
    { userId: '2', name: 'Neo' },
    { userId: '3', name: 'Amy' },
    { userId: '4', name: 'Evan' },
    { userId: '5', name: 'Lewis' },
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'Heropy' })
console.log(users)*/



// 생성자 함수 클래스
/*class Vehicle{
    constructor(name, wheel){
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

const myBicycle = new Bicycle('삼천리자전거', 2)
const daughterBicycle = new Bicycle('세발자전거', 3)

console.log(myBicycle)
console.log(daughterBicycle)

class Car extends Vehicle{
    constructor(name, wheel, license) {
        super(name, wheel)
        this.license = license
    }
}

const MyCar = new Car ('벤츠', 4 , true)
const daughterCar = new Car('포르쉐', 4 , false)

console.log(MyCar)
console.log(daughterCar) 


function Skill(z,x,c){
    this.z = z
    this.x = x
    this.c = c
}

Skill.prototype.getSkill = function(){
    return `${this.z} ${this.x} ${this.c}`
}

const park = new Skill('박치기','북치기','현치기')
const doji = new Skill('도치기','이치기','영치기')
const moon = new Skill('문치기','효치기','섭치기')

console.log(park.getSkill())
console.log(doji )
console.log(moon)*/