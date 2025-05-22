// let arr = [5, 1, 2, 4, 3]
// // //MAP
// // // function double(x){
// // //     return x*2
// // // }

// // function triple(x){
// //     return x*3
// // }

// // function binary(x) {
// //     return x.toString(2)
// // }


// // const output = (function double(x){
// //     return arr.map(x => x*2)
// // })(arr);

// // console.log(output);
// // // const output = arr.map(double);
// // const output2 = arr.map(triple);
// // const output3 = arr.map(binary);

// // // console.log(output);
// // console.log(output2);
// // console.log(output3);

// // FILTER
// // //filter odd values
// // function isOdd(x) {
// //     return x%2 === 1 ;
// // }
// // function isEven(x) {
// //     return x%2 === 0 ;
// // }
// // function greaterThan4(x) {
// //     return x > 4;
// // }
// // // const output = arr.filter(x => x %2 === 0)
// // const output = arr.filter(isOdd);
// // console.log(output);
// // const output2 = arr.filter(isEven);
// // console.log(output2);
// // const output3 = arr.filter(greaterThan4);
// // console.log(output3);


// // REDUCE
// //sum or max number

// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));


// const output = arr.reduce((acc, curr ) => {
//     acc = acc + curr;
//     return acc;
// }, 0)

// console.log(output);


// function findMax(arr) {
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i]> max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax(arr));

// const output2 = arr.reduce((max, curr) => {
//     if(curr>max){
//         max = curr;
//     }
//     return max;
// }, 0);

// console.log(output2);



const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Smith', age: 30},
    {firstName: 'Jim', lastName: 'Brown', age: 35},
    {firstName: 'Jake', lastName: 'White', age: 40},
]

// //list of full names

// const output = users.map(x => x.firstName +' '+ x.lastName);

// console.log(output);

// const output = users.reduce((acc, curr) => {
//     if(acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})

// console.log(output);


//first name of people with age less tha 30

// const output = users.filter(x => x.age <30).map(x => x.firstName);
// console.log(output);


const output = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc
}, []);

console.log(output);
