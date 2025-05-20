// function addEventListener() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", () =>{
//         console.log("Button Clicked!", ++count);
//     })
// }

// addEventListener();



console.log("Started");

setTimeout(function cbt() {
    console.log("Timeout Timer")
}, 5000);


fetch('https://httpstat.us/200?sleep=4000')
    .then(function cbf() {console.log("Fetch Timer")});

console.log("Ended");