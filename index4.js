let radius = [1, 4, 2, 9]

function calculateArea(radius) {
    let output = []
    for (let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}

console.log(calculateArea(radius));

function calculateCircumference(radius) {
    let output = []
    for (let i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i])
    }
    return output
}
console.log(calculateCircumference(radius));

function calculateDiameter(radius){
    let output = []
    for(let i = 0; i < radius.length; i++){
        output.push(2 * radius[i])
    }
    return output
}

console.log(calculateDiameter(radius));