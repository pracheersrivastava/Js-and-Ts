// const student = {
//     fullName: 'Pracheer Srivastava',
//     marks: 85.2,
//     printMarks: function() {
//         console.log('Marks =', this.marks)
//     },
// };




// const employee = {
//     calcTax() {
//         console.log("Tax Rate is 10%")
//     },
// }

// const karanArjun = {
//     salary : 50000,
//     calcTax() {
//         console.log("Tax Rate is 20%")
//     }
// };
// const karanArjun1 = {
//     salary : 50000,
// };
// const karanArjun2 = {
//     salary : 50000,
// };
// const karanArjun3 = {
//     salary : 50000,
// };

// karanArjun.__proto__ = employee;
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;



//Class//

// class toyotaCar {
//     constructor(brand) {
//         console.log("Creating new object");
//         this.brand = brand;
//         this.mileage = this.mileage
//     }
//     start() {
//         console.log("start")
//     }
//     stop() {
//         console.log("stop")
//     }
//     // setBrand(brand){
//     //     this.brandName = brand;}
// }

// let fortuner = new toyotaCar('fortuner', '10')
// let lexus = new toyotaCar('lexus', '7')


//Inheritance// Example 1
// class Parent{
    //     hello() {
        //         console.log("Hello")
        //     }
        // }
        
        // class Child extends Parent{}
        // let obj = new Child()
        
// //Inheritance// Example 2
// class Person{
//     constructor() {
//         this.species = "Homo sapiens"
//     }
//     eat() {
//         console.log("Eat")
//     }
//     sleep(){
//         console.log("Sleep")
//     }
//     work(){
//         console.log("Do Nothing!")
//     }
// }

// class Engineer extends Person{
//     work() {
//         console.log("Solve Problems, build something");
//     }
// }

// class Doctor extends Person{
//     work() {
//         console.log("Treat Patients")
//     }
// }

// class Jobless extends Person{}
// let jonObj = new Engineer();    
// let anObj = new Doctor();
// let viObj = new Jobless();

//Super Constructor//
class Person{
    constructor(name) {
        console.log("Enter Parent Constructor")
        this.species = "Homo sapiens"
        this.name = name
    }
    eat() {
        console.log("Eat")
    }
}
class Engineer extends Person{
    constructor(branch, name){
        console.log("Enter Child Constructor")
        super(name); // to invoke parent class constructor
        this.branch = branch;
        console.log("Exit Child Constructor")
    }
    work() {
        super.eat();
        console.log("Solve Problems, build something");
    }
}

let engObj = new Engineer("Chemical Engineering", "Jonty");