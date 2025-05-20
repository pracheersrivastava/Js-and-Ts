let radius = [1, 4, 2, 9]

function area(radius){
    return Math.PI * radius * radius
}

function calculate(radius, newcalculation){
    output = []
    for (let i = 0; i < radius.length; i++){
        output.push(newcalculation(radius[i]))
    }
    return output
}

function circumference(radius){
    return 2 * Math.PI * radius
}

console.log(calculate(radius, circumference));

console.log(calculate(radius, area));   