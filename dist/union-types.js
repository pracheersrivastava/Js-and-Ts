"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        (typeof weight === 'string');
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
