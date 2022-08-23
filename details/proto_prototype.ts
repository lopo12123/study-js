function Person() {

}
Person.prototype.name = 'lopo'
Person.prototype.age = 23
Person.prototype.getAge = function () {
    console.log(this.age)
}

// @ts-ignore
let person1 = new Person()
console.log(person1.name)  // lopo
person1.getAge()  // 23