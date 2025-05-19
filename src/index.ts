//Basic Types
let id: number = 5
let company: string = "Dynamatrix"
let isPublished: boolean = true
let x: any = "Hello"
let age: number
age = 40

let ids : number[] = [1, 2, 3, 4, 5, 6]

let arr: any[] = [1, 'hello', true]
arr.push('hi')

//tupple
let person: [number, string, boolean] = [1, 'Jon', true]

//Tupple Array
let employee: [number, string] []
employee = [
    [1, 'brad'],
    [2, 'Jon'],
    [3, 'Mon']
]


//Union
let pid: string | number
pid = '22'

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Up)
console.log(Direction2.Down)
console.log(Direction2.Left)
console.log(Direction2.Right)


//Objects
type User = {
    id : number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid : any = 1
// let customerId = <number>cid
let customerId = cid as number

//Functions
function addNum(x: number, y: number) : number{
    return x+y
}

console.log(addNum(1, 2))

function log(message : number|string) : void {
    console.log(message)
}

log(19)

//Interfaces
interface userInterface {
    readonly id : number,
    name: string
    age ?: number
}

const user1: userInterface = {
    id: 1,
    name: 'John'
}

interface mathFunc{
    (x:number, y:number) : number
}

const add : mathFunc = (x:number, y:number) : number => x+y
const sub : mathFunc = (x:number, y:number) : number => x-y

interface personInterface {
    id : number,
    name: string
    register() : string 
}
//Classes
class Person implements personInterface{
    id: number
    name : string

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered.`
    }
}

const jon = new Person(1, "Jon")
const mon = new Person(2, "Mon")

console.log(jon.register())

console.log(jon,mon)

jon.id = 5  

//Subclasss
class Employee extends Person {
    position : string,
    constructor(id:number, name:string, position:string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'DD', 'Developer')
console.log(emp.register())

//Generics
function getArray<T>(items:T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['Shawn', 'Brad', 'John'])

strArray.push('hello')