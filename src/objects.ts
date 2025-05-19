let employee1: {
    readonly id: number;
    name : string;
    retire : (date: Date) => void
} = {id : 1, name : 'John', retire: (date : Date) => {
    console.log(date);
}}
// employee1.id = 2
