let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
//생성자 방식
//const regexp = new RegExp('the','gi')
//리터럴 방식
const regexp = /brown/gi
console.log(regexp.test(str))

const regexp2 = /quick/gi
console.log(str.replace(regexp2,'hi'))

const regexp3 = /the/gi
console.log(str.match(regexp3))



console.log(
    str.match(/dog|fox/)
)

console.log(
    str.match(/https?/g)
)

console.log(
    str.match(/\b\w{2,3}\b/g)
)

console.log(
    str.match(/[가-힣]{1,}/g)
)

console.log(
    str.match(/\w/g)
)

console.log(
    str.match(/\bf\w{1,}\b/g)
)

const h = `  the hello world  !

`

console.log(
    h.replace(/\s/g, '')
)

