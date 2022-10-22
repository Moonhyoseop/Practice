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
console.log(doji)
console.log(moon)