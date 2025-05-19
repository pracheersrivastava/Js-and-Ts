// Improving objects.ts code
type EmployeeType = {
    readonly id: number;
    name : string;
    retire : (date: Date) => void
}


let employee2 : EmployeeType ={
    id : 1,
    name : "Pracheer",
    retire : (date : Date) => {
        console.log(date);
    }
}   