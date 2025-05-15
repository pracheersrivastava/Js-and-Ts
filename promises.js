// async function hello() {
//     console.log("Hello");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather-data");
//         resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api(); 
//     await api(); 
// }


function getData (dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data : ${dataID}`);
            resolve("Success");
            // reject("Error"); 
        }, 5000);
    });
};

// async function getAllData() {
//     console.log('Fetching Data1')
//     await getData(1);
//     console.log('Fetching Data2')
//     await getData(2);
//     console.log('Fetching Data3')
//     await getData(3);
//     console.log('Fetching Data4')
//     await getData(4);
// }
(async function() {
    console.log('Fetching Data1')
    await getData(1);
    console.log('Fetching Data2')
    await getData(2);
    console.log('Fetching Data3')
    await getData(3);
    console.log('Fetching Data4')
    await getData(4);
})();



// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("Success");
//         }, 4000);
//     });

// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("Success");
//         }, 4000);
//     });

// }

// console.log('Fetching data1...');
// asyncFunc().then((res) => {
//     console.log("Promise returned", res);
//     console.log('Fetching data2...');
//     asyncFunc2().then((res) => {
//         console.log("Promise returned", res);
//     });
// }); 








// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('I am a promise');
//         // resolve('Success')
//         reject('Error')
// })};

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise returned", res);
// });

// promise.catch((err) => {
//     console.log("Rejected", err);
// });



// function getData (dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Data : ${dataID}`);
//             resolve("Success");
//             // reject("Error"); 
//         }, 5000);
//     });
// };

// //Callback Hell
// getData(1, () => {
//     console.log('Getting data 2...');
//     getData(2, () => {
//         console.log('Getting data 3...');
//         getData(3, () => {
//             console.log('Getting data 4...');
//             getData(4);
//         });
//     })
// });

// console.log('Fetching data1...');
// getData(1)
//     .then((res) => {
//         console.log(res)
//         return getData(2);
//     })
//     .then((res) => {
//         console.log(res);
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res)
//         return getData(4);
//         console.log(res)
//     });
























// // Using callbacks
// getData(1, () => {
//     setTimeout(() => {
//         console.log('Getting data 2...');
//     }, 1000);   
//     getData(2, () => {
//         setTimeout(() => {
//             console.log('Getting data 3...');
//         }, 1000);   
//         getData(3, () => {
//             setTimeout(() => {
//                 console.log('Getting data 4...');
//             }, 1000);   
//             getData(4)
//         });
// })});