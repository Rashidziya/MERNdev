"use strict";
// The implement of interface says that whatever in the interface is it should be
// forcefully defined in the class
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("rashid", 23);
console.log(e.name);
e.greet("Hii");
