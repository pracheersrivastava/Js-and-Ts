type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) {  
console.log(customer?.birthday?.getFullYear());
// }

//Optional Element Access Operator
//if (customer !== null && customer !== undefined) {
    // customer[0]
    //customer?.[0] // instead of above two lines, we can use this one line

//Optional Call Operator
let log1 : any = null;
log1?.(1);