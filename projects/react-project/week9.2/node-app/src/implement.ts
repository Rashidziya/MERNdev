interface person{
    name:string;
    age:number;
    greet(phrase:string):void
}

// The implement of interface says that whatever in the interface is it should be
// forcefully defined in the class
class Employee implements person{
    name:string;
    age:number;

    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }

    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    }

}
const e=new Employee("rashid",23);
console.log(e.name);
e.greet("Hii");